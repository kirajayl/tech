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
  Landmark,
  ShoppingCart,
  GraduationCap,
  Megaphone,
  HomeIcon,
  Sun,
  Moon,
  Globe,
} from "lucide-react";
import { t } from "./translations";
import { useLang, LangProvider } from "./lang-context";

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
  const { lang, setLang, dark, setDark } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t("nav.about", lang), href: "#about" },
    { label: t("nav.services", lang), href: "#services" },
    { label: t("nav.industries", lang), href: "#industries" },
    { label: t("nav.process", lang), href: "#process" },
    { label: t("nav.whyUs", lang), href: "#why-us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2">
              <img src="/AI Labs Logo.png" alt="AI Labs" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
              <span className="text-xl font-bold tracking-tight">
                AI Labs
              </span>
            </a>
            <a
              href="https://the1percentclub.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md px-2 py-1"
            >
              ← 1% Club
            </a>
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}

            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "cn" : "en")}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md px-2 py-1"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              {lang === "en" ? "EN" : "中文"}
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md p-1.5"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {t("nav.startProject", lang)}
            </a>
          </div>

          {/* Mobile: toggles + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Language toggle (mobile) */}
            <button
              onClick={() => setLang(lang === "en" ? "cn" : "en")}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md px-2 py-1"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              {lang === "en" ? "EN" : "中文"}
            </button>

            {/* Dark mode toggle (mobile) */}
            <button
              onClick={() => setDark(!dark)}
              className="inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md p-1.5"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              className="p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-background border-t border-border pb-6">
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
                {t("nav.startProject", lang)}
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
  const { lang, dark } = useLang();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-24 md:py-32">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            `linear-gradient(${dark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${dark ? '#fff' : '#000'} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] font-medium text-muted-foreground mb-6">
            {t("hero.tagline", lang)}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            {t("hero.title1", lang)}
            <br />
            <span className="gradient-text">{t("hero.title2", lang)}</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("hero.desc", lang)}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-8 py-4 text-base font-medium hover:opacity-90 transition-all group"
            >
              {t("nav.startProject", lang)}
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-8 py-4 text-base font-medium hover:bg-muted transition-colors"
            >
              {t("hero.whatWeDo", lang)}
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p className="mt-12 text-xs text-muted-foreground/60 uppercase tracking-widest">
            {t("hero.poweredBy", lang)}
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
  const { lang } = useLang();
  const values = [
    {
      num: "01",
      title: t("about.v1.title", lang),
      desc: t("about.v1.desc", lang),
    },
    {
      num: "02",
      title: t("about.v2.title", lang),
      desc: t("about.v2.desc", lang),
    },
    {
      num: "03",
      title: t("about.v3.title", lang),
      desc: t("about.v3.desc", lang),
    },
    {
      num: "04",
      title: t("about.v4.title", lang),
      desc: t("about.v4.desc", lang),
    },
  ];

  return (
    <section id="about" className="py-28 md:py-40 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4">
            {t("about.label", lang)}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            {t("about.title", lang)}
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {t("about.p1", lang)}
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {t("about.p2", lang)}
          </p>
        </FadeUp>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <FadeUp key={v.num} delay={0.1 * i}>
              <div className="p-8 rounded-xl bg-background border border-border service-card h-full flex flex-col">
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
const serviceKeys = [
  { icon: Zap, key: "s1", color: "#f59e0b" },
  { icon: Monitor, key: "s2", color: "#3b82f6" },
  { icon: BarChart3, key: "s3", color: "#8b5cf6" },
  { icon: Link2, key: "s4", color: "#10b981" },
  { icon: PenTool, key: "s5", color: "#ec4899" },
  { icon: Activity, key: "s6", color: "#06b6d4" },
] as const;

function Services() {
  const { lang } = useLang();
  return (
    <section id="services" className="py-28 md:py-40 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4">
            {t("services.label", lang)}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {t("services.title", lang)}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            {t("services.desc", lang)}
          </p>
        </FadeUp>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceKeys.map((s, i) => (
            <FadeUp key={s.key} delay={0.08 * i}>
              <div className="service-card p-10 rounded-xl border border-border bg-background h-full flex flex-col">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: s.color + "15" }}
                >
                  <s.icon size={24} style={{ color: s.color }} />
                </div>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {t(`services.${s.key}.sub` as any, lang)}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{t(`services.${s.key}.title` as any, lang)}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {t(`services.${s.key}.desc` as any, lang)}
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
const industryKeys = [
  {
    id: "marketing",
    icon: Megaphone,
    key: "marketing",
    before: "16 hrs",
    after: "20 min",
    savings: "98%",
    metrics: [
      { value: "+340%", highlight: false, mKey: "m1" },
      { value: "+67%", highlight: false, mKey: "m2" },
      { value: "98%", highlight: true, mKey: "m3" },
    ],
  },
  {
    id: "property",
    icon: HomeIcon,
    key: "property",
    before: "90 min",
    after: "Real-time",
    savings: "100%",
    metrics: [
      { value: "94%", highlight: false, mKey: "m1" },
      { value: "+38%", highlight: true, mKey: "m2" },
      { value: "100%", highlight: false, mKey: "m3" },
    ],
  },
  {
    id: "fnb",
    icon: UtensilsCrossed,
    key: "fnb",
    before: "2 hrs",
    after: "5 min",
    savings: "96%",
    metrics: [
      { value: "-34%", highlight: true, mKey: "m1" },
      { value: "342/day", highlight: false, mKey: "m2" },
      { value: "RM 18.4K", highlight: false, mKey: "m3" },
    ],
  },
  {
    id: "finance",
    icon: Landmark,
    key: "finance",
    before: "8 hrs",
    after: "12 min",
    savings: "97%",
    metrics: [
      { value: "RM 24M", highlight: false, mKey: "m1" },
      { value: "22.4%", highlight: true, mKey: "m2" },
      { value: "6", highlight: false, mKey: "m3" },
    ],
  },
  {
    id: "retail",
    icon: ShoppingCart,
    key: "retail",
    before: "4 hrs",
    after: "10 min",
    savings: "96%",
    metrics: [
      { value: "RM 48K", highlight: true, mKey: "m1" },
      { value: "+15%", highlight: false, mKey: "m2" },
      { value: "0", highlight: false, mKey: "m3" },
    ],
  },
  {
    id: "education",
    icon: GraduationCap,
    key: "education",
    before: "30 min",
    after: "2 min",
    savings: "93%",
    metrics: [
      { value: "1,842", highlight: false, mKey: "m1" },
      { value: "89%", highlight: true, mKey: "m2" },
      { value: "23", highlight: false, mKey: "m3" },
    ],
  },
];

function Industries() {
  const [active, setActive] = useState(0);
  const { lang } = useLang();
  const ind = industryKeys[active];

  return (
    <section id="industries" className="py-28 md:py-40 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4">
            {t("industries.label", lang)}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {t("industries.title", lang)}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            {t("industries.desc", lang)}
          </p>
        </FadeUp>

        {/* Tabs */}
        <div className="mt-16 flex flex-wrap gap-3">
          {industryKeys.map((ind, i) => (
            <button
              key={ind.id}
              onClick={() => setActive(i)}
              className={`industry-tab inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border ${
                active === i
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-muted-foreground border-border hover:border-foreground/30"
              }`}
            >
              <ind.icon size={16} />
              <span className="hidden sm:inline">{t(`ind.${ind.key}.label` as any, lang)}</span>
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
                  {t(`ind.${ind.key}.tagline` as any, lang)}
                </p>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold">
                  {t(`ind.${ind.key}.label` as any, lang)}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">
                  {t(`ind.${ind.key}.desc` as any, lang)}
                </p>
              </div>
              {/* Savings badge */}
              <div className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-50 text-green-700 text-sm font-semibold">
                <CheckCircle2 size={16} />
                <AnimatedCounter end={parseInt(ind.savings)} suffix="%" /> {t("industries.timeSavings", lang)}
              </div>
            </div>

            {/* Before/After + Metrics in a single row */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="col-span-1 p-5 rounded-xl bg-background border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{t("industries.before", lang)}</p>
                <p className="mt-1 text-2xl font-bold text-red-500">{ind.before}</p>
                <p className="text-xs text-muted-foreground">{t(`ind.${ind.key}.beforeLabel` as any, lang)}</p>
              </div>
              <div className="col-span-1 p-5 rounded-xl bg-foreground text-background">
                <p className="text-xs uppercase tracking-wider opacity-70">{t("industries.after", lang)}</p>
                <p className="mt-1 text-2xl font-bold">{ind.after}</p>
                <p className="text-xs opacity-70">{t(`ind.${ind.key}.afterLabel` as any, lang)}</p>
              </div>
              {ind.metrics.map((m, i) => (
                <div
                  key={i}
                  className={`col-span-1 p-5 rounded-xl border ${
                    m.highlight
                      ? "bg-foreground text-background border-foreground"
                      : "bg-background border-border"
                  }`}
                >
                  <p className={`text-xs uppercase tracking-wider ${m.highlight ? "opacity-70" : "text-muted-foreground"}`}>
                    {t(`ind.${ind.key}.${m.mKey}` as any, lang)}
                  </p>
                  <p className="mt-1 text-2xl font-bold">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-16 text-center text-muted-foreground">
            {t("industries.notListed", lang)}{" "}
            <a href="#contact" className="underline hover:text-foreground">
              {t("industries.adapt", lang)}
            </a>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ──────────────────────────── PROCESS ──────────────────────────── */
const stepKeys = [
  { num: "01", key: "step1", icon: Sparkles },
  { num: "02", key: "step2", icon: Monitor },
  { num: "03", key: "step3", icon: Cog },
  { num: "04", key: "step4", icon: TrendingUp },
];

function Process() {
  const { lang } = useLang();
  return (
    <section id="process" className="py-28 md:py-40 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4">
            {t("process.label", lang)}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {t("process.title", lang)}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            {t("process.desc", lang)}
          </p>
        </FadeUp>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stepKeys.map((s, i) => (
            <FadeUp key={s.num} delay={0.1 * i}>
              <div className="relative p-10 rounded-xl border border-border bg-background service-card h-full">
                {/* Step number */}
                <span className="text-5xl font-bold text-muted-foreground/10 absolute top-4 right-4">
                  {s.num}
                </span>
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <s.icon size={24} className="text-foreground" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{t(`process.${s.key}.title` as any, lang)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t(`process.${s.key}.desc` as any, lang)}
                </p>
                {i < stepKeys.length - 1 && (
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
const whyUsKeys = [
  { icon: Shield, key: "w1" },
  { icon: Users, key: "w2" },
  { icon: Zap, key: "w3" },
  { icon: Building2, key: "w4" },
  { icon: Clock, key: "w5" },
  { icon: TrendingUp, key: "w6" },
];

function WhyUs() {
  const { lang } = useLang();
  return (
    <section id="why-us" className="py-28 md:py-40 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4">
            {t("whyUs.label", lang)}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {t("whyUs.title", lang)}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            {t("whyUs.desc", lang)}
          </p>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsKeys.map((w, i) => (
            <FadeUp key={w.key} delay={0.08 * i}>
              <div className="p-10 rounded-xl bg-background border border-border service-card h-full">
                <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center">
                  <w.icon size={20} className="text-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{t(`whyUs.${w.key}.title` as any, lang)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t(`whyUs.${w.key}.desc` as any, lang)}
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
  const { lang } = useLang();
  return (
    <section id="contact" className="py-28 md:py-40 bg-foreground text-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] font-medium opacity-70 mb-4">
            {t("contact.label", lang)}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {t("contact.title", lang)}
          </h2>
          <p className="mt-4 text-lg opacity-70 max-w-xl mx-auto">
            {t("contact.desc", lang)}
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
              {t("contact.book", lang)}
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
  const { lang } = useLang();
  return (
    <footer className="py-16 px-6 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/AI Labs Logo.png" alt="AI Labs" width={28} height={28} className="h-7 w-7 rounded-full object-cover" />
            <span className="text-lg font-bold tracking-tight">AI Labs</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">
              {t("footer.about", lang)}
            </a>
            <a href="#services" className="hover:text-foreground transition-colors">
              {t("footer.services", lang)}
            </a>
            <a href="#industries" className="hover:text-foreground transition-colors">
              {t("footer.industries", lang)}
            </a>
            <a href="#process" className="hover:text-foreground transition-colors">
              {t("footer.process", lang)}
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              {t("footer.contact", lang)}
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            {t("footer.copyright", lang)}
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground/50">
            {t("footer.poweredBy", lang)}{" "}
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
    <LangProvider>
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
    </LangProvider>
  );
}