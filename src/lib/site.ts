export const siteConfig = {
  name: "SkyAgent",
  url: "https://agent-magicui.vercel.app",
  description: "Your template for building AI-powered agents with Magic UI.",
  links: {
    twitter: "https://x.com/dillionverma",
    github: "https://github.com/dillionverma",
  },
  nav: {
    links: [
      { href: "#features", label: "Features" },
      { href: "#pricing", label: "Pricing" },
      { href: "#testimonials", label: "Testimonials" },
      { href: "#faq", label: "FAQ" },
    ]
  },
  hero: {
    badgeIcon: "🚀",
    badgeText: "New Release",
    title: "Build AI Agents with Magic UI",
    subtitle: "Create powerful AI-powered applications with our comprehensive template",
    primaryCta: "Get Started",
    secondaryCta: "Learn More",
    videoSrc: "/hero-video.mp4"
  },
  companyShowcase: {
    title: "Trusted by leading companies",
    companyLogos: [
      { name: "Company 1", logo: "/logo1.png" },
      { name: "Company 2", logo: "/logo2.png" },
      { name: "Company 3", logo: "/logo3.png" },
    ]
  },
  quoteSection: {
    quote: "This template has revolutionized how we build AI applications.",
    author: "John Doe",
    title: "CTO at TechCorp",
    avatar: "/avatar.jpg"
  },
  featureSection: {
    title: "Powerful Features",
    description: "Everything you need to build amazing AI applications",
    features: [
      {
        title: "AI Integration",
        description: "Seamless AI model integration",
        icon: "🤖"
      },
      {
        title: "Modern UI",
        description: "Beautiful, responsive components",
        icon: "🎨"
      }
    ]
  },
  testimonials: [
    {
      name: "Jane Smith",
      title: "Product Manager",
      content: "Amazing template for AI applications",
      avatar: "/avatar1.jpg"
    },
    {
      name: "Bob Johnson",
      title: "Developer",
      content: "Saved us months of development time",
      avatar: "/avatar2.jpg"
    }
  ],
  faqSection: {
    title: "Frequently Asked Questions",
    description: "Get answers to common questions",
    faqs: [
      {
        question: "How do I get started?",
        answer: "Simply clone the repository and follow the setup instructions."
      },
      {
        question: "Is it free to use?",
        answer: "Yes, this template is open source and free to use."
      }
    ]
  },
  ctaSection: {
    title: "Ready to get started?",
    description: "Join thousands of developers building with our template",
    primaryCta: "Get Started Now",
    secondaryCta: "View Documentation",
    backgroundImage: "/cta-bg.jpg"
  },
  pricing: {
    title: "Simple Pricing",
    description: "Choose the plan that works for you",
    plans: [
      {
        name: "Free",
        price: "$0",
        features: ["Basic features", "Community support"],
        cta: "Get Started"
      },
      {
        name: "Pro",
        price: "$29",
        features: ["All features", "Priority support", "Advanced integrations"],
        cta: "Start Free Trial"
      }
    ]
  },
  growthSection: {
    title: "Growing Fast",
    description: "Join our community of developers",
    stats: [
      { label: "Active Users", value: "10,000+" },
      { label: "Projects Created", value: "50,000+" },
      { label: "GitHub Stars", value: "5,000+" }
    ]
  },
  footerLinks: {
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" }
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ],
    resources: [
      { label: "Documentation", href: "/docs" },
      { label: "Blog", href: "/blog" }
    ]
  },
  bentoSection: {
    title: "Everything you need",
    description: "Comprehensive features for building AI applications",
    items: [
      {
        id: "1",
        title: "AI Integration",
        description: "Connect with leading AI models",
        content: <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-4xl">🤖</div>
      },
      {
        id: "2",
        title: "Modern UI",
        description: "Beautiful, responsive components",
        content: <div className="w-full h-full bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-4xl">🎨</div>
      },
      {
        id: "3",
        title: "Fast Performance",
        description: "Optimized for speed and efficiency",
        content: <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white text-4xl">⚡</div>
      },
      {
        id: "4",
        title: "Easy Setup",
        description: "Get started in minutes",
        content: <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-4xl">🚀</div>
      }
    ]
  }
};

export type SiteConfig = typeof siteConfig;