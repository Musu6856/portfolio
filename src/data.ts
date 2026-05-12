export type Locale = "zh" | "en";

export type LocalizedText = Record<Locale, string>;

export type SkillLevel = {
  name: LocalizedText;
  level: LocalizedText;
};

export type Capability = {
  label: string;
  title: LocalizedText;
  summary: LocalizedText;
  details: SkillLevel[];
};

export type Project = {
  slug: string;
  featured: boolean;
  order: number;
  status: LocalizedText;
  year: string;
  tags: string[];
  title: string;
  subtitle: LocalizedText;
  summary: LocalizedText;
  detailPath: string;
  liveUrl?: string;
  linkLabel?: LocalizedText;
  caseSummary?: LocalizedText;
  facts?: Array<{
    label: LocalizedText;
    value: LocalizedText;
  }>;
  sections: Array<{
    label: string;
    title: LocalizedText;
    body?: LocalizedText;
    bullets?: LocalizedText[];
  }>;
};

export const profile = {
  name: {
    zh: "牧苏",
    en: "MuSu",
  },
  location: {
    zh: "城市待补充",
    en: "City TBD",
  },
  role: {
    zh: "产品 / AI 产品方向",
    en: "Product / AI Product",
  },
  thesis: {
    zh: "关注 AI、真实用户问题与从想法到产品的落地过程",
    en: "I explore AI, real user problems, and the path from raw ideas to usable products",
  },
  contact: {
    email: "666666@qq.com",
    phone: "88888888",
    resume: "#",
    github: "https://github.com/yourname",
  },
};

export const capabilities: Capability[] = [
  {
    label: "01",
    title: {
      zh: "AI Agent 核心",
      en: "AI Agent Core",
    },
    summary: {
      zh: "Agent 工作流、工具调用、RAG 与 AI 产品体验设计",
      en: "Agent workflows, tool use, RAG, and AI product experience design",
    },
    details: [
      {
        name: {
          zh: "AI Agent 架构设计",
          en: "AI agent architecture",
        },
        level: {
          zh: "熟练",
          en: "Proficient",
        },
      },
      {
        name: {
          zh: "Prompt / 工作流拆解",
          en: "Prompt and workflow breakdown",
        },
        level: {
          zh: "熟练",
          en: "Proficient",
        },
      },
      {
        name: {
          zh: "RAG 与知识库理解",
          en: "RAG and knowledge base",
        },
        level: {
          zh: "了解",
          en: "Familiar",
        },
      },
      {
        name: {
          zh: "工具调用与效果评估",
          en: "Tool use and evaluation",
        },
        level: {
          zh: "了解",
          en: "Familiar",
        },
      },
    ],
  },
  {
    label: "02",
    title: {
      zh: "产品设计",
      en: "Product Design",
    },
    summary: {
      zh: "需求分析、用户流程、原型设计和 PRD 表达",
      en: "Requirement analysis, user flows, prototyping, and PRD writing",
    },
    details: [
      {
        name: {
          zh: "需求分析",
          en: "Requirement analysis",
        },
        level: {
          zh: "熟练",
          en: "Proficient",
        },
      },
      {
        name: {
          zh: "用户旅程 / 流程设计",
          en: "Journey and flow design",
        },
        level: {
          zh: "熟练",
          en: "Proficient",
        },
      },
      {
        name: {
          zh: "原型与交互说明",
          en: "Prototype and interaction notes",
        },
        level: {
          zh: "熟练",
          en: "Proficient",
        },
      },
      {
        name: {
          zh: "版本优先级判断",
          en: "Release prioritization",
        },
        level: {
          zh: "了解",
          en: "Familiar",
        },
      },
    ],
  },
  {
    label: "03",
    title: {
      zh: "数据与研究",
      en: "Data and Research",
    },
    summary: {
      zh: "用指标、反馈和竞品观察支持产品判断",
      en: "Use metrics, feedback, and competitor observation to support product decisions",
    },
    details: [
      {
        name: {
          zh: "指标拆解",
          en: "Metric breakdown",
        },
        level: {
          zh: "了解",
          en: "Familiar",
        },
      },
      {
        name: {
          zh: "用户反馈整理",
          en: "User feedback synthesis",
        },
        level: {
          zh: "熟练",
          en: "Proficient",
        },
      },
      {
        name: {
          zh: "竞品分析",
          en: "Competitive analysis",
        },
        level: {
          zh: "熟练",
          en: "Proficient",
        },
      },
      {
        name: {
          zh: "实验与验证意识",
          en: "Experiment mindset",
        },
        level: {
          zh: "了解",
          en: "Familiar",
        },
      },
    ],
  },
  {
    label: "04",
    title: {
      zh: "项目推进",
      en: "Project Execution",
    },
    summary: {
      zh: "把想法拆成 MVP、协作任务和可持续迭代节奏",
      en: "Turn ideas into MVP scope, collaboration tasks, and an iteration rhythm",
    },
    details: [
      {
        name: {
          zh: "MVP 范围定义",
          en: "MVP scoping",
        },
        level: {
          zh: "熟练",
          en: "Proficient",
        },
      },
      {
        name: {
          zh: "跨职能沟通",
          en: "Cross-functional communication",
        },
        level: {
          zh: "熟练",
          en: "Proficient",
        },
      },
      {
        name: {
          zh: "技术理解与取舍",
          en: "Technical tradeoffs",
        },
        level: {
          zh: "了解",
          en: "Familiar",
        },
      },
      {
        name: {
          zh: "复盘与迭代记录",
          en: "Review and iteration notes",
        },
        level: {
          zh: "熟练",
          en: "Proficient",
        },
      },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "paperforge",
    featured: true,
    order: 1,
    status: {
      zh: "MVP / 可演示",
      en: "MVP / Live demo",
    },
    year: "2026",
    tags: ["AI Product", "Research Workflow", "LaTeX", "MVP"],
    title: "PaperForge",
    subtitle: {
      zh: "AI 辅助学术研究工作台",
      en: "AI-assisted academic research workspace",
    },
    summary: {
      zh: "把粗略研究想法转化为结构化博弈论模型、文献方向与 LaTeX 草稿，重点不是一键写论文，而是先约束 AI 的建模工作流",
      en: "Turns rough research ideas into structured game-theory model setups, literature directions, and LaTeX-ready drafts by constraining the AI workflow first",
    },
    detailPath: "/projects/paperforge",
    liveUrl: "https://paperforge-sable.vercel.app/",
    sections: [
      {
        label: "Overview",
        title: {
          zh: "项目概览",
          en: "Overview",
        },
        body: {
          zh: "PaperForge 是一个面向研究者的 AI 学术写作工作台，帮助用户从粗略研究想法进入结构化模型设定、相关文献方向和可导出的 LaTeX 草稿",
          en: "PaperForge is an AI-assisted academic workspace for researchers, helping them move from rough ideas into structured model setup, literature directions, and exportable LaTeX drafts.",
        },
      },
      {
        label: "Problem",
        title: {
          zh: "问题：AI 写作缺少结构约束",
          en: "Problem: AI writing lacks structure",
        },
        body: {
          zh: "通用 AI 容易直接生成一段看似完整但缺少模型边界的论文文本，PaperForge 先要求用户澄清玩家、策略、收益、博弈类型、平台语境和关键假设，让生成内容更接近可用的 Model Setup",
          en: "Generic AI often produces polished text before the model boundary is clear. PaperForge asks users to define players, strategies, payoffs, game type, platform context, and assumptions first, making the output closer to a usable Model Setup section.",
        },
      },
      {
        label: "Scenario",
        title: {
          zh: "用户与场景",
          en: "Users and scenario",
        },
        body: {
          zh: "目标用户是需要快速整理研究思路的学生或研究者，典型场景是输入一个研究想法，系统提取博弈论元素和缺失假设，用户补全建模向导后再生成草稿与文献方向",
          en: "The target users are students or researchers who need to structure early research ideas. A typical flow starts with a research idea, then AI extracts game-theoretic elements and missing assumptions before generating drafts and literature directions.",
        },
      },
      {
        label: "Solution",
        title: {
          zh: "方案：先建模，再生成",
          en: "Solution: model first, generate second",
        },
        body: {
          zh: "核心流程包括研究想法输入、AI 提炼、建模向导、Model Setup 生成、相关文献推荐和 .tex 导出，产品取舍是让 AI 成为结构化工作流的一部分，而不是替代研究者完成全部判断",
          en: "The core workflow includes idea input, AI refinement, a modeling wizard, Model Setup generation, literature recommendation, and .tex export. The product choice is to make AI part of a structured workflow rather than a replacement for research judgment.",
        },
      },
      {
        label: "Thinking",
        title: {
          zh: "待补充的产品思考",
          en: "Product thinking to add",
        },
        body: {
          zh: "这里预留给后续补充真实调研、竞品判断、功能优先级、失败尝试、指标设计和迭代记录，首版只呈现已经存在的 MVP 能力，不伪造成完整商业化成果",
          en: "This section is reserved for future research notes, competitor analysis, prioritization, failed attempts, metrics, and iteration logs. The first version presents the existing MVP honestly without pretending it is a finished commercial product.",
        },
      },
    ],
  },
  {
    slug: "weblearnboost",
    featured: true,
    order: 2,
    status: {
      zh: "早期探索 / v0.1.0 试用版",
      en: "Early exploration / v0.1.0 test release",
    },
    year: "2026",
    tags: ["Browser Extension", "AI Learning", "User Research", "MVP"],
    title: "WebLearnBoost",
    subtitle: {
      zh: "把网页资料转成学习地图和训练题的浏览器扩展",
      en: "Browser extension that turns web pages into learning maps and practice questions",
    },
    summary: {
      zh: "面向 AI 技术自学者，把当前网页或选中文本转成学习地图、重点摘要、选择题训练、原文依据、本地历史和 Markdown 学习包，验证从“看懂”到“能复述、能自测”的轻量学习闭环",
      en: "Turns a page or selected text into a learning map, key summary, quiz flow, source evidence, local history, and Markdown package, testing a lightweight loop from reading to recall.",
    },
    detailPath: "/projects/weblearnboost",
    caseSummary: {
      zh: "WebLearnBoost 的核心判断是：AI 技术学习者不只是需要更快看完网页，而是需要在阅读前知道该怎么学，在阅读后确认自己是否真的掌握。这个项目把普通网页变成“学习地图 -> 训练题 -> 原文依据 -> 本地沉淀”的浏览器侧边栏流程，并如实保留当前仍处于早期试用和自访谈验证阶段。",
      en: "WebLearnBoost starts from a product judgment: AI learners do not only need faster summaries. They need a path before reading and a way to verify understanding after reading. The project turns a web page into a browser-sidebar loop of learning map, practice questions, source evidence, and local study history, while clearly staying in an early test-release stage.",
    },
    facts: [
      {
        label: {
          zh: "目标用户",
          en: "Audience",
        },
        value: {
          zh: "正在自学 RAG、Agent、MCP、AI 框架等内容的技术学习者",
          en: "Learners studying RAG, agents, MCP, AI frameworks, and related engineering topics",
        },
      },
      {
        label: {
          zh: "我的角色",
          en: "My role",
        },
        value: {
          zh: "问题定义、调研设计、竞品分析、PRD、原型说明、MVP 交付",
          en: "Problem framing, research plan, competitive analysis, PRD, prototype spec, and MVP delivery",
        },
      },
      {
        label: {
          zh: "验证阶段",
          en: "Validation stage",
        },
        value: {
          zh: "基于真实自学场景和自访谈，计划补充 2-3 个外部技术学习者验证",
          en: "Based on a real self-learning scenario and self-interview, with 2-3 external learners planned next",
        },
      },
    ],
    sections: [
      {
        label: "Overview",
        title: {
          zh: "项目定位：不是摘要器，而是学习闭环工具",
          en: "Positioning: not a summarizer, but a learning loop",
        },
        body: {
          zh: "WebLearnBoost 是一个 Chrome / Edge 浏览器扩展试用版，入口放在浏览器侧边栏。它不把目标定成“更快总结网页”，而是把当前网页或选中文本转成可学习、可复习、可自测的学习包：先生成学习地图，再进入重点摘要和选择题训练，最后通过原文依据、本地历史和 Markdown 导出完成沉淀。",
          en: "WebLearnBoost is a Chrome / Edge extension test release that lives in the browser sidebar. It is not designed as a faster page summarizer. It turns the current page or selected text into a study package: first a learning map, then summary and quiz training, then source evidence, local history, and Markdown export for review.",
        },
      },
      {
        label: "Problem",
        title: {
          zh: "问题定义：看懂不等于掌握",
          en: "Problem: understanding is not mastery",
        },
        body: {
          zh: "在学习 RAG、Agent、MCP、tool calling、workflow 等 AI 技术资料时，痛点通常不是完全看不懂，而是读的时候觉得合理，离开网页后却讲不清结构，也不知道核心概念、限制条件和常见坑点有没有漏掉。直接问 AI 能降低理解门槛，但回答覆盖范围不可见；普通摘要能压缩文本，却很少帮助用户确认自己是否真的掌握。",
          en: "When learning AI engineering topics such as RAG, agents, MCP, tool calling, and workflow design, the issue is often not complete confusion. Learners may understand the page while reading, but struggle to explain the structure later or know whether key concepts, limitations, and pitfalls were missed. Chatting with AI lowers the barrier, but coverage is invisible; summarization compresses text, but rarely verifies mastery.",
        },
      },
      {
        label: "Research",
        title: {
          zh: "调研依据：早期探索，不伪装成大样本结论",
          en: "Research basis: early exploration, not overclaimed",
        },
        body: {
          zh: "第一轮验证来自真实自学场景和自访谈：学习 RAG 资料时，最强的问题不是“缺少答案”，而是学习路径不确定、学完讲不清、整理成本高、AI 回答缺少可信依据。这个阶段没有包装成外部用户验证完成，而是把它作为早期探索输入，并明确下一步需要补充 2-3 个外部技术学习者来校正痛点排序和功能优先级。",
          en: "The first validation input comes from a real self-learning scenario and a self-interview. While learning RAG material, the strongest pain points were not lack of answers, but unclear learning path, weak recall after reading, high note-taking cost, and limited trust in AI answers without source evidence. This is treated as early exploration, not finished external validation; the next step is to interview 2-3 external technical learners.",
        },
      },
      {
        label: "Competitors",
        title: {
          zh: "竞品判断：借入口，不走摘要中心路线",
          en: "Competitive view: borrow the entry point, avoid summary-first design",
        },
        bullets: [
          {
            zh: "NotebookLM 证明“来源驱动的学习包”成立，但它更像项目 notebook；WebLearnBoost 选择更轻的当前网页侧边栏入口。",
            en: "NotebookLM validates source-grounded study packages, but behaves more like a project notebook; WebLearnBoost chooses a lighter current-page sidebar entry.",
          },
          {
            zh: "Glasp 证明网页捕获、笔记和导出有价值，但它更强在沉淀；WebLearnBoost 需要把内容继续转成学习路径和自测。",
            en: "Glasp validates capture, notes, and export, but is stronger at collection; WebLearnBoost pushes the material into learning path and self-test.",
          },
          {
            zh: "Anki / Quizlet 证明主动回忆和练习是学习闭环关键；WebLearnBoost 的第一版借这个机制，但不直接做重型复习系统。",
            en: "Anki and Quizlet validate active recall and practice; WebLearnBoost borrows that mechanism without becoming a heavy spaced-repetition system.",
          },
          {
            zh: "网页摘要插件证明侧边栏入口足够低摩擦，但多数停留在“这页在说什么”；WebLearnBoost 要回答“我有没有学会”。",
            en: "Page summarizer extensions prove that sidebar entry is low-friction, but most answer what the page says; WebLearnBoost asks whether the learner has learned it.",
          },
        ],
      },
      {
        label: "MVP",
        title: {
          zh: "MVP 取舍：先完整闭环，再扩功能",
          en: "MVP choice: complete loop before more features",
        },
        bullets: [
          {
            zh: "输入范围只保留整页和选中段落，先覆盖最常见的网页学习场景。",
            en: "Input scope is limited to whole page and selected text to cover the most common page-learning scenarios first.",
          },
          {
            zh: "主流程固定为学习地图、重点摘要、选择题自测、答题反馈和原文依据，确保用户不是只拿到一段总结。",
            en: "The main flow is fixed as learning map, key summary, quiz, answer feedback, and source evidence, so the output is more than a summary.",
          },
          {
            zh: "支撑功能包括本地历史、删除历史版本、Markdown 导出、Provider / Base URL / API Key / Model / 输出语言设置。",
            en: "Supporting capabilities include local history, history deletion, Markdown export, and provider/base URL/API key/model/output language settings.",
          },
          {
            zh: "第一版暂不做 PDF、YouTube、移动端、账号系统、云同步和知识库聚合，避免把试用版做成过大的学习平台。",
            en: "The first release intentionally excludes PDF, YouTube, mobile, accounts, cloud sync, and knowledge-base aggregation to avoid an oversized learning platform.",
          },
        ],
      },
      {
        label: "Delivery",
        title: {
          zh: "交付状态：能试用，也保留边界",
          en: "Delivery: testable, with clear boundaries",
        },
        body: {
          zh: "当前项目已经有可构建的浏览器扩展、v0.1.0 试用包、安装指南、隐私说明、Release Notes、手动测试清单，以及问题定义、用户调研、竞品分析、PRD、原型说明和开发说明等产品文档。试用方式是通过压缩包或构建产物加载已解压扩展；API Key、设置和历史记录保存在浏览器本地，不做云同步。",
          en: "The project currently includes a buildable browser extension, v0.1.0 test package, installation guide, privacy notes, release notes, manual test checklist, plus product documents for problem definition, research, competitive analysis, PRD, prototype spec, and development notes. The test release is loaded manually as an unpacked extension; API key, settings, and history stay in local browser storage.",
        },
      },
      {
        label: "Next",
        title: {
          zh: "限制与下一步",
          en: "Limits and next steps",
        },
        bullets: [
          {
            zh: "补充 2-3 个外部技术学习者访谈，验证自访谈结论是否能扩展到更广义的技术学习场景。",
            en: "Add interviews with 2-3 external technical learners to check whether the self-interview findings generalize.",
          },
          {
            zh: "用真实网页测试学习地图质量、题目难度、原文依据可用性和等待时间，避免只在理想样例里成立。",
            en: "Test with real pages for learning-map quality, quiz difficulty, source evidence usefulness, and waiting time.",
          },
          {
            zh: "根据外部反馈决定概念卡、对比卡、原文定位和历史复习的优先级，而不是继续堆功能。",
            en: "Use feedback to prioritize concept cards, comparison cards, source positioning, and review history instead of adding features by default.",
          },
        ],
      },
    ],
  },
];
