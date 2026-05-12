export type Lang = "en" | "cn";

const translations = {
  /* ── NAVBAR ── */
  "nav.about": { en: "About", cn: "关于" },
  "nav.services": { en: "Services", cn: "服务" },
  "nav.industries": { en: "Industries", cn: "行业" },
  "nav.process": { en: "Process", cn: "流程" },
  "nav.whyUs": { en: "Why Us", cn: "为什么选我们" },
  "nav.startProject": { en: "Start a Project", cn: "开始项目" },

  /* ── HERO ── */
  "hero.tagline": { en: "AI-Powered Operations", cn: "AI驱动的运营" },
  "hero.title1": { en: "The 1% that changes", cn: "改变一切的" },
  "hero.title2": { en: "everything.", cn: "那1%。" },
  "hero.desc": {
    en: "We solve the problems that hold your business back. AI systems that automate your operations — so you can focus on growth.",
    cn: "我们解决阻碍您业务发展的问题。AI系统自动化您的运营——让您专注于增长。",
  },
  "hero.whatWeDo": { en: "What We Do ↓", cn: "我们做什么 ↓" },
  "hero.poweredBy": { en: "Powered by enterprise-grade AI", cn: "由企业级AI驱动" },

  /* ── ABOUT ── */
  "about.label": { en: "About Us", cn: "关于我们" },
  "about.title": { en: "We see what others miss.", cn: "我们看到别人忽略的。" },
  "about.p1": {
    en: "Every business we walked into had the same problem — smart people buried in repetitive work. Property managers copying prices between platforms. Restaurant owners guessing tomorrow's stock order. Factory supervisors staring at dashboards they couldn't act on fast enough.",
    cn: "我们走进的每家企业都有同样的问题——聪明的人被重复性工作淹没。物业经理在平台之间复制价格。餐厅老板猜测明天的订单。工厂主管盯着无法快速采取行动的仪表板。",
  },
  "about.p2": {
    en: "The tools existed. AI was there. But nobody was wiring it into the actual day-to-day operations where it mattered. So we started building.",
    cn: "工具已经存在。AI就在那里。但没有人把它接入真正重要的日常运营中。所以我们开始构建。",
  },
  "about.v1.title": { en: "Ship it", cn: "交付它" },
  "about.v1.desc": { en: "Working software beats perfect plans", cn: "可用的软件胜过完美的计划" },
  "about.v2.title": { en: "Solve the real problem", cn: "解决真正的问题" },
  "about.v2.desc": { en: "We don't sell AI for AI's sake", cn: "我们不为AI而AI" },
  "about.v3.title": { en: "Earn the trust", cn: "赢得信任" },
  "about.v3.desc": { en: "Your operations are sacred", cn: "您的运营是神圣的" },
  "about.v4.title": { en: "Stay curious", cn: "保持好奇" },
  "about.v4.desc": { en: "Every industry has patterns to decode", cn: "每个行业都有待解码的模式" },

  /* ── SERVICES ── */
  "services.label": { en: "What We Build", cn: "我们构建什么" },
  "services.title": { en: "Systems that do the work", cn: "替您工作的系统" },
  "services.desc": {
    en: "Not flashy demos — real systems that plug into real workflows and deliver measurable results.",
    cn: "不是花哨的演示——而是接入真实工作流并交付可衡量结果的真正系统。",
  },
  "services.s1.title": { en: "AI Workflow Automation", cn: "AI工作流自动化" },
  "services.s1.sub": { en: "WIRE AI INTO YOUR DAILY OPS", cn: "将AI接入您的日常运营" },
  "services.s1.desc": { en: "Automate repetitive tasks, route decisions, and trigger actions across your tools without manual handoffs.", cn: "自动化重复任务、路由决策，并在您的工具间触发操作，无需人工交接。" },
  "services.s2.title": { en: "Custom Platform Development", cn: "定制平台开发" },
  "services.s2.sub": { en: "BUILT AROUND YOUR BUSINESS", cn: "围绕您的业务构建" },
  "services.s2.desc": { en: "Full-stack dashboards, APIs, and integrations engineered for your exact workflow — designed to scale.", cn: "为您的精确工作流设计的全栈仪表板、API和集成——为扩展而设计。" },
  "services.s3.title": { en: "Business Diagnostics & AI Strategy", cn: "业务诊断与AI战略" },
  "services.s3.sub": { en: "DECODE YOUR BUSINESS", cn: "解码您的业务" },
  "services.s3.desc": { en: "Structured AI reports that diagnose your operations, map growth paths, and prepare you for capital readiness.", cn: "结构化AI报告，诊断您的运营，规划增长路径，并为您做好资本准备。" },
  "services.s4.title": { en: "System Integration", cn: "系统集成" },
  "services.s4.sub": { en: "ONE INTELLIGENT PIPELINE", cn: "一个智能管道" },
  "services.s4.desc": { en: "Connect your existing tools into a single workflow. We bridge the gaps so data flows seamlessly.", cn: "将您现有的工具连接到一个工作流中。我们弥合差距，让数据无缝流动。" },
  "services.s5.title": { en: "AI Content Engine", cn: "AI内容引擎" },
  "services.s5.sub": { en: "ALWAYS-ON MARKETING", cn: "全天候营销" },
  "services.s5.desc": { en: "Auto-aggregate trends, generate content, and schedule across every social platform — fully hands-free.", cn: "自动聚合趋势，生成内容，并在每个社交平台上安排——完全免提。" },
  "services.s6.title": { en: "Real-time Analytics", cn: "实时分析" },
  "services.s6.sub": { en: "DECISIONS AT THE SPEED OF DATA", cn: "以数据速度决策" },
  "services.s6.desc": { en: "Live dashboards that surface what matters — predictive insights, anomaly alerts, and revenue intelligence.", cn: "实时仪表板，呈现重要信息——预测洞察、异常警报和收入智能。" },

  /* ── INDUSTRIES ── */
  "industries.label": { en: "Industries We Serve", cn: "我们服务的行业" },
  "industries.title": { en: "AI molded to your industry", cn: "AI量身定制您的行业" },
  "industries.desc": {
    en: "We don't do one-size-fits-all. Every solution is built around the patterns and pain points of your specific vertical.",
    cn: "我们不做一刀切。每个解决方案都围绕您特定行业的模式和痛点构建。",
  },
  "industries.notListed": { en: "Don't see your industry?", cn: "没看到您的行业？" },
  "industries.adapt": { en: "We adapt to any vertical.", cn: "我们适应任何行业。" },
  "industries.timeSavings": { en: "time savings", cn: "时间节省" },
  "industries.before": { en: "Before", cn: "之前" },
  "industries.after": { en: "After", cn: "之后" },

  "ind.marketing.label": { en: "Marketing & Social", cn: "营销与社交" },
  "ind.marketing.tagline": { en: "ALWAYS-ON CONTENT ENGINE", cn: "全天候内容引擎" },
  "ind.marketing.desc": { en: "AI auto-aggregates trending topics, generates on-brand content, visuals, and short-form video, then schedules everything across all your social platforms — hands-free.", cn: "AI自动聚合热门话题，生成品牌内容、视觉和短视频，然后在所有社交平台上安排——免提。" },
  "ind.marketing.beforeLabel": { en: "Weekly content time", cn: "每周内容时间" },
  "ind.marketing.afterLabel": { en: "Hands-on time saved", cn: "节省的人工时间" },
  "ind.marketing.m1": { en: "Content Output", cn: "内容产出" },
  "ind.marketing.m2": { en: "Engagement Rate", cn: "互动率" },
  "ind.marketing.m3": { en: "Time Saved", cn: "节省时间" },

  "ind.property.label": { en: "Property Management", cn: "物业管理" },
  "ind.property.tagline": { en: "FROM INVENTORY TO INSIGHTS", cn: "从库存到洞察" },
  "ind.property.desc": { en: "AI-managed listings, dynamic pricing, and booking sync across Airbnb, Booking.com, Agoda — all from one dashboard.", cn: "AI管理的房源、动态定价和跨Airbnb、Booking.com、Agoda的预订同步——一个仪表板搞定。" },
  "ind.property.beforeLabel": { en: "Daily manual updates", cn: "每日手动更新" },
  "ind.property.afterLabel": { en: "No more manual updates", cn: "不再手动更新" },
  "ind.property.m1": { en: "Occupancy Rate", cn: "入住率" },
  "ind.property.m2": { en: "Revenue Growth", cn: "收入增长" },
  "ind.property.m3": { en: "Time Saved", cn: "节省时间" },

  "ind.fnb.label": { en: "Food & Beverage", cn: "餐饮" },
  "ind.fnb.tagline": { en: "PREDICT BEFORE IT BREAKS", cn: "在问题发生前预测" },
  "ind.fnb.desc": { en: "Demand forecasting, automated stock reordering, and waste reduction. Your kitchen runs itself.", cn: "需求预测、自动补货和减少浪费。您的厨房自行运转。" },
  "ind.fnb.beforeLabel": { en: "Daily inventory check", cn: "每日库存检查" },
  "ind.fnb.afterLabel": { en: "Daily time saved", cn: "每日节省时间" },
  "ind.fnb.m1": { en: "Waste Reduction", cn: "浪费减少" },
  "ind.fnb.m2": { en: "Orders Processed", cn: "处理订单" },
  "ind.fnb.m3": { en: "Revenue", cn: "收入" },

  "ind.finance.label": { en: "Investment & Finance", cn: "投资与金融" },
  "ind.finance.tagline": { en: "EVERY ROUTE, OPTIMIZED", cn: "每条路线，优化" },
  "ind.finance.desc": { en: "Automated deal flow analysis, portfolio monitoring, valuation models, and investor-ready report generation.", cn: "自动化交易流分析、投资组合监控、估值模型和投资者就绪报告生成。" },
  "ind.finance.beforeLabel": { en: "Quarterly report", cn: "季度报告" },
  "ind.finance.afterLabel": { en: "Report turnaround", cn: "报告周转" },
  "ind.finance.m1": { en: "Pipeline", cn: "管线" },
  "ind.finance.m2": { en: "IRR", cn: "内部收益率" },
  "ind.finance.m3": { en: "Auto Reports", cn: "自动报告" },

  "ind.retail.label": { en: "Retail & E-commerce", cn: "零售与电商" },
  "ind.retail.tagline": { en: "SELL SMARTER, STOCK BETTER", cn: "更聪明地销售，更好地库存" },
  "ind.retail.desc": { en: "Sales forecasting, inventory intelligence, dynamic promotions, and zero-stockout operations.", cn: "销售预测、库存智能、动态促销和零缺货运营。" },
  "ind.retail.beforeLabel": { en: "Weekly stock analysis", cn: "每周库存分析" },
  "ind.retail.afterLabel": { en: "Weekly time saved", cn: "每周节省时间" },
  "ind.retail.m1": { en: "Revenue", cn: "收入" },
  "ind.retail.m2": { en: "Orders", cn: "订单" },
  "ind.retail.m3": { en: "Stockouts", cn: "缺货" },

  "ind.education.label": { en: "Education & Training", cn: "教育与培训" },
  "ind.education.tagline": { en: "SCALE LEARNING, NOT ADMIN", cn: "扩展学习，而非行政" },
  "ind.education.desc": { en: "Student progress tracking, at-risk detection, automated communications, and course performance analytics.", cn: "学生进度跟踪、风险检测、自动通信和课程绩效分析。" },
  "ind.education.beforeLabel": { en: "Per student report", cn: "每学生报告" },
  "ind.education.afterLabel": { en: "Reporting time saved", cn: "报告时间节省" },
  "ind.education.m1": { en: "Students", cn: "学生" },
  "ind.education.m2": { en: "Completion", cn: "完成率" },
  "ind.education.m3": { en: "At-Risk Detected", cn: "检测到风险" },

  /* ── PROCESS ── */
  "process.label": { en: "How It Works", cn: "工作方式" },
  "process.title": { en: "From discovery to deployment", cn: "从发现到部署" },
  "process.desc": {
    en: "A proven four-step process that turns operational friction into automated efficiency.",
    cn: "经过验证的四步流程，将运营摩擦转化为自动化效率。",
  },
  "process.step1.title": { en: "Discover", cn: "发现" },
  "process.step1.desc": { en: "We map your operations — identify bottlenecks, repetitive tasks, and high-impact automation opportunities.", cn: "我们梳理您的运营——识别瓶颈、重复任务和高影响力的自动化机会。" },
  "process.step2.title": { en: "Design", cn: "设计" },
  "process.step2.desc": { en: "We architect a solution tailored to your workflow — choosing the right AI models, integrations, and interfaces.", cn: "我们为您的工作流量身定制解决方案——选择合适的AI模型、集成和界面。" },
  "process.step3.title": { en: "Build", cn: "构建" },
  "process.step3.desc": { en: "We develop, test, and deploy your system. Real software, real integrations, real results.", cn: "我们开发、测试和部署您的系统。真正的软件、真正的集成、真正的结果。" },
  "process.step4.title": { en: "Scale", cn: "扩展" },
  "process.step4.desc": { en: "We monitor, optimize, and expand. As your business grows, your AI grows with it.", cn: "我们监控、优化和扩展。随着您的业务增长，您的AI也随之增长。" },

  /* ── WHY US ── */
  "whyUs.label": { en: "Why AI Labs", cn: "为什么选AI Labs" },
  "whyUs.title": { en: "Built different", cn: "与众不同" },
  "whyUs.desc": {
    en: "We don't just bolt AI onto your stack. We engineer systems that become the backbone of your operations.",
    cn: "我们不只是把AI加到您的技术栈上。我们设计成为您运营骨干的系统。",
  },
  "whyUs.w1.title": { en: "Results in weeks, not months", cn: "数周出成果，而非数月" },
  "whyUs.w1.desc": { en: "First working system deployed fast. Then we refine based on real data — not guesswork.", cn: "第一个可用系统快速部署。然后我们根据真实数据进行优化——而非猜测。" },
  "whyUs.w2.title": { en: "One partner, infinite solutions", cn: "一个合作伙伴，无限解决方案" },
  "whyUs.w2.desc": { en: "From marketing to logistics to finance — one team that handles it all. No bouncing between vendors.", cn: "从营销到物流到金融——一个团队搞定一切。无需在供应商之间跳转。" },
  "whyUs.w3.title": { en: "Real systems, not demos", cn: "真正的系统，而非演示" },
  "whyUs.w3.desc": { en: "Production-grade software that runs your business — not flashy prototypes that fall apart at scale.", cn: "运行您业务的生产级软件——而非在规模上崩溃的花哨原型。" },
  "whyUs.w4.title": { en: "Built for Malaysian businesses", cn: "为马来西亚企业而建" },
  "whyUs.w4.desc": { en: "We understand local markets, regulations, and workflows — not imported templates.", cn: "我们了解本地市场、法规和工作流——而非进口模板。" },
  "whyUs.w5.title": { en: "Ship fast, iterate faster", cn: "快速交付，更快迭代" },
  "whyUs.w5.desc": { en: "First working version in weeks. Then we refine based on real usage — not guesswork.", cn: "数周内交付第一个可用版本。然后我们根据真实使用进行优化——而非猜测。" },
  "whyUs.w6.title": { en: "ROI in weeks", cn: "数周内回报" },
  "whyUs.w6.desc": { en: "Our systems pay for themselves fast. If we can't show clear value, we'll tell you upfront.", cn: "我们的系统快速回本。如果我们无法展示明确价值，我们会提前告知。" },

  /* ── CONTACT ── */
  "contact.label": { en: "Let's Talk", cn: "让我们谈谈" },
  "contact.title": { en: "Ready to automate?", cn: "准备好自动化了吗？" },
  "contact.desc": {
    en: "Tell us about your operations. We'll show you what AI can do for your business — no fluff, just a real conversation.",
    cn: "告诉我们您的运营情况。我们将展示AI能为您的业务做什么——没有废话，只有真实的对话。",
  },
  "contact.book": { en: "Book a Consultation", cn: "预约咨询" },

  /* ── FOOTER ── */
  "footer.about": { en: "About", cn: "关于" },
  "footer.services": { en: "Services", cn: "服务" },
  "footer.industries": { en: "Industries", cn: "行业" },
  "footer.process": { en: "Process", cn: "流程" },
  "footer.contact": { en: "Contact", cn: "联系" },
  "footer.copyright": { en: "© 2026 AI Labs. All rights reserved.", cn: "© 2026 AI Labs. 保留所有权利。" },
  "footer.poweredBy": { en: "Powered by", cn: "技术支持" },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key]?.[lang] ?? translations[key]?.en ?? key;
}