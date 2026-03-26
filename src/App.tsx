/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { 
  Phone, 
  Mail, 
  Calendar, 
  CheckCircle2, 
  Wrench, 
  Droplets, 
  Bath, 
  Utensils, 
  AlertCircle, 
  Menu, 
  X, 
  Star,
  MapPin,
  ShieldCheck,
  Clock,
  ThumbsUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    title: "Faucet Installation & Repair",
    description: "Expert repair and installation of all faucet types for kitchens and bathrooms.",
    icon: <Droplets className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Toilet Repair & Installation",
    description: "From simple leaks to full replacements, we handle all toilet plumbing needs.",
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Shower & Tub Fixtures",
    description: "Professional repair and installation of showerheads, valves, and tub spouts.",
    icon: <Bath className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Kitchen Plumbing",
    description: "Garbage disposals, dishwasher installs, and water line connections.",
    icon: <Utensils className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Leak Repairs",
    description: "Fast detection and repair of hidden leaks to prevent water damage.",
    icon: <AlertCircle className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "General Plumbing Fixes",
    description: "Comprehensive solutions for any residential plumbing issue you encounter.",
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
  },
];

const WHY_CHOOSE_US = [
  {
    title: "20+ Years Experience",
    description: "Over 20 years of combined plumbing expertise at your service.",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: "Family Owned",
    description: "Locally trusted and family-operated in Shakopee since 2018.",
    icon: <ThumbsUp className="w-6 h-6" />,
  },
  {
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your peace of mind.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Quality Parts",
    description: "We use only high-quality parts to ensure long-lasting repairs.",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah J.",
    location: "Shakopee, MN",
    text: "Monkey Wrench Plumbing was fantastic! Nick arrived on time, fixed our leaking toilet quickly, and the communication was excellent throughout.",
    rating: 5,
  },
  {
    name: "Mark T.",
    location: "Prior Lake, MN",
    text: "Professional and friendly service. They replaced our kitchen faucet and cleaned up everything afterward. Highly recommend John and the team!",
    rating: 5,
  },
  {
    name: "Linda R.",
    location: "Savage, MN",
    text: "Fast, high-quality work. They were very honest about the pricing and didn't try to upsell me on things I didn't need. A trustworthy local business.",
    rating: 5,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-blue-900">
              Monkey Wrench <span className="text-blue-600">Plumbing</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:7633700063"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              (763) 370-0063
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-2xl font-semibold text-slate-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:7633700063"
                className="bg-blue-600 text-white px-6 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call (763) 370-0063
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(59,130,246,0.08)_0%,transparent_100%)]" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
                  Licensed • Bonded • Insured
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                  Let Us Take That Plumbing Problem <span className="text-blue-600">Off Your Back</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Fast, high-quality, and guaranteed residential plumbing services in Shakopee and surrounding areas. Licensed master plumber providing affordable quotes for every job.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="tel:7633700063"
                    className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200 flex items-center justify-center gap-2 group"
                  >
                    <Phone className="w-5 h-5 group-hover:animate-pulse" />
                    Call Now
                  </a>
                  <a 
                    href="#contact"
                    className="w-full sm:w-auto bg-white text-blue-600 border-2 border-blue-100 px-8 py-4 rounded-full font-bold text-lg hover:border-blue-600 transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </a>
                </div>
                <div className="mt-12 flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  <span className="text-sm font-bold tracking-tighter">GOOGLE RATED</span>
                  <span className="text-sm font-bold tracking-tighter">NEXTDOOR FAV</span>
                  <span className="text-sm font-bold tracking-tighter">ANGI RECOMMENDED</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Professional Services</h2>
              <p className="text-slate-600">Comprehensive residential plumbing solutions tailored to your home's needs. No job is too small for our expert team.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
                >
                  <div className="mb-6 inline-block p-3 bg-blue-50 rounded-xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Shakopee Trusts Monkey Wrench Plumbing</h2>
                <p className="text-slate-600 mb-10 leading-relaxed">
                  Since 2018, we've been the go-to local plumbers for thousands of homeowners. We believe in integrity, great communication, and leaving every job site cleaner than we found it.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {WHY_CHOOSE_US.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <p className="text-blue-800 font-medium italic">
                    "We don't just fix pipes; we build relationships with our neighbors in the Shakopee community."
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1000" 
                    alt="Plumbing work in progress" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-blue-600">20+</div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Years of<br />Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-blue-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/20 skew-x-12 translate-x-1/4 -z-0" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Family Owned & Operated</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Founded by Nick and John, Monkey Wrench Plumbing is built on the foundation of local roots and a deep commitment to our customers. With over 20 years of combined experience, we've seen it all and fixed it all.
              </p>
              <p className="text-lg text-blue-200 mb-10 leading-relaxed">
                We are highly recommended on Google, Nextdoor, and Angi because we treat every home like our own. Our mission is simple: provide reliable, high-quality plumbing service at a fair price.
              </p>
              <div className="flex flex-wrap gap-12">
                <div>
                  <div className="text-4xl font-bold mb-2">Thousands</div>
                  <div className="text-blue-300 font-medium">Homes Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-blue-300 font-medium">Local Roots</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5-Star</div>
                  <div className="text-blue-300 font-medium">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-blue-50 rounded-3xl p-8 md:p-16 border border-blue-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Service Area</h2>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    We proudly serve Shakopee and the surrounding suburbs and metro areas. We are your local neighborhood plumbers, dedicated to keeping our community's pipes flowing smoothly.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-700">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span>Shakopee, MN (Base)</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span>Savage, Prior Lake, Chanhassen</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span>Eden Prairie, Burnsville, Lakeville</span>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <p className="text-sm text-red-800 font-medium">
                      Note: We do NOT provide service within the city limits of Minneapolis or St. Paul.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-96 bg-slate-200 flex items-center justify-center">
                   <div className="text-center p-8">
                      <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <p className="font-bold text-slate-900">Serving the Southwest Metro</p>
                      <p className="text-sm text-slate-500">Shakopee & Surrounding Suburbs</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get a Free Quote</h2>
                <p className="text-slate-600 mb-10 leading-relaxed">
                  Ready to fix that plumbing problem? Fill out the form below or give us a call directly. We offer easy online scheduling and transparent pricing.
                </p>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Call or Text</div>
                      <a href="tel:7633700063" className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">(763) 370-0063</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email Us</div>
                      <a href="mailto:monkeywrenchplumbinginc@gmail.com" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">monkeywrenchplumbinginc@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Book your appointment today and experience reliable, high-quality plumbing service from Shakopee's trusted experts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="tel:7633700063"
                className="w-full sm:w-auto bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl"
              >
                Call (763) 370-0063
              </a>
              <a 
                href="mailto:monkeywrenchplumbinginc@gmail.com?subject=Appointment Request&body=Hi Monkey Wrench Plumbing, I would like to book an appointment."
                className="w-full sm:w-auto bg-blue-700 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-800 transition-all border border-blue-500"
              >
                Schedule Online
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Monkey Wrench <span className="text-blue-600">Plumbing</span>
                </span>
              </div>
              <p className="max-w-md mx-auto md:mx-0 leading-relaxed">
                Professional, family-owned plumbing services in Shakopee, MN. We specialize in residential repairs and installations with a focus on quality and communication.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-blue-400 transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>(763) 370-0063</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">monkeywrenchplumbinginc@gmail.com</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>Shakopee, MN</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© {new Date().getFullYear()} Monkey Wrench Plumbing Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Faucet Repair/Install',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'Faucet Repair/Install', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
        <p className="text-slate-600 mb-8">Thank you for reaching out. We'll get back to you at monkeywrenchplumbinginc@gmail.com shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-blue-600 font-bold hover:underline"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Full Name</label>
          <input 
            type="text" 
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Email Address</label>
          <input 
            type="email" 
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700">Service Needed</label>
        <select 
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
        >
          <option>Faucet Repair/Install</option>
          <option>Toilet Repair/Install</option>
          <option>Kitchen Plumbing</option>
          <option>Leak Detection</option>
          <option>Other Service</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700">Message</label>
        <textarea 
          rows={4} 
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your plumbing problem..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
        ></textarea>
      </div>
      {status === 'error' && (
        <p className="text-red-600 text-sm font-medium">Something went wrong. Please try again or call us directly.</p>
      )}
      <button 
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : 'Send Request'}
      </button>
    </form>
  );
}
