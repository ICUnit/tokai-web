export const t = {
  EN: {
    hero: {
      badge: "Now in Alpha v0.2.0",
      subtitle: "Theory of Knowledge,",
      headingA: "A",
      headingRest1: "ugmentable ",
      headingI: "I",
      headingRest2: "ntelligence",
      description:
        "Tokai fuses EEG brain-computer interface data with agentic AI to help neurodivergent minds focus, plan, and perform — continuously and empirically.",
      cta1: "Get started free",
      cta2: "See how it works",
      trust: [
        "NTU Master’s research project",
        "Open source · Apache 2.0",
        "Neuroethics & privacy-first",
      ],
    },
    features: {
      heading: "Built for how your brain actually works",
      subtext: "Traditional productivity tools ignore your biology. Tokai reads it.",
      items: [
        {
          title: "Nine-Metric Neural Dashboard",
          description:
            "Track Focus Index, Bio Energy, Mental Fatigue, Working Memory Load, Theta/Beta Ratio, and four more cognitive signals — live. Works from a 30-second self-report, simulated data, research EEG datasets, or a real BCI headset.",
        },
        {
          title: "Agentic Task Planner",
          description:
            "TokAgent (powered by Claude) reads all nine neural metrics alongside your tasks, journal, and medication log — then takes direct action in your workspace: creating tasks, starting timers, logging entries, all from a natural-language command.",
        },
        {
          title: "Privacy-First Architecture",
          description:
            "Neural data never leaves your browser. All cognitive metrics are held in session memory only — never written to a server. Behavioral data (tasks, notes, medications) is isolated per-user via row-level security at the database level.",
        },
      ],
    },
    steps: {
      heading: "How Tokai works",
      subtext: "Three steps from cognitive state awareness to a smarter workday.",
      items: [
        {
          title: "Choose your data mode",
          description:
            "Start with a 30-second self-report check-in — no hardware required. Switch to simulated mode for demos, dataset replay for research, or plug in an EEG headset for live neural streaming.",
        },
        {
          title: "Your cognitive state comes alive",
          description:
            "Nine metrics update in real time — Focus Index, Bio Energy, Mental Fatigue, Working Memory Load, and more — giving you an empirical picture of where your brain is right now.",
        },
        {
          title: "TokAgent adapts your workflow",
          description:
            "The AI planner recommends the right task for your current cognitive state, executes commands directly in your workspace, and keeps a transparent audit trail of every action it takes.",
        },
      ],
    },
    focusPreview: {
      badge: "What you’ll see",
      heading1: "Your Focus Index, ",
      headingGradient: "live.",
      description:
        "Tokai computes a continuous Focus Index from your chosen data source — self-report, simulated, EEG dataset replay, or live BCI — giving you an empirical cognitive baseline without requiring any hardware to get started.",
      bullets: [
        "Detect deep focus vs. cognitive fatigue in real time",
        "Track Alpha/Beta wave ratios and neural noise",
        "See hyperfocus risk and estimated focus window duration",
      ],
      cardTitle: "Focus Index",
      cardLive: "Live",
      cardWindow: "Optimal focus window · 38 min remaining",
      agentLabel: "TokAgent",
      agentText:
        "High focus detected. Recommend starting your most cognitively demanding task now.",
      metrics1: [
        { label: "Bio Energy", value: "72%" },
        { label: "Neural Noise", value: "Low" },
        { label: "α/β Ratio", value: "0.41" },
      ],
      metrics2: [
        { label: "Mental Fatigue", value: "31" },
        { label: "WM Load", value: "42" },
        { label: "Hyperfocus", value: "12%" },
      ],
    },
    app: {
      heading: "Inside Tokai v0.2.0",
      subtext: "Six integrated tools, all driven by your neural data.",
    },
    team: {
      heading: "Core Team",
      subtext: "Researchers and engineers from NTU, NYCU, Temple, and beyond.",
    },
    cta: {
      heading: "Ready to understand your brain?",
      description:
        "Join the alpha. Be among the first to experience neurosupport that actually works with your biology.",
      button: "Sign up for early access",
      subtext: "Free during alpha · No credit card required",
    },
    carousel: [
      {
        title: "Neural Dashboard",
        description:
          "Nine live cognitive metrics — Focus Index, Sleep Quality, Bio Energy, Mental Fatigue, Working Memory Load, Neural Noise, T/B Ratio, Focus Window, and Hyperfocus Risk — each tagged with the data source driving it. BCI-only metrics dim automatically in self-report mode.",
      },
      {
        title: "TokAgent",
        description:
          "A Claude-powered AI assistant that reads all nine neural metrics alongside your task list, journal, and medication log — then takes direct action via ten tool-calling actions. Uses Claude Sonnet 4.6 for planning, Haiku 4.5 for fast inline recommendations. Bring your own API key; it never touches Tokai's servers.",
      },
      {
        title: "TokDo",
        description:
          "A focus-aware task manager where each task carries a cognitive demand score matched against your live Focus Index. Set time estimates, deadlines, and emoji tags — TokAgent uses all of this to surface the right task at the right moment.",
      },
      {
        title: "TokNote",
        description:
          "An ADHD-friendly journal with mood tagging and focus logging. Capture how you feel throughout the day and let TokInsights surface correlations between your journal entries and cognitive patterns over time.",
      },
      {
        title: "TokMed",
        description:
          "Medication and supplement tracking with timestamp-anchored markers on your focus charts, so you can see exactly how each dose correlates with your cognitive state throughout the day.",
      },
      {
        title: "TokInsights",
        description:
          "Automatic, device-local analysis of your productivity patterns — when you focus best, mood correlations with task completion, and weekly cognitive trends. All analysis runs in your browser; no data leaves your device.",
        isNew: true,
      },
    ],
  },

  ZH: {
    hero: {
      badge: "現已推出 Alpha v0.2.0",
      subtitle: "認識論，",
      headingA: "",
      headingRest1: "",
      headingI: "",
      headingRest2: "",
      headingZH: "可增強智能",
      description:
        "Tokai 融合 EEG 腦機介面資料與代理型 AI，協助神經多樣性族群持續且客觀地專注、規劃、有效發揮潛能。",
      cta1: "免費開始使用",
      cta2: "了解運作原理",
      trust: ["NTU 碩士研究計畫", "開源 · Apache 2.0", "神經倫理 · 隱私優先"],
    },
    features: {
      heading: "為您大腦真實的運作方式而設計",
      subtext: "傳統生產力工具忽略您的生物狀態。Tokai 讀取它。",
      items: [
        {
          title: "九項即時神經指標儀表板",
          description:
            "追蹤專注指數、生物能量、心理疲勞、工作記憶負荷、Theta/Beta 比值等九項認知訊號，即時更新。支援自我回報、模擬資料、EEG 研究資料集重放或真實 BCI 頭戴裝置。",
        },
        {
          title: "代理型任務規劃師",
          description:
            "TokAgent（由 Claude 提供支援）讀取九項神經指標及您的任務清單、日誌與用藥記錄，並可直接在您的工作空間採取行動：建立任務、啟動計時器、記錄日誌 — 全透過自然語言指令完成。",
        },
        {
          title: "隱私優先架構",
          description:
            "神經資料絕不離開您的瀏覽器。所有認知指標僅儲存於工作階段記憶體中，永不寫入伺服器。行為資料（任務、筆記、用藥記錄）透過資料庫層級的列安全性隔離每位使用者。",
        },
      ],
    },
    steps: {
      heading: "Tokai 如何運作",
      subtext: "從認知狀態感知到更聰明工作日的三個步驟。",
      items: [
        {
          title: "選擇您的資料模式",
          description:
            "從 30 秒的自我回報開始 — 無需任何硬體。切換至模擬模式進行演示、資料集重放供研究使用，或插入 EEG 頭戴裝置進行即時神經串流。",
        },
        {
          title: "您的認知狀態即時呈現",
          description:
            "九項指標即時更新 — 專注指數、生物能量、心理疲勞、工作記憶負荷等，讓您客觀了解當下的大腦狀態。",
        },
        {
          title: "TokAgent 調適您的工作流程",
          description:
            "AI 規劃師根據您當前的認知狀態推薦最適合的任務，可直接在工作空間執行指令，並保存每個操作的完整審計紀錄。",
        },
      ],
    },
    focusPreview: {
      badge: "您將看到的",
      heading1: "您的專注指數， ",
      headingGradient: "即時。",
      description:
        "Tokai 從您選擇的資料來源計算連續的專注指數 — 自我回報、模擬資料、EEG 資料集重放或即時 BCI — 無需任何硬體即可建立客觀的認知基準。",
      bullets: [
        "即時偵測深度專注與認知疲勞",
        "追蹤 Alpha/Beta 波比值與神經雜訊",
        "查看過度專注風險與預估專注時間",
      ],
      cardTitle: "專注指數",
      cardLive: "即時",
      cardWindow: "最佳專注視窗 · 剩餘 38 分鐘",
      agentLabel: "TokAgent",
      agentText: "偵測到高度專注。建議立即開始認知需求最高的任務。",
      metrics1: [
        { label: "生物能量", value: "72%" },
        { label: "神經雜訊", value: "低" },
        { label: "α/β 比值", value: "0.41" },
      ],
      metrics2: [
        { label: "心理疲勞", value: "31" },
        { label: "工作記憶", value: "42" },
        { label: "過度專注", value: "12%" },
      ],
    },
    app: {
      heading: "Tokai v0.2.0 內部一覽",
      subtext: "六項整合工具，全由您的神經資料驅動。",
    },
    team: {
      heading: "核心團隊",
      subtext: "來自 NTU、NYCU、Temple 等大學的研究人員與工程師。",
    },
    cta: {
      heading: "準備好了解您的大腦了嗎？",
      description: "加入 Alpha，搶先體驗真正配合您生物特性運作的神經支援。",
      button: "立即申請早期使用",
      subtext: "Alpha 期間免費 · 無需信用卡",
    },
    carousel: [
      {
        title: "神經指標儀表板",
        description:
          "九項即時認知指標 — 專注指數、睡眠品質、生物能量、心理疲勞、工作記憶負荷、神經雜訊、T/B 比值、專注視窗與過度專注風險 — 每項均標示資料來源。自我回報模式下，BCI 專屬指標自動變暗。",
      },
      {
        title: "TokAgent",
        description:
          "由 Claude 驅動的 AI 助理，讀取九項神經指標、任務清單、日誌與用藥記錄，並可透過十項工具呼叫行動直接操作您的工作空間。規劃使用 Claude Sonnet 4.6，快速推薦使用 Haiku 4.5。攜帶您自己的 API 金鑰，永不傳送至 Tokai 伺服器。",
      },
      {
        title: "TokDo",
        description:
          "具認知感知能力的任務管理器，每項任務均附有認知需求評分，與即時專注指數對比。設定時間估算、截止日期與 emoji 標籤 — TokAgent 利用這些資訊在最佳時機推薦最合適的任務。",
      },
      {
        title: "TokNote",
        description:
          "具 ADHD 友善設計的日誌，支援情緒標籤與專注記錄。記錄您每天的感受，讓 TokInsights 發掘日誌條目與認知模式之間的關聯。",
      },
      {
        title: "TokMed",
        description:
          "用藥與補充品追蹤，在您的專注圖表上加入時間戳錨點標記，讓您清楚看到每次服藥與當天認知狀態的關聯。",
      },
      {
        title: "TokInsights",
        description:
          "自動在本機分析您的生產力模式 — 何時最專注、情緒與任務完成率的關聯、每週認知趨勢。所有分析在您的瀏覽器中執行，資料絕不離開您的裝置。",
        isNew: true,
      },
    ],
  },
} as const;
