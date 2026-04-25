import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Shield,
  Cpu,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowUp,
  Menu,
  X,
  Home,
  Briefcase,
  MessageCircle,
  Send,
  ExternalLink,
  Wrench,
  BadgeCheck,
  HardDrive,
  Globe,
  Film
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Navigation Component
const Navigation = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' }
  ];

  return (
    <header
      data-testid="navigation"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3" data-testid="brand-logo">
            <span className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-primary-hover shadow-lg shadow-primary/40" />
            <span className="font-heading font-extrabold text-lg tracking-tight">Jared Fixes</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`nav-${link.label.toLowerCase()}`}
                className="text-text-muted hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenContact}
              data-testid="nav-cta-button"
              className="bg-primary hover:bg-primary-hover text-white rounded-full px-6 py-2.5 font-semibold transition-all duration-200 hover:-translate-y-0.5"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-text-muted hover:text-white transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  data-testid="mobile-cta-button"
                  className="bg-primary hover:bg-primary-hover text-white rounded-full px-6 py-3 font-semibold transition-colors"
                >
                  Get in Touch
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

// Hero Section
const Hero = ({ onOpenContact }) => {
  const trustBadges = [
    { icon: <BadgeCheck size={20} />, title: 'Real-world experience', desc: 'I solve real problems quickly and clearly.' },
    { icon: <MessageCircle size={20} />, title: 'Friendly support', desc: 'No tech talk. I explain things simply.' },
    { icon: <CheckCircle2 size={20} />, title: 'No fix, no fee', desc: "If I can't help, you don't pay." },
    { icon: <Shield size={20} />, title: 'Honest guidance', desc: "If it's not improving within 20–30 minutes, I'll tell you honestly." }
  ];

  return (
    <section data-testid="hero-section" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background gradient - warm orange glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/3 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl"
        >
          {/* Location badges - LOCAL TRUST prominent */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-white">
              <MapPin size={14} className="text-primary" />
              Local tech help in Wexford
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-text-muted">
              Based near Oylegate, serving Wexford and surrounding areas.
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left content */}
            <div>
              <motion.h1
                variants={fadeInUp}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]"
              >
                Tech problems?<br />
                <span className="text-primary">I'll fix them.</span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl font-semibold text-white mb-4"
              >
                No jargon. No stress. Fast, clear help when you need it.
              </motion.p>
              
              <motion.p
                variants={fadeInUp}
                className="text-text-muted text-lg mb-8 max-w-xl"
              >
                Phones, PCs, storage, backup, email setup, and device security.
                I keep things simple and tell you honestly whether something is worth fixing,
                improving, or replacing.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={onOpenContact}
                  data-testid="hero-cta-primary"
                  className="bg-primary hover:bg-primary-hover text-white rounded-full px-8 py-4 font-semibold transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-primary/25"
                >
                  Get in Touch
                </button>
                <a
                  href="#services"
                  data-testid="hero-cta-secondary"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full px-8 py-4 font-semibold transition-all duration-200"
                >
                  See How I Help
                </a>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <p className="font-semibold text-white mb-1">Quick note</p>
                <p className="text-text-muted text-sm">
                  Clear, local IT help with a modern edge.
                </p>
              </motion.div>
            </div>

            {/* Trust badges */}
            <motion.div variants={staggerContainer} className="grid gap-4">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  data-testid={`trust-badge-${index}`}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-white/15 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-0.5">{badge.icon}</div>
                    <div>
                      <p className="font-semibold text-white mb-1">{badge.title}</p>
                      <p className="text-text-muted text-sm">{badge.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Services Section
const Services = () => {
  const services = [
    {
      icon: <Monitor size={28} />,
      title: 'Devices & everyday fixes',
      items: [
        'Phone clean and update',
        'Storage full and space recovery',
        'Slow computer tidy-up and updates',
        'Wi-Fi reconnect and basic fixes',
        'Simple help understanding your device'
      ]
    },
    {
      icon: <Shield size={28} />,
      title: 'Accounts, security & setup',
      items: [
        'Email and WhatsApp setup',
        'Password manager setup',
        'Two-step verification setup',
        'Phone number and account security',
        'Safer settings and scam awareness'
      ]
    },
    {
      icon: <HardDrive size={28} />,
      title: 'Backup & data management',
      items: [
        'Google Photos and Drive backup setup',
        'Photo and video backup',
        'Storage organisation and clean structure',
        'Moving data safely between devices',
        'Keeping files safe long-term'
      ]
    },
    {
      icon: <Globe size={28} />,
      title: 'Basic websites & online setup',
      items: [
        'Simple one-page websites',
        'Domain and email setup',
        'Small edits and updates',
        'Help getting your business online',
        'Practical AI tools for everyday use'
      ]
    }
  ];

  return (
    <section id="services" data-testid="services-section" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            What I can help with
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            Simple solutions for everyday tech problems, smart help with AI, security basics, data management, backup solutions, and digital setups.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              data-testid={`service-card-${index}`}
              className="bg-surface border border-white/10 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl hover:border-white/15 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2.5">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-text-muted text-sm">
                    <CheckCircle2 size={14} className="text-primary mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Creative extras - subtle minimal section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          data-testid="creative-extras"
          className="mt-12 max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 text-primary/80 mb-3">
            <Film size={16} />
            <span className="text-xs font-semibold tracking-widest uppercase">Creative extras</span>
          </div>
          <p className="text-text-muted">
            I can take your photos and videos and turn them into a simple, meaningful video with music. Something you can keep and watch anytime.
          </p>
          <p className="text-text-muted/70 text-sm mt-2">
            Short highlights or longer story-style versions available.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorks = ({ onOpenContact }) => {
  const steps = [
    { number: '01', title: 'Get in touch', desc: 'Describe your problem using the contact form. No need for tech jargon — just tell me what\'s wrong.' },
    { number: '02', title: 'Quick assessment', desc: 'I\'ll get back to you quickly with a clear idea of what we\'re dealing with and how I can help.' },
    { number: '03', title: 'Problem solved', desc: 'Visit, remote session, or simple guidance — I\'ll fix it, improve it, or give you honest next steps.' }
  ];

  return (
    <section data-testid="how-it-works-section" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            How it works
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-muted text-lg">
            Simple steps to getting your tech sorted.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              data-testid={`how-it-works-step-${index}`}
              className="relative bg-surface border border-white/10 rounded-2xl p-7 hover:border-white/15 transition-all duration-300"
            >
              <span className="text-5xl font-extrabold text-primary/20 font-heading">{step.number}</span>
              <h3 className="font-heading text-xl font-semibold mt-2 mb-3">{step.title}</h3>
              <p className="text-text-muted">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mt-10"
        >
          <button
            onClick={onOpenContact}
            data-testid="how-it-works-cta"
            className="bg-primary hover:bg-primary-hover text-white rounded-full px-8 py-4 font-semibold transition-all duration-200 hover:-translate-y-1"
          >
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Pricing Section
const Pricing = () => {
  const pricingItems = [
    {
      highlight: true,
      title: '€30 call-out',
      desc: '€30 call-out includes the first 30 minutes. Extra time is €20 per additional 30 minutes.'
    },
    {
      title: 'No fix, no pay',
      desc: "If I can't improve the problem or give a clear diagnosis + best next step, you only pay the call-out."
    },
    {
      title: 'Senior discount (75+)',
      desc: "Ask when you contact me and I'll apply it."
    }
  ];

  return (
    <section id="pricing" data-testid="pricing-section" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pricing Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-surface to-surface/50 border border-white/10 rounded-3xl p-8 md:p-10"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-8">Pricing</h2>
            
            <div className="space-y-4">
              {pricingItems.map((item, index) => (
                <div
                  key={index}
                  data-testid={`pricing-item-${index}`}
                  className={`rounded-2xl p-5 border ${
                    item.highlight
                      ? 'bg-primary/10 border-primary/30'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-text-muted text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-text-muted mt-6 text-sm">
              Every visit ends with one of these: fixed, improved, or diagnosed with the best route forward.
            </p>
          </motion.div>

          {/* Boundaries Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            data-testid="boundaries-section"
            className="bg-gradient-to-br from-surface to-surface/50 border border-white/10 rounded-3xl p-8 md:p-10"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-8">Boundaries</h2>
            
            <ul className="space-y-3">
              {[
                'No complex hardware repairs, soldering, or parts installs',
                'No deep data recovery or hacked-account investigations',
                'No cracked or dodgy software installs',
                "I won't ask for banking passwords — ever",
                'No bypassing locks or account checks',
                'No business servers or large office networks'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-text-muted">
                  <X size={16} className="text-red-400 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-text-muted mt-6 text-sm">
              If you're locked out of Apple, Google, or Microsoft accounts, we follow the official recovery steps.
              I can help guide the process, but I won't bypass it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// AI Help Section
const AIHelp = () => {
  return (
    <section data-testid="ai-help-section" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="bg-surface border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative"
        >
          {/* Subtle warm glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6"
              >
                Practical AI Help
              </motion.span>
              
              <motion.h2
                variants={fadeInUp}
                className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-6"
              >
                AI made practical.<br />
                <span className="text-text-muted">Not overwhelming.</span>
              </motion.h2>
              
              <motion.p variants={fadeInUp} className="text-text-muted text-lg mb-8">
                I help home users and small businesses get started with modern AI tools. No hype or confusion.
                Whether you're curious about what AI can actually do or need help setting it up, I'll keep it simple, useful, and tailored to you.
              </motion.p>

              <motion.ul variants={staggerContainer} className="space-y-3">
                {[
                  'Beginner-friendly setup and guidance (ChatGPT, Claude and more)',
                  'Practical workflow ideas for everyday tasks',
                  'Help choosing the right tools without overwhelm',
                  'Custom AI support available on request'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-3 text-white"
                  >
                    <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-white/10 flex items-center justify-center">
                <Cpu size={120} className="text-primary/40" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Home Users & Small Business Section
const Audience = ({ onOpenContact }) => {
  return (
    <section data-testid="audience-section" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Who I help
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Home Users */}
          <motion.div
            variants={fadeInUp}
            data-testid="audience-home-users"
            className="bg-surface border border-white/10 rounded-3xl p-8 md:p-10 hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <Home size={28} />
            </div>
            <h3 className="font-heading text-2xl font-semibold mb-4">Home Users</h3>
            <p className="text-text-muted mb-4">
              My main focus. Whether it's a slow laptop or phone, a device full of photos and videos, or concerns around security as technology moves fast, I keep things simple and under control.
            </p>
            <p className="text-text-muted mb-6">
              I help with data, storage, accounts, websites, systems, and AI. Clear, practical support so you always know what's going on and what to do next.
            </p>
            <ul className="space-y-2">
              {[
                'Device setup and troubleshooting',
                'Security basics and scam protection',
                'Email, messaging, and app setup',
                'Beginner-friendly AI guidance'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-text-muted text-sm">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Small Businesses */}
          <motion.div
            variants={fadeInUp}
            data-testid="audience-small-business"
            className="bg-surface border border-white/10 rounded-3xl p-8 md:p-10 hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <Briefcase size={28} />
            </div>
            <h3 className="font-heading text-2xl font-semibold mb-4">Small Businesses</h3>
            <p className="text-text-muted mb-4">
              I also help small businesses with simple, practical tech support and modern tools. From getting online to improving how things run day to day, I focus on what actually helps.
            </p>
            <p className="text-text-muted mb-6">
              If you need something more custom, get in touch and I'll let you know what's realistic.
            </p>
            <ul className="space-y-2">
              {[
                'Basic tech support and troubleshooting',
                'Security and backup guidance',
                'AI tools for productivity',
                'Simple website and online setup'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-text-muted text-sm">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-text-muted mt-10 max-w-2xl mx-auto"
        >
          Not sure if your situation fits? <button onClick={onOpenContact} className="text-primary hover:underline">Get in touch</button> and I'll let you know honestly.
        </motion.p>
      </div>
    </section>
  );
};

// FAQ Section
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What areas do you cover?',
      answer: "Wexford — based near Oylegate, covering roughly 20km. If you're slightly outside the area, still get in touch and I'll let you know."
    },
    {
      question: 'How long do visits usually take?',
      answer: "Most jobs are 30–90 minutes. If it's not improving within 20–30 minutes, I'll tell you straight away and recommend the best next step."
    },
    {
      question: 'Do you need my passwords?',
      answer: "No banking passwords ever. For accounts like email or Apple ID, I'll guide you through the official steps where needed, but I won't bypass security checks."
    },
    {
      question: "What if you can't fix it?",
      answer: "If I can't improve the issue or give a clear diagnosis and best next step, you only pay the call-out."
    },
    {
      question: 'Do you offer a pensioner discount?',
      answer: "Yes. Just mention it when you get in touch and I'll apply it."
    },
    {
      question: 'Can you help with AI tools?',
      answer: "Absolutely. I help beginners get started with ChatGPT and other practical AI tools. No hype, just useful guidance tailored to your needs."
    }
  ];

  return (
    <section id="faq" data-testid="faq-section" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Frequently asked questions
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              data-testid={`faq-item-${index}`}
              className="bg-surface border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
                data-testid={`faq-toggle-${index}`}
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-text-muted flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="px-5 pb-5 text-text-muted">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTA = ({ onOpenContact }) => {
  return (
    <section data-testid="final-cta-section" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-gradient-to-br from-surface via-surface to-primary/10 border border-white/10 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          {/* Subtle warm glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Let's get your tech sorted
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-xl mx-auto">
              Send me a message and I'll point you in the right direction straight away.
              If it sounds like a fit, we'll take it from there.
            </p>
            <button
              onClick={onOpenContact}
              data-testid="final-cta-button"
              className="bg-primary hover:bg-primary-hover text-white rounded-full px-10 py-4 font-semibold transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-primary/25"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Modal
const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '' // Hidden spam field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // URL-encode form data for Netlify Forms
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // If honeypot is filled, it's a bot - silently reject
    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          'bot-field': formData.honeypot,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', message: '', honeypot: '' });
        }, 2000);
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          data-testid="contact-modal"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-surface border border-white/10 rounded-3xl p-8 md:p-10 max-w-lg w-full shadow-2xl"
          >
            <button
              onClick={onClose}
              data-testid="contact-modal-close"
              className="absolute top-4 right-4 p-2 text-text-muted hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-green-400" />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-2">Message sent!</h3>
                <p className="text-text-muted">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-2xl font-semibold mb-2">Ask a quick question</h3>
                <p className="text-text-muted mb-6">
                  Tell me what's going on and I'll get back to you with a clear next step.
                </p>

                {submitError && (
                  <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    Something went wrong. Please try again or contact me directly.
                  </div>
                )}

                <form 
                  onSubmit={handleSubmit} 
                  name="contact" 
                  method="POST" 
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  data-testid="contact-form"
                >
                  {/* Hidden field for Netlify form name */}
                  <input type="hidden" name="form-name" value="contact" />
                  
                  {/* Honeypot field - hidden from users */}
                  <p className="hidden" aria-hidden="true">
                    <label>
                      Don't fill this out if you're human:
                      <input
                        name="bot-field"
                        value={formData.honeypot}
                        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </label>
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        data-testid="contact-form-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        data-testid="contact-form-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone <span className="text-text-muted font-normal">(optional)</span></label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        data-testid="contact-form-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">What's the problem?</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={3}
                        data-testid="contact-form-message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors resize-none"
                        placeholder="Briefly describe your tech issue..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-testid="contact-form-submit"
                      className="w-full bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white rounded-full px-6 py-3.5 font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer data-testid="footer" className="py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-primary to-primary-hover" />
          <span className="font-heading font-bold">Jared Fixes</span>
        </div>
        <p className="text-text-muted text-sm mb-4">Tech help made simple</p>
        <div className="flex items-center justify-center gap-6 text-sm">
          <a
            href="https://jaredtalbot.com"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-hub-link"
            className="text-text-muted hover:text-white transition-colors flex items-center gap-1.5"
          >
            JaredTalbot Hub
            <ExternalLink size={14} />
          </a>
        </div>
        <p className="text-text-muted/50 text-xs mt-6">
          © {new Date().getFullYear()} Jared Fixes. Wexford, Ireland.
        </p>
      </div>
    </footer>
  );
};

// Back to Top Button
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          data-testid="back-to-top"
          className="fixed bottom-6 right-6 w-12 h-12 bg-surface border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-surface-hover hover:border-white/20 transition-all duration-200 shadow-lg z-40"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Main App Component
function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-white">
      <Navigation onOpenContact={() => setIsContactOpen(true)} />
      <main>
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <Services />
        <HowItWorks onOpenContact={() => setIsContactOpen(true)} />
        <Pricing />
        <AIHelp />
        <Audience onOpenContact={() => setIsContactOpen(true)} />
        <FAQ />
        <FinalCTA onOpenContact={() => setIsContactOpen(true)} />
      </main>
      <Footer />
      <BackToTop />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
