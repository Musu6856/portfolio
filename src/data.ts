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
  sections: Array<{
    label: string;
    title: LocalizedText;
    body: LocalizedText;
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
];
