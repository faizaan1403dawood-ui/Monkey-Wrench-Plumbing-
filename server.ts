import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, service, message } = req.body;

    console.log("Received contact form submission:", { name, email, service, message });

    // In a real production environment, you would use a service like SendGrid, Mailgun, or AWS SES.
    // For this demonstration, we'll set up a transporter that logs the intent.
    // To make this functional, the user would need to provide SMTP credentials.
    
    try {
      // This is a placeholder for the actual email sending logic.
      // If SMTP_USER and SMTP_PASS were provided in .env, this would send a real email.
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const mailOptions = {
          from: email,
          to: 'monkeywrenchplumbinginc@gmail.com',
          subject: `New Appointment Request: ${service} from ${name}`,
          text: `
            Name: ${name}
            Email: ${email}
            Service: ${service}
            Message: ${message}
          `,
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: "Appointment request sent successfully!" });
      } else {
        // Fallback for demo: Log to console and return success
        console.log("SMTP credentials not found. Email would be sent to monkeywrenchplumbinginc@gmail.com");
        return res.status(200).json({ 
          success: true, 
          message: "Request received! (Note: SMTP credentials needed for real email delivery)",
          data: { to: 'monkeywrenchplumbinginc@gmail.com', subject: `New Appointment Request: ${service}` }
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send appointment request." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
