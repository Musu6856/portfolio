import { ArrowLeft, ExternalLink, Github, Mail, MessageCircle, Menu } from "lucide-react";
import type { CSSProperties, MouseEvent, RefObject } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { capabilities, Locale, profile, projects } from "./data";

const navItems = [
  { href: "#capabilities", zh: "技能", en: "Skills" },
  { href: "#projects", zh: "项目", en: "Projects" },
  { href: "#contact", zh: "联系", en: "Contact" },
];

const appBasePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function getAppPath(pathname: string) {
  if (!appBasePath || !pathname.startsWith(appBasePath)) {
    return pathname;
  }

  return pathname.slice(appBasePath.length) || "/";
}

function appHref(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${appBasePath}${normalizedPath}`;
}

function sectionHref(hash: string) {
  return `${appHref("/")}${hash}`;
}

const copy = {
  zh: {
    scrollHint: "向下滑动继续查看",
    skillsTitle: "专业技能",
    tapForLevel: "点击查看掌握程度",
    backToSkill: "点击返回技能概览",
    metrics: ["核心技能", "精通", "最高掌握度"],
    projectsTitle: "精选项目",
    openCase: "查看详情",
    liveDemo: "在线演示",
    emptyProjectTitle: "下一项精选作品",
    emptyProjectBody: "预留给未来更成熟的项目案例，新的作品可以替换、置顶或下沉",
    moreProjectsTitle: "查看更多项目",
    collapseProjectsTitle: "收起项目档案",
    moreProjectsHint: "点击展开项目档案",
    collapseProjectsHint: "再次点击收起",
    moreProjectsBody: "后续会把其他项目统一收进这里，形成完整的项目索引",
    archiveTitle: "项目档案",
    archiveIntro: "当前收录 2 个真实项目，后续新增作品会继续进入这里",
    archiveFutureTitle: "后续项目",
    archiveFutureBody: "新的项目会按质量和展示优先级加入，而不是简单按时间堆叠",
    contactTitle: "联系我",
    contactIntro: "期待与志同道合的伙伴一起，创造有意义的 AI 产品",
    city: "坐标",
    job: "职业",
    quickContact: "快速联系",
    contactMethods: "联系方式",
    email: "邮箱",
    github: "Github",
    wechat: "微信 / WeChat",
    emailHint: "点击发送邮件",
    githubHint: "点击访问主页",
    wechatHint: "点击复制微信号",
    send: "发送邮件",
    backHome: "返回项目",
    detailKicker: "项目案例",
    status: "状态",
    year: "年份",
    links: "链接",
    next: "后续计划",
    nextBody:
      "后续可以补充用户反馈、指标结果、版本迭代、产品文档和更完整的设计过程，这个详情页已经按长期案例结构预留好位置",
  },
  en: {
    scrollHint: "Scroll to continue",
    skillsTitle: "Professional Skills",
    tapForLevel: "Click to view levels",
    backToSkill: "Click to return",
    metrics: ["Core skills", "Advanced", "Top level"],
    projectsTitle: "Featured Projects",
    openCase: "View details",
    liveDemo: "Live demo",
    emptyProjectTitle: "Next featured work",
    emptyProjectBody: "Reserved for a stronger future case. New work can replace, move ahead, or move down",
    moreProjectsTitle: "View more projects",
    collapseProjectsTitle: "Close project archive",
    moreProjectsHint: "Open project archive",
    collapseProjectsHint: "Click again to close",
    moreProjectsBody: "Future projects will be collected here as a full project index",
    archiveTitle: "Project Archive",
    archiveIntro: "Currently includes 2 real projects. Future work will be added here",
    archiveFutureTitle: "Upcoming projects",
    archiveFutureBody: "New projects will be added by quality and display priority, not only by date",
    contactTitle: "Contact Me",
    contactIntro: "Looking forward to building meaningful AI products with people who care about the same things.",
    city: "Location",
    job: "Role",
    quickContact: "Quick contact",
    contactMethods: "Contact Methods",
    email: "Email",
    github: "Github",
    wechat: "WeChat",
    emailHint: "Click to send email",
    githubHint: "Click to visit profile",
    wechatHint: "Click to copy WeChat ID",
    send: "Send email",
    backHome: "Back to projects",
    detailKicker: "Case study",
    status: "Status",
    year: "Year",
    links: "Links",
    next: "Next",
    nextBody:
      "Future updates can add user feedback, metrics, version history, product docs, and richer design process notes. The case page already leaves room for that long-term record.",
  },
};

function App() {
  const [locale, setLocale] = useState<Locale>("zh");
  const activePath = getAppPath(window.location.pathname);
  const activeProject = projects.find((project) => project.detailPath === activePath);

  return (
    <div className="min-h-screen bg-[#f8f5ef] text-neutral-950">
      <SiteChrome locale={locale} setLocale={setLocale} />
      {activeProject ? <ProjectDetail locale={locale} project={activeProject} /> : <HomePage locale={locale} />}
    </div>
  );
}

function SiteChrome({
  locale,
  setLocale,
}: {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#fffdf8]/95 backdrop-blur-xl">
      <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center px-5 md:px-8">
        <a href={appHref("/")} className="justify-self-start text-lg font-black">
          Musu
        </a>
        <nav className="hidden items-center md:flex">
          {navItems.map((item) => (
            <a key={item.href} className="nav-pill" href={sectionHref(item.href)}>
              {item[locale]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 justify-self-end">
          <button
            className="icon-button"
            onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
            type="button"
            aria-label="Switch language"
          >
            <span>{locale === "zh" ? "中" : "EN"}</span>
          </button>
          <button className="icon-button md:hidden" type="button" aria-label="Open menu">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const featuredProjects = useMemo(
    () =>
      projects
        .filter((project) => project.featured)
        .sort((a, b) => a.order - b.order),
    [],
  );
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [showArchive, setShowArchive] = useState(false);
  const archiveRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    });
  }, []);

  useEffect(() => {
    if (!showArchive) return;
    window.requestAnimationFrame(() => {
      archiveRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [showArchive]);

  return (
    <main className="site-texture">
      <Hero locale={locale} />

      <section id="capabilities" className="section-shell">
        <SectionHeading title={t.skillsTitle} />
        <div className="skills-stack">
          {capabilities.map((item, index) => {
            return (
              <article
                className={`skill-showcase ${hoveredSkill === item.label ? "is-flipped" : ""}`}
                key={item.label}
                onMouseEnter={() => setHoveredSkill(item.label)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <span className="sr-only">{t.tapForLevel}</span>
                <span className="skill-inner">
                  <SkillFront locale={locale} index={index} title={item.title[locale]} summary={item.summary[locale]} />
                  <span className="skill-face skill-back">
                    <span className="skill-head compact">
                      <span className="skill-icon">{item.title.en.split(" ")[0].slice(0, 2).toUpperCase()}</span>
                      <strong>{item.title[locale]}</strong>
                    </span>
                    <span className="skill-detail-list">
                      {item.details.map((detail) => (
                        <span className="skill-detail-row" key={detail.name.en}>
                          <span>{detail.name[locale]}</span>
                          <b>{detail.level[locale]}</b>
                        </span>
                      ))}
                    </span>
                  </span>
                </span>
              </article>
            );
          })}
        </div>
      </section>

      <section id="projects" className="section-shell">
        <SectionHeading title={t.projectsTitle} />
        <div className="project-list">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} locale={locale} project={project} index={index} />
          ))}
          {featuredProjects.length < 3 && <ProjectPlaceholder locale={locale} index={featuredProjects.length + 1} />}
          <MoreProjects expanded={showArchive} locale={locale} onToggle={() => setShowArchive((value) => !value)} />
          {showArchive && <ProjectArchive archiveRef={archiveRef} locale={locale} />}
        </div>
      </section>

      <section id="contact" className="section-shell pb-28">
        <ContactPanel locale={locale} />
      </section>
    </main>
  );
}

function Hero({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [spotlightActive, setSpotlightActive] = useState(false);
  const [spotlight, setSpotlight] = useState({
    x: 0,
    y: 0,
    tiltX: 0,
    tiltY: 0,
    shiftX: 0,
    shiftY: 0,
  });
  const spotlightStyle = {
    "--spot-x": `${spotlight.x}px`,
    "--spot-y": `${spotlight.y}px`,
    "--hero-tilt-x": `${spotlight.tiltX}deg`,
    "--hero-tilt-y": `${spotlight.tiltY}deg`,
    "--hero-shift-x": `${spotlight.shiftX}px`,
    "--hero-shift-y": `${spotlight.shiftY}px`,
  } as CSSProperties;

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const normalizedX = (x / rect.width - 0.5) * 2;
    const normalizedY = (y / rect.height - 0.5) * 2;

    setSpotlightActive(true);
    setSpotlight({
      x,
      y,
      tiltX: -normalizedY * 20,
      tiltY: normalizedX * 28,
      shiftX: normalizedX * 64,
      shiftY: normalizedY * 48,
    });
  }

  function handleMouseLeave() {
    setSpotlightActive(false);
    setSpotlight((current) => ({
      ...current,
      tiltX: 0,
      tiltY: 0,
      shiftX: 0,
      shiftY: 0,
    }));
  }

  return (
    <section
      className="hero-grid"
      onMouseEnter={() => setSpotlightActive(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={spotlightStyle}
    >
      <DotField />
      <HeroContent locale="en" />
      <div className={`hero-spotlight ${spotlightActive ? "is-active" : ""}`}>
        <HeroContent locale="zh" inverted />
      </div>
      <div className="scroll-hint">{t.scrollHint}</div>
    </section>
  );
}

function HeroContent({ locale, inverted = false }: { locale: Locale; inverted?: boolean }) {
  const heroLine = locale === "zh" ? "你好，我是" : "Hello, I'm";

  return (
    <div className={`hero-content ${inverted ? "is-inverted" : ""}`}>
      <h1>
        <span className="hero-greeting">{heroLine}</span>{" "}
        <span className={`hero-name ${locale === "zh" ? "hero-name-zh" : "hero-name-en"}`}>
          {profile.name[locale]}
        </span>
      </h1>
    </div>
  );
}

function SkillFront({
  locale,
  index,
  title,
  summary,
}: {
  locale: Locale;
  index: number;
  title: string;
  summary: string;
}) {
  const t = copy[locale];
  const metrics = index === 0 ? ["3+", "2", "95%"] : ["4", "2", "80%"];

  return (
    <span className="skill-face skill-front">
      <span className="skill-head">
        <span className="skill-icon">{title.slice(0, 2)}</span>
        <span>
          <strong>{title}</strong>
          <small>{summary}</small>
        </span>
      </span>
      <span className="skill-divider" />
      <span className="skill-metrics">
        {metrics.map((metric, metricIndex) => (
          <span key={metric}>
            <CountMetric value={metric} />
            <small>{t.metrics[metricIndex]}</small>
          </span>
        ))}
      </span>
      <em>{t.tapForLevel}</em>
    </span>
  );
}

function CountMetric({ value }: { value: string }) {
  const ref = useRef<HTMLElement | null>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const target = Number.parseInt(value, 10);
    const suffix = value.replace(String(target), "");
    if (!Number.isFinite(target) || !ref.current) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let startTime = 0;
    const duration = 650;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const animate = (time: number) => {
          if (!startTime) startTime = time;
          const progress = Math.min((time - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(`${Math.round(target * eased)}${suffix}`);
          if (progress < 1) {
            frame = window.requestAnimationFrame(animate);
          }
        };

        setDisplay(`0${suffix}`);
        frame = window.requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [value]);

  return <b ref={ref}>{display}</b>;
}

function ProjectCard({
  locale,
  project,
  index,
}: {
  locale: Locale;
  project: (typeof projects)[number];
  index: number;
}) {
  const t = copy[locale];

  return (
    <article className="project-row">
      <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
      <div className="project-main">
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle[locale]}</p>
        <div className="project-tags">
          <span className="tag">{project.status[locale]}</span>
          <span className="tag">{project.year}</span>
          {project.tags.slice(0, 3).map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <p className="project-summary">{project.summary[locale]}</p>
        <a className="project-case-link" href={appHref(project.detailPath)}>
          {t.openCase}
        </a>
      </div>
    </article>
  );
}

function ProjectPlaceholder({ locale, index }: { locale: Locale; index: number }) {
  const t = copy[locale];

  return (
    <article className="project-row muted-row">
      <span className="project-number">{String(index).padStart(2, "0")}</span>
      <div className="project-main">
        <h3>{t.emptyProjectTitle}</h3>
        <p className="project-summary">{t.emptyProjectBody}</p>
      </div>
      <span className="project-note">Reserved</span>
    </article>
  );
}

function MoreProjects({
  expanded,
  locale,
  onToggle,
}: {
  expanded: boolean;
  locale: Locale;
  onToggle: () => void;
}) {
  const t = copy[locale];

  return (
    <button className={`project-row more-projects ${expanded ? "is-open" : ""}`} type="button" onClick={onToggle} aria-expanded={expanded}>
      <span>{expanded ? t.collapseProjectsTitle : t.moreProjectsTitle}</span>
      <small>{expanded ? t.collapseProjectsHint : t.moreProjectsHint}</small>
    </button>
  );
}

function ProjectArchive({ archiveRef, locale }: { archiveRef: RefObject<HTMLDivElement | null>; locale: Locale }) {
  const t = copy[locale];
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <div className="project-archive" ref={archiveRef}>
      <div className="archive-head">
        <h3>{t.archiveTitle}</h3>
        <p>{t.archiveIntro}</p>
      </div>
      <div className="archive-grid">
        {sortedProjects.map((project) => (
          <a className="archive-item" href={appHref(project.detailPath)} key={project.slug}>
            <span>{String(project.order).padStart(2, "0")}</span>
            <strong>{project.title}</strong>
            <small>{project.subtitle[locale]}</small>
            <em>{t.openCase}</em>
          </a>
        ))}
        <article className="archive-item archive-item-muted">
          <span>{String(sortedProjects.length + 1).padStart(2, "0")}</span>
          <strong>{t.archiveFutureTitle}</strong>
          <small>{t.archiveFutureBody}</small>
          <em>Reserved</em>
        </article>
      </div>
    </div>
  );
}

function ContactPanel({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const tags = ["AI Agent", "LLM", "RAG", "Product Design"];

  return (
    <div className="contact-area">
      <div className="contact-ornament triangle" />
      <div className="contact-ornament square" />
      <div className="contact-ornament diamond" />
      <div className="contact-ornament triangle left-large" />
      <SectionHeading title={t.contactTitle} />
      <p className="contact-intro">{t.contactIntro}</p>
      <div className="contact-facts">
        <p>
          <span />
          {t.city}: {profile.location[locale]}
        </p>
        <p>
          <span />
          {t.job}: {profile.role[locale]}
        </p>
      </div>
      <div className="contact-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="contact-methods">
        <h3>{t.contactMethods}</h3>
        <div className="method-grid">
          <a className="method-card" href={`mailto:${profile.contact.email}`}>
            <span className="method-icon">
              <Mail size={28} />
            </span>
            <strong>{t.email}</strong>
            <b>{profile.contact.email}</b>
            <em>{t.emailHint}</em>
          </a>
          <a className="method-card" href={profile.contact.github} target="_blank" rel="noreferrer">
            <span className="method-icon">
              <Github size={28} />
            </span>
            <strong>{t.github}</strong>
            <b>yourname</b>
            <em>{t.githubHint}</em>
          </a>
          <button
            className="method-card"
            onClick={() => navigator.clipboard?.writeText(profile.contact.phone)}
            type="button"
          >
            <span className="method-icon">
              <MessageCircle size={28} />
            </span>
            <strong>{t.wechat}</strong>
            <b>{profile.contact.phone}</b>
            <em>{t.wechatHint}</em>
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectDetail({ locale, project }: { locale: Locale; project: (typeof projects)[number] }) {
  const t = copy[locale];

  return (
    <main className="pt-16">
      <section className="detail-hero">
        <LetterField text={project.title.toUpperCase()} />
        <div className="detail-hero-content">
          <a className="detail-back-link" href={sectionHref("#projects")}>
            <ArrowLeft size={18} />
            {t.backHome}
          </a>
          <h1>{project.title}</h1>
          <p>{project.subtitle[locale]}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="meta-grid">
          <MetaRow label={t.status} value={project.status[locale]} />
          <MetaRow label={t.year} value={project.year} />
          <MetaRow label={t.links} value={project.liveUrl ? project.linkLabel?.[locale] ?? t.liveDemo : "TBD"} href={project.liveUrl} />
        </div>
      </section>

      {(project.caseSummary || project.facts?.length) && (
        <section className="mx-auto max-w-7xl px-5 pt-12 md:px-8">
          {project.caseSummary && (
            <article className="case-summary">
              <span>{t.detailKicker}</span>
              <p>{project.caseSummary[locale]}</p>
            </article>
          )}
          {project.facts?.length ? (
            <div className="case-facts">
              {project.facts.map((fact) => (
                <article className="case-fact" key={fact.label.en}>
                  <span>{fact.label[locale]}</span>
                  <strong>{fact.value[locale]}</strong>
                </article>
              ))}
            </div>
          ) : null}
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="line-list">
          {project.sections.map((section, index) => (
            <article className="case-row" key={section.label}>
              <span className="row-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{section.title[locale]}</h2>
                {section.body && <p>{section.body[locale]}</p>}
                {section.bullets?.length ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet.en}>{bullet[locale]}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
          <article className="case-row">
            <span className="row-index">{String(project.sections.length + 1).padStart(2, "0")}</span>
            <div>
              <h2>{t.next}</h2>
              <p>{t.nextBody}</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function MetaRow({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="meta-cell">
      {href ? (
        <a className="inline-flex items-center justify-center gap-2 text-xl font-black hover:underline" href={href} target="_blank" rel="noreferrer" aria-label={label}>
          {value}
          <ExternalLink size={18} />
        </a>
      ) : (
        <div className="text-xl font-black" aria-label={label}>
          {value}
        </div>
      )}
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
    </div>
  );
}

function DotField() {
  return <div aria-hidden="true" className="dot-field" />;
}

function LetterField({ text }: { text: string }) {
  const rows = Array.from({ length: 9 }, (_, index) => index);

  return (
    <div aria-hidden="true" className="letter-field">
      {rows.map((row) => (
        <div key={row}>{`${text} ${text} ${text} ${text} ${text}`}</div>
      ))}
    </div>
  );
}

export default App;
