import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Shield,
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
import HeroVisual from './HeroVisual';

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
    { icon: <BadgeCheck size={20} />, title: 'Websites & digital support', desc: 'Built, updated and looked after for you.' },
    { icon: <MessageCircle size={20} />, title: 'Patient, plain English', desc: 'No tech talk. I explain things simply.' },
    { icon: <CheckCircle2 size={20} />, title: 'Clear pricing', desc: 'We agree the work and cost before I start.' },
    { icon: <Shield size={20} />, title: 'Honest guidance', desc: "If something isn't worth doing, I'll tell you straight." }
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
              Based in County Wexford
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left content */}
            <div>
              <motion.h1
                variants={fadeInUp}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]"
              >
                Websites made simple.<br />
                <span className="text-primary">Technology made easier.</span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-text-muted text-lg mb-8 max-w-xl"
              >
                I'm Jared. I build and look after websites, help organise your digital world,
                and offer patient technology support—for your business or your home.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
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
            </div>

            {/* Animated hero visual - decorative */}
            <motion.div variants={fadeInUp} className="mt-4 lg:mt-0">
              <HeroVisual />
            </motion.div>
          </div>

          {/* Compact reassurance strip */}
          <motion.div
            variants={fadeInUp}
            data-testid="reassurance-strip"
            className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {trustBadges.map((badge, index) => (
              <div key={index} data-testid={`trust-badge-${index}`} className="flex items-start gap-2.5">
                <div className="text-primary mt-0.5">{badge.icon}</div>
                <div>
                  <p className="font-semibold text-white text-sm">{badge.title}</p>
                  <p className="text-text-muted text-xs mt-0.5">{badge.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Services Section
const serviceGroups = [
  {
    id: 'websites',
    label: 'Websites & Digital Support',
    intro: 'I help sole traders, small businesses and community organisations build and look after their websites, organise their content and keep everyday digital tasks manageable.',
    extra: 'Practical AI help: patient guidance with tools such as ChatGPT and Claude, including getting started and finding practical uses for everyday tasks.',
    cards: [
      {
        icon: <Globe size={28} />,
        title: 'New websites & improvements',
        items: [
          'Simple, clear websites for small businesses',
          'Improving or refreshing an existing site',
          'Pages, text and images set up properly',
          'Mobile-friendly from the start'
        ]
      },
      {
        icon: <Wrench size={28} />,
        title: 'Updates, forms & ongoing care',
        items: [
          'Text, image and page updates',
          'Enquiry and contact forms',
          'Small changes as your business grows',
          'Optional ongoing care if you want it looked after'
        ]
      },
      {
        icon: <Mail size={28} />,
        title: 'Domain & email setup',
        items: [
          'Domain name setup and renewals explained',
          'Business email set up correctly',
          'Getting your business online and findable',
          'Helping you manage your own account details safely'
        ]
      },
      {
        icon: <HardDrive size={28} />,
        title: 'Organising your digital world',
        items: [
          'Google Drive organisation',
          'Sensible folder structures you can actually use',
          'Tidying shared files and documents',
          'Everyday digital tasks kept manageable'
        ]
      }
    ]
  },
  {
    id: 'home-tech',
    label: 'Home Tech Help',
    intro: 'Patient, practical help with phones, computers, email, accounts and backups—so you can feel more comfortable using your technology.',
    cards: [
      {
        icon: <Monitor size={28} />,
        title: 'New device setup',
        items: [
          'Setting up a new phone, tablet or computer',
          'Moving your details across from an old device',
          'Tidying up a slow or cluttered device',
          'Simple help understanding how it works'
        ]
      },
      {
        icon: <Shield size={28} />,
        title: 'Accounts, email & staying safe',
        items: [
          'Email and messaging set up properly',
          'Password manager guidance',
          'Two-factor authentication set up with you',
          'Scam awareness and safer everyday settings'
        ]
      },
      {
        icon: <HardDrive size={28} />,
        title: 'Backups & storage',
        items: [
          'Help setting up and checking backups of your important files',
          'Freeing up full phone or computer storage',
          'Google Photos and Drive explained simply',
          'Moving files safely between devices'
        ]
      },
      {
        icon: <Film size={28} />,
        title: 'Photos, Videos & Memories',
        items: [
          'Finding and gathering photos across your devices and accounts',
          'Organising years of photographs into something clear',
          'Backing up your collection safely',
          'Enjoying and sharing them with family'
        ]
      }
    ]
  }
];

const Services = () => {
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
            How I can help
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            Practical help with your website, your business tools and the technology you use at home.
          </motion.p>
        </motion.div>

        <div className="space-y-16 md:space-y-20">
          {serviceGroups.map((group) => (
            <motion.div
              key={group.id}
              id={group.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              data-testid={`service-group-${group.id}`}
            >
              <motion.div variants={fadeInUp} className="mb-8 max-w-3xl">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                  {group.label}
                </h3>
                <p className="text-text-muted">{group.intro}</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {group.cards.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    data-testid={`service-card-${group.id}-${index}`}
                    className="bg-surface border border-white/10 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl hover:border-white/15 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    <h4 className="font-heading text-xl font-semibold mb-4">{service.title}</h4>
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
              </div>

              {group.extra && (
                <motion.p
                  variants={fadeInUp}
                  data-testid={`service-group-extra-${group.id}`}
                  className="mt-6 text-text-muted text-sm max-w-3xl"
                >
                  {group.extra}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Creative extras - subtle minimal section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          data-testid="creative-extras"
          className="mt-16 max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 text-primary/80 mb-3">
            <Film size={16} />
            <span className="text-xs font-semibold tracking-widest uppercase">Creative extras</span>
          </div>
          <p className="text-text-muted">
            If you'd like, a favourite set of photos and clips can be pulled together into a simple
            video with music—something easy to watch and share with family.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorks = ({ onOpenContact }) => {
  const steps = [
    { number: '01', title: 'Get in touch', desc: 'Tell me what you\'d like help with or what you\'re hoping to create. No technical language needed.' },
    { number: '02', title: 'Quick assessment', desc: 'I\'ll get back to you quickly with a clear idea of what we\'re dealing with and how I can help.' },
    { number: '03', title: 'Sorted together', desc: 'A home visit, a website project, or simple guidance — with the work and time agreed beforehand.' }
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
      title: 'Website projects — quoted individually',
      desc: 'Based on the agreed scope, with optional ongoing care.'
    },
    {
      title: 'Ongoing digital support — €25 per hour',
      desc: 'The work and estimated time are agreed beforehand.'
    },
    {
      highlight: true,
      title: 'Local home visits — €40',
      desc: 'Including local travel and the first hour of help.',
      sub: 'Additional time — €25 per hour, agreed before continuing.',
      note: 'Send me your location when enquiring so I can confirm coverage. Any travel charge outside my local area will be agreed before you book.'
    }
  ];

  return (
    <section id="pricing" data-testid="pricing-section" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
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
                {item.sub && (
                  <p className="text-text-muted text-sm mt-3 pt-3 border-t border-white/10">
                    {item.sub}
                  </p>
                )}
                {item.note && (
                  <p className="text-text-muted/70 text-xs mt-3">{item.note}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* A straightforward approach - compact, welcoming */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          data-testid="approach-section"
          className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
        >
          <h3 className="font-heading text-xl font-semibold mb-3">A straightforward approach</h3>
          <p className="text-text-muted text-sm mb-3">
            We'll agree what you need and what it will cost before I start. You stay in control of
            your accounts and enter your own passwords. I won't keep your passwords, recovery
            phrases or security codes.
          </p>
          <p className="text-text-muted text-sm">
            My focus is websites and everyday technology support. If a task needs specialist
            hardware repair, data recovery or a security investigation, I'll explain that clearly.
          </p>
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
              Sole traders, small businesses and community organisations. I build and look after websites, organise content and files, and keep everyday digital tasks manageable.
            </p>
            <p className="text-text-muted mb-6">
              If you need something more custom, get in touch and I'll let you know what's realistic.
            </p>
            <ul className="space-y-2">
              {[
                'New websites and improvements',
                'Website updates and forms',
                'Domain and email setup',
                'Google Drive organisation and ongoing support'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-text-muted text-sm">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

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
              Whether it's a slow laptop or phone, a device full of photos and videos, or concerns around security as technology moves fast, I keep things simple and under control.
            </p>
            <p className="text-text-muted mb-6">
              I help with data, storage, accounts, websites, systems, and AI. Clear, practical support so you always know what's going on and what to do next.
            </p>
            <ul className="space-y-2">
              {[
                'Device setup and troubleshooting',
                'Security basics and scam awareness',
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
      answer: "I'm based near Oylegate in County Wexford. Send me your location when you enquire and I'll confirm coverage. Any travel charge outside my local area will be agreed before you book."
    },
    {
      question: 'What does a home visit cost?',
      answer: "A local home visit is €40, which includes local travel and the first hour of help. If more time is needed, it's €25 per hour and always agreed with you before we continue."
    },
    {
      question: 'Do you need my passwords?',
      answer: "No. You stay in control of your accounts and enter your own passwords, and I won't keep passwords, recovery phrases or security codes. If you're locked out of an Apple, Google or Microsoft account, we follow the official recovery steps together — I can guide you through the process, but I won't bypass it."
    },
    {
      question: 'Can you build or look after my website?',
      answer: "Yes. I build simple, clear websites for sole traders, small businesses and community groups, and I can look after updates afterwards. Website projects are quoted individually based on the agreed scope, with optional ongoing care. Ongoing digital support is €25 per hour, with the work and estimated time agreed beforehand."
    },
    {
      question: "What happens if you can't help with my problem?",
      answer: "I'll discuss what you need before booking and let you know if it sounds like specialist work. If a limitation becomes clear during a visit, I'll explain it and agree the next step with you. The visit charge covers the agreed time and assistance, rather than a guaranteed fix. Any additional time is agreed before continuing."
    },
    {
      question: 'Can you help with AI tools?',
      answer: "Yes. I offer patient guidance with tools such as ChatGPT and Claude, including getting started and finding practical uses for everyday tasks. It sits alongside the website and technology support rather than being a separate service."
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
              Tell me what you'd like help with. I'll get back to you to discuss the next step.
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
    service: '',
    location: '',
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
          service: formData.service,
          location: formData.location,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', service: '', location: '', message: '', honeypot: '' });
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
            className="relative bg-surface border border-white/10 rounded-3xl p-8 md:p-10 max-w-lg w-full shadow-2xl max-h-[85vh] overflow-y-auto overscroll-contain"
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
                <h3 className="font-heading text-2xl font-semibold mb-2">Send an enquiry</h3>
                <p className="text-text-muted mb-6">
                  Tell me a little about what you need help with, and I'll get back to you to
                  discuss the next step. Please don't send passwords or security codes.
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
                      <label htmlFor="service" className="block text-sm font-medium mb-2">What do you need help with?</label>
                      <select
                        id="service"
                        name="service"
                        required
                        data-testid="contact-form-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors appearance-none"
                      >
                        <option value="" disabled className="bg-surface">Please choose…</option>
                        <option value="Websites & Digital Support" className="bg-surface">Websites &amp; Digital Support</option>
                        <option value="Home Tech Help" className="bg-surface">Home Tech Help</option>
                        <option value="Not Sure" className="bg-surface">Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium mb-2">Town or area <span className="text-text-muted font-normal">(optional, for home visits)</span></label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        data-testid="contact-form-location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                        placeholder="Only needed for a home visit"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">What do you need?</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={3}
                        data-testid="contact-form-message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors resize-none"
                        placeholder="Describe what you'd like help with..."
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
