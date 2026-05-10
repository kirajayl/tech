"use client";

import { useEffect, useRef, useState } from "react";
import {
  Zap,
  Monitor,
  BarChart3,
  Link2,
  PenTool,
  Activity,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  CheckCircle2,
  Clock,
  Cog,
  TrendingUp,
  Shield,
  Users,
  Sparkles,
  Building2,
  UtensilsCrossed,
  Factory,
  Landmark,
  Truck,
  ShoppingCart,
  GraduationCap,
  Megaphone,
  HomeIcon,
} from "lucide-react";

/* ──────────────────────────── ANIMATION HOOK ──────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ──────────────────────────── COUNTER COMPONENT ──────────────────────────── */
function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!visible || hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [visible, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

/* ──────────────────────────── NAVBAR ──────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#why-us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.jpg" alt="1% Tech" className="h-8 w-8 rounded-full object-cover" />
            <span className="text-xl font-bold tracking-tight">
              1% Tech
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-border pb-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href="#contact"
                className="block text-center rounded-lg bg-foreground text-background px-5 py-2.5 text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Start a Project
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

/* ──────────────────────────── HERO ──────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-24 md:py-32">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] font-medium text-muted-foreground mb-6">
            AI-Powered Operations
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            The 1% that changes
            <br />
            <span className="gradient-text">everything.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We solve the problems that hold your business back. AI systems that
            automate your operations — so you can focus on growth.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-8 py-4 text-base font-medium hover:opacity-90 transition-all group"
            >
              Start a Project
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-4 text-base font-medium hover:bg-muted transition-colors"
            >
              What We Do ↓
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p className="mt-12 text-xs text-muted-foreground/60 uppercase tracking-widest">
            Powered by enterprise-grade AI
          </p>
          <div className="mt-4 flex items-center justify-center gap-8 opacity-40">
            {["OpenAI", "Anthropic", "Google", "Meta AI", "Mistral"].map(
              (name) => (
                <span
                  key={name}
                  className="text-xs font-medium text-muted-foreground"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </FadeUp>

        <FadeIn delay={0.7}>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={24} className="mx-auto text-muted-foreground/40" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ──────────────────────────── ABOUT ──────────────────────────── */
function About() {
  const values = [
    {
      num: "01",
      title: "Ship it",
      desc: "Working software beats perfect plans",
    },
    {
      num: "02",
      title: "Solve the real problem",
      desc: "We don't sell AI for AI's sake",
    },
    {
      num: "03",
      title: "Earn the trust",
      desc: "Your operations are sacred",
    },
    {
      num: "04",
      title: "Stay curious",
      desc: "Every industry has patterns to decode",
    },
  ];

  return (
    <section id="about" className="py-28 md:py-40 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4">
            About Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            We see what others miss.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Every business we walked into had the same problem — smart people
            buried in repetitive work. Property managers copying prices between
            platforms. Restaurant owners guessing tomorrow's stock order. Factory
            supervisors staring at dashboards they couldn't act on fast enough.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            The tools existed. AI was there. But nobody was wiring it into the
            actual day-to-day operations where it mattered. So we started
            building.
          </p>
        </FadeUp>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <FadeUp key={v.num} delay={0.1 * i}>
              <div className="p-8 rounded-xl bg-white border border-border service-card h-full flex flex-col">
                <span className="text-3xl font-bold text-muted-foreground/30">
                  {v.num}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{v.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── SERVICES ──────────────────────────── */
const services = [
  {
    icon: Zap,
    title: "AI Workflow Automation",
    subtitle: "WIRE AI INTO YOUR DAILY OPS",
    desc: "Automate repetitive tasks, route decisions, and trigger actions across your tools without manual handoffs.",
    color: "#f59e0b",
  },
  {
    icon: Monitor,
    title: "Custom Platform Development",
    subtitle: "BUILT AROUND YOUR BUSINESS",
    desc: "Full-stack dashboards, APIs, and integrations engineered for your exact workflow — designed to scale.",
    color: "#3b82f6",
  },
  {
    icon: BarChart3,
    title: "Business Diagnostics & AI Strategy",
    subtitle: "DECODE YOUR BUSINESS",
    desc: "Structured AI reports that diagnose your operations, map growth paths, and prepare you for capital readiness.",
    color: "#8b5cf6",
  },
  {
    icon: Link2,
    title: "System Integration",
    subtitle: "ONE INTELLIGENT PIPELINE",
    desc: "Connect your existing tools into a single workflow. We bridge the gaps so data flows seamlessly.",
    color: "#10b981",
  },
  {
    icon: PenTool,
    title: "AI Content Engine",
    subtitle: "ALWAYS-ON MARKETING",
    desc: "Auto-aggregate trends, generate content, and schedule across every social platform — fully hands-free.",
    color: "#ec4899",
  },
  {
    icon: Activity,
    title: "Real-time Analytics",
    subtitle: "DECISIONS AT THE SPEED OF DATA",
    desc: "Live dashboards that surface what matters — predictive insights, anomaly alerts, and revenue intelligence.",
    color: "#06b6d4",
  },
];

function Services() {
  return (
    <section id="services" className="py-28 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4">
            What We Build
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Systems that do the work
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Not flashy demos — real systems that plug into real workflows and
            deliver measurable results.
          </p>
        </FadeUp>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={0.08 * i}>
              <div className="service-card p-10 rounded-xl border border-border bg-white h-full flex flex-col">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: s.color + "15" }}
                >
                  <s.icon size={24} style={{ color: s.color }} />
                </div>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {s.subtitle}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {s.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── INDUSTRIES ──────────────────────────── */
const industries = [
  {
    id: "marketing",
    icon: Megaphone,
    label: "Marketing & Social",
    tagline: "ALWAYS-ON CONTENT ENGINE",
    desc: "AI auto-aggregates trending topics, generates on-brand content, visuals, and short-form video, then schedules everything across all your social platforms — hands-free.",
    before: "16 hrs",
    beforeLabel: "Weekly content time",
    after: "20 min",
    afterLabel: "Hands-on time saved",
    savings: "98%",
    metrics: [
      { label: "Content Output", value: "+340%", highlight: false },
      { label: "Engagement Rate", value: "+67%", highlight: false },
      { label: "Time Saved", value: "98%", highlight: true },
    ],
  },
  {
    id: "property",
    icon: HomeIcon,
    label: "Property Management",
    tagline: "FROM INVENTORY TO INSIGHTS",
    desc: "AI-managed listings, dynamic pricing, and booking sync across Airbnb, Booking.com, Agoda — all from one dashboard.",
    before: "90 min",
    beforeLabel: "Daily manual updates",
    after: "Real-time",
    afterLabel: "No more manual updates",
    savings: "100%",
    metrics: [
      { label: "Occupancy Rate", value: "94%", highlight: false },
      { label: "Revenue Growth", value: "+38%", highlight: true },
      { label: "Time Saved", value: "100%", highlight: false },
    ],
  },
  {
    id: "fnb",
    icon: UtensilsCrossed,
    label: "Food & Beverage",
    tagline: "PREDICT BEFORE IT BREAKS",
    desc: "Demand forecasting, automated stock reordering, and waste reduction. Your kitchen runs itself.",
    before: "2 hrs",
    beforeLabel: "Daily inventory check",
    after: "5 min",
    afterLabel: "Daily time saved",
    savings: "96%",
    metrics: [
      { label: "Waste Reduction", value: "-34%", highlight: true },
      { label: "Orders Processed", value: "342/day", highlight: false },
      { label: "Revenue", value: "RM 18.4K", highlight: false },
    ],
  },
  {
    id: "manufacturing",
    icon: Factory,
    label: "Manufacturing",
    tagline: "YOUR ANALYST THAT NEVER SLEEPS",
    desc: "Real-time OEE tracking, predictive maintenance alerts, and production line optimization.",
    before: "4 hrs",
    beforeLabel: "Detect machine failure",
    after: "Instant",
    afterLabel: "Downtime reduction",
    savings: "62%",
    metrics: [
      { label: "OEE", value: "87.3%", highlight: true },
      { label: "Quality", value: "99.2%", highlight: false },
      { label: "Availability", value: "94.1%", highlight: false },
    ],
  },
  {
    id: "finance",
    icon: Landmark,
    label: "Investment & Finance",
    tagline: "EVERY ROUTE, OPTIMIZED",
    desc: "Automated deal flow analysis, portfolio monitoring, valuation models, and investor-ready report generation.",
    before: "8 hrs",
    beforeLabel: "Quarterly report",
    after: "12 min",
    afterLabel: "Report turnaround",
    savings: "97%",
    metrics: [
      { label: "Pipeline", value: "RM 24M", highlight: false },
      { label: "IRR", value: "22.4%", highlight: true },
      { label: "Auto Reports", value: "6", highlight: false },
    ],
  },
  {
    id: "logistics",
    icon: Truck,
    label: "Logistics & Supply Chain",
    tagline: "EVERY ROUTE, OPTIMIZED",
    desc: "Fleet tracking, route optimization, delivery ETAs, and fuel cost reduction — powered by real-time AI.",
    before: "90 min",
    beforeLabel: "Route planning",
    after: "3 min",
    afterLabel: "Planning time",
    savings: "97%",
    metrics: [
      { label: "Fuel Savings", value: "+18%", highlight: true },
      { label: "On-time Delivery", value: "99.2%", highlight: false },
      { label: "Routes Optimized", value: "30/day", highlight: false },
    ],
  },
  {
    id: "retail",
    icon: ShoppingCart,
    label: "Retail & E-commerce",
    tagline: "SELL SMARTER, STOCK BETTER",
    desc: "Sales forecasting, inventory intelligence, dynamic promotions, and zero-stockout operations.",
    before: "4 hrs",
    beforeLabel: "Weekly stock analysis",
    after: "10 min",
    afterLabel: "Weekly time saved",
    savings: "96%",
    metrics: [
      { label: "Revenue", value: "RM 48K", highlight: true },
      { label: "Orders", value: "+15%", highlight: false },
      { label: "Stockouts", value: "0", highlight: false },
    ],
  },
  {
    id: "education",
    icon: GraduationCap,
    label: "Education & Training",
    tagline: "SCALE LEARNING, NOT ADMIN",
    desc: "Student progress tracking, at-risk detection, automated communications, and course performance analytics.",
    before: "30 min",
    beforeLabel: "Per student report",
    after: "2 min",
    afterLabel: "Reporting time saved",
    savings: "93%",
    metrics: [
      { label: "Students", value: "1,842", highlight: false },
      { label: "Completion", value: "89%", highlight: true },
      { label: "At-Risk Detected", value: "23", highlight: false },
    ],
  },
];

function Industries() {
  const [active, setActive] = useState(0);
  const ind = industries[active];

  return (
    <section id="industries" className="py-28 md:py-40 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4">
            Industries We Serve
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            AI molded to your industry
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            We don't do one-size-fits-all. Every solution is built around the
            patterns and pain points of your specific vertical.
          </p>
        </FadeUp>

        {/* Tabs */}
        <div className="mt-16 flex flex-wrap gap-3">
          {industries.map((ind, i) => (
            <button
              key={ind.id}
              onClick={() => setActive(i)}
              className={`industry-tab inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border ${
                active === i
                  ? "bg-foreground text-background border-foreground"
                  : "bg-white text-muted-foreground border-border hover:border-foreground/30"
              }`}
            >
              <ind.icon size={16} />
              <span className="hidden sm:inline">{ind.label}</span>
            </button>
          ))}
        </div>

        {/* Active industry content */}
        <FadeUp key={ind.id}>
          <div className="mt-12">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {ind.tagline}
                </p>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold">
                  {ind.label}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">
                  {ind.desc}
                </p>
              </div>
              {/* Savings badge */}
              <div className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-50 text-green-700 text-sm font-semibold">
                <CheckCircle2 size={16} />
                <AnimatedCounter end={parseInt(ind.savings)} suffix="%" /> time savings
              </div>
            </div>

            {/* Before/After + Metrics in a single row */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="col-span-1 p-5 rounded-xl bg-white border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Before</p>
                <p className="mt-1 text-2xl font-bold text-red-500">{ind.before}</p>
                <p className="text-xs text-muted-foreground">{ind.beforeLabel}</p>
              </div>
              <div className="col-span-1 p-5 rounded-xl bg-foreground text-background">
                <p className="text-xs uppercase tracking-wider opacity-70">After</p>
                <p className="mt-1 text-2xl font-bold">{ind.after}</p>
                <p className="text-xs opacity-70">{ind.afterLabel}</p>
              </div>
              {ind.metrics.map((m, i) => (
                <div
                  key={i}
                  className={`col-span-1 p-5 rounded-xl border ${
                    m.highlight
                      ? "bg-foreground text-background border-foreground"
                      : "bg-white border-border"
                  }`}
                >
                  <p className={`text-xs uppercase tracking-wider ${m.highlight ? "opacity-70" : "text-muted-foreground"}`}>
                    {m.label}
                  </p>
                  <p className="mt-1 text-2xl font-bold">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-16 text-center text-muted-foreground">
            Don't see your industry?{" "}
            <a href="#contact" className="underline hover:text-foreground">
              We adapt to any vertical.
            </a>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ──────────────────────────── PROCESS ──────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We map your operations — identify bottlenecks, repetitive tasks, and high-impact automation opportunities.",
    icon: Sparkles,
  },
  {
    num: "02",
    title: "Design",
    desc: "We architect a solution tailored to your workflow — choosing the right AI models, integrations, and interfaces.",
    icon: Monitor,
  },
  {
    num: "03",
    title: "Build",
    desc: "We develop, test, and deploy your system. Real software, real integrations, real results.",
    icon: Cog,
  },
  {
    num: "04",
    title: "Scale",
    desc: "We monitor, optimize, and expand. As your business grows, your AI grows with it.",
    icon: TrendingUp,
  },
];

function Process() {
  return (
    <section id="process" className="py-28 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            From discovery to deployment
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            A proven four-step process that turns operational friction into
            automated efficiency.
          </p>
        </FadeUp>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((s, i) => (
            <FadeUp key={s.num} delay={0.1 * i}>
              <div className="relative p-10 rounded-xl border border-border bg-white service-card h-full">
                {/* Step number */}
                <span className="text-5xl font-bold text-muted-foreground/10 absolute top-4 right-4">
                  {s.num}
                </span>
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <s.icon size={24} className="text-foreground" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2">
                    <ArrowRight size={16} className="text-muted-foreground/30" />
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── WHY US ──────────────────────────── */
const whyUs = [
  {
    icon: Shield,
    title: "Results in weeks, not months",
    desc: "First working system deployed fast. Then we refine based on real data — not guesswork.",
  },
  {
    icon: Users,
    title: "One partner, infinite solutions",
    desc: "From marketing to logistics to finance — one team that handles it all. No bouncing between vendors.",
  },
  {
    icon: Zap,
    title: "Real systems, not demos",
    desc: "Production-grade software that runs your business — not flashy prototypes that fall apart at scale.",
  },
  {
    icon: Building2,
    title: "Built for Malaysian businesses",
    desc: "We understand local markets, regulations, and workflows — not imported templates.",
  },
  {
    icon: Clock,
    title: "Ship fast, iterate faster",
    desc: "First working version in weeks. Then we refine based on real usage — not guesswork.",
  },
  {
    icon: TrendingUp,
    title: "ROI in weeks",
    desc: "Our systems pay for themselves fast. If we can't show clear value, we'll tell you upfront.",
  },
];

function WhyUs() {
  return (
    <section id="why-us" className="py-28 md:py-40 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4">
            Why 1% Tech
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Built different
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            We don't just bolt AI onto your stack. We engineer systems that
            become the backbone of your operations.
          </p>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((w, i) => (
            <FadeUp key={w.title} delay={0.08 * i}>
              <div className="p-10 rounded-xl bg-white border border-border service-card h-full">
                <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center">
                  <w.icon size={20} className="text-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {w.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── CTA / CONTACT ──────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 bg-foreground text-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] font-medium opacity-70 mb-4">
            Let's Talk
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ready to automate?
          </h2>
          <p className="mt-4 text-lg opacity-70 max-w-xl mx-auto">
            Tell us about your operations. We'll show you what AI can do for
            your business — no fluff, just a real conversation.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="https://nas.com/theonepercentbetterprogram/sessions/ai-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-background text-foreground px-8 py-4 text-base font-medium hover:opacity-90 transition-all"
            >
              Book a Consultation
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ──────────────────────────── FOOTER ──────────────────────────── */
function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="1% Tech" className="h-7 w-7 rounded-full object-cover" />
            <span className="text-lg font-bold tracking-tight">1% Tech</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#industries" className="hover:text-foreground transition-colors">
              Industries
            </a>
            <a href="#process" className="hover:text-foreground transition-colors">
              Process
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2026 1% Tech. All rights reserved.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground/50">
            Powered by{" "}
            <a
              href="https://www.runestack.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted-foreground transition-colors"
            >
              RuneStack
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────────────── MAIN PAGE ──────────────────────────── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Process />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}