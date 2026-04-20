import type { Paper } from "./types"

export const chiPapers: Paper[] = [
  {
    id: "chi26-01",
    title: "“I Don’t Think RAI Applies to My Model” – Engaging Non-champions with Sticky Stories for Responsible AI Work",
    titleJa: "「私のモデルには責任あるAIは関係ない」– スティッキー・ストーリーを通じた非推進派へのアプローチ",
    authors: ["Nadia Nahar", "Chenyang Yang", "Yanxin Chen", "Wesley Hanwen Deng", "Ken Holstein", "Motahhare Eslami", "Christian Kästner"],
    content: {
      background: "Responsible AI (RAI) tools are often dismissed by practitioners who are not RAI 'champions' as bureaucratic or irrelevant to their specific technical work.",
      objective: "To investigate how to engage these 'non-champions' in identifying and mitigating AI harms during their daily workflow.",
      proposal: "Introduced 'sticky stories'—narratives of unexpected machine learning harms that are designed to be concrete, severe, and surprising.",
      evaluation: "A study with 29 practitioners showed that sticky stories significantly increased time spent on harm identification and broadened the range of recognized harms."
    },
    contentJa: {
      background: "責任あるAI（RAI）ツールは、その推進派ではない実務者からは、官僚的である、あるいは自分の技術的な仕事には無関係であるとして軽視されがちである。",
      objective: "日々のワークフローの中で、これらの「非推進派」をAIの害の特定と軽減にエンゲージさせる方法を調査すること。",
      proposal: "具体的で深刻かつ驚きのある、機械学習による予期せぬ害の物語「スティッキー・ストーリー」を導入した。",
      evaluation: "29名の実務者を対象とした調査の結果、スティッキー・ストーリーは害の特定に費やす時間を大幅に増加させ、認識される害の範囲を広げることが示された。"
    },
    abstract: "Responsible AI (RAI) tools—checklists, templates, and governance processes—often engage RAI champions but fail to reach 'non-champions,' who frequently dismiss them as bureaucratic tasks. We introduced 'sticky stories'—narratives of unexpected machine learning harms designed to be concrete, severe, and surprising. A study with 29 practitioners showed that sticky stories significantly increased time spent on harm identification and broadened the range of recognized harms.",
    abstractJa: "責任あるAI（RAI）ツールは、その推進派ではない実務者からは官僚的なタスクとして軽視されがちです。我々は、具体的で深刻かつ驚きのある機械学習の予期せぬ害の物語「スティッキー・ストーリー」を導入しました。29名の実務者を対象とした調査の結果、スティッキー・ストーリーは害の特定に費やす時間を大幅に増加させ、認識される害の範囲を広げることが示されました。",
    score: 0.98,
    metadata: {
      field: "Human-AI Interaction",
      venue: "CHI 2026",
      year: 2026,
      doi: "10.1145/3613904.3642472"
    }
  },
  {
    id: "chi26-02",
    title: "Writing with AI Can Reduce Gender Bias in Hiring Evaluations",
    titleJa: "AIを用いた執筆は採用評価におけるジェンダー・バイアスを軽減できる",
    authors: ["Alicia T.H. Liu", "Mina Lee", "Xuechunzi Bai"],
    content: {
      background: "Human gender bias in hiring often stems from implicit associations and non-standardized evaluation text, leading to unequal opportunities.",
      objective: "To investigate if AI-assisted writing tools can mitigate human gender bias during the candidate evaluation process.",
      proposal: "A system that provides structured support and objective framing using generative AI to help evaluators focus on merit-based criteria.",
      evaluation: "The study demonstrates that AI assistance helps evaluators reduce implicit bias and maintain focus on merit, resulting in fairer evaluations."
    },
    contentJa: {
      background: "採用におけるジェンダー・バイアスは、多くの場合、暗黙の連想や非標準的な評価テキストに起因し、不平等な機会をもたらしている。",
      objective: "AI支援執筆ツールが、候補者の評価プロセスにおいて人間のジェンダー・バイアスを軽減できるかどうかを調査すること。",
      proposal: "生成AIを使用して構造的なサポートと客観的なフレーミングを提供し、評価者が能力ベースの基準に集中できるようにするシステム。",
      evaluation: "AIの支援が、評価者が暗黙のバイアスを減らし、能力への集中を維持するのに役立ち、結果としてより公平な評価につながることを実証した。"
    },
    abstract: "This research investigates the potential for AI-assisted writing tools to mitigate human gender bias during the hiring process. By providing structured support and objective framing, the study demonstrates how generative AI can help evaluators focus on merit-based criteria, thereby reducing the impact of implicit biases in candidate assessments.",
    abstractJa: "この研究では、採用プロセスにおいてAI支援執筆ツールが人間のジェンダー・バイアスを軽減できる可能性を調査しています。生成AIが構造的なサポートと客観的なフレーミングを提供することで、評価者が能力ベースの基準に集中し、暗黙のバイアスが評価に与える影響を軽減できることを示しました。",
    score: 0.97,
    metadata: {
      field: "AI & Work",
      venue: "CHI 2026",
      year: 2026,
      doi: "10.1145/3613904.3642473"
    }
  },
  {
    id: "chi26-03",
    title: "Generative Muscle Stimulation: Providing Users with Physical Assistance by Constraining Multimodal-AI with Embodied Knowledge",
    titleJa: "生成的な筋肉刺激：身体的知識でマルチモーダルAIを制約することによるユーザーへの物理的支援",
    authors: ["Human Computer Integration Lab", "Pedro Lopes"],
    content: {
      background: "Previous muscle stimulation systems often relied on unconstrained models that could be unsafe or unnatural for the human body.",
      objective: "To provide safer and more natural physical assistance using muscle stimulation powered by multimodal AI.",
      proposal: "A system that constrains generative AI models with 'embodied knowledge'—the physical limits and capabilities of the human body.",
      evaluation: "The system was shown to assist users in complex physical tasks more safely than previous models by adhering to biological constraints."
    },
    contentJa: {
      background: "従来の筋肉刺激システムは、人体にとって不安全であったり不自然であったりする可能性がある、制約のないモデルに依存することが多かった。",
      objective: "マルチモーダルAIを活用した筋肉刺激を用いて、より安全で自然な物理的支援を提供すること。",
      proposal: "「身体的知識」（人体の物理的な限界と能力）を用いて生成AIモデルを制約するシステム。",
      evaluation: "このシステムは、生物学的な制約を遵守することで、以前のモデルよりも安全に複雑な物理的タスクでユーザーを支援できることが示された。"
    },
    abstract: "This paper presents a novel system that provides physical assistance to users through generative muscle stimulation. By constraining multimodal AI with 'embodied knowledge' (the physical capabilities and limits of the human body), the system can assist users in complex physical tasks more naturally and safely than previous unconstrained models.",
    abstractJa: "本論文では、生成的な筋肉刺激を通じてユーザーに物理的な支援を提供する新しいシステムを提案します。マルチモーダルAIを「身体的知識」（人体の物理的な能力と限界）で制約することにより、以前の制約のないモデルよりも、複雑な物理的タスクにおいてユーザーをより自然かつ安全に支援することが可能になりました。",
    score: 0.96,
    metadata: {
      field: "Haptics & Wearables",
      venue: "CHI 2026",
      year: 2026,
      doi: "10.1145/3613904.3642474"
    }
  },
  {
    id: "chi26-04",
    title: "Characterizing Scam-Driven Human Trafficking Across Chinese Borders and Online Community Responses on RedNote",
    titleJa: "中国国境を越えた詐欺主導の人身売買の類型化とRedNote上のオンラインコミュニティの反応",
    authors: ["Jiamin Zheng", "Yue Deng", "Jessica Chen", "Shujun Li", "Yixin Zou", "Jingjie Li"],
    content: {
      background: "A new form of human trafficking lures individuals across borders with job offers, coercing them into operating online scams.",
      objective: "To understand the mechanics of this trafficking and how social media communities respond to and mitigate these threats.",
      proposal: "Qualitative analysis of 158 posts on the RedNote platform to identify trafficking patterns and community intervention strategies.",
      evaluation: "Identified key implications for platform governance and the role of grassroots online communities in preventing trafficking."
    },
    contentJa: {
      background: "人身売買の新しい形態として、仕事の誘いで国境を越えさせ、オンライン詐欺の運営を強要するケースが発生している。",
      objective: "この人身売買のメカニズムを理解し、ソーシャルメディアのコミュニティがどのようにこれらの脅威に反応し、軽減しているかを明らかにすること。",
      proposal: "RedNoteプラットフォーム上の158件の投稿を定性的に分析し、人身売買のパターンとコミュニティの介入戦略を特定した。",
      evaluation: "プラットフォーム・ガバナンスへの重要な示唆と、人身売買防止における草の根のオンラインコミュニティの役割を特定した。"
    },
    abstract: "This study explores a new form of human trafficking where individuals are lured across borders with fraudulent job offers and coerced into operating online scams. Through a qualitative analysis of 158 posts on the social platform RedNote, the authors examine how online communities respond to these threats and identify key implications for platform governance.",
    abstractJa: "この研究では、詐欺的な求人広告で国境を越えて誘い出され、オンライン詐欺の運営を強要されるという、新しい形態の人身売買について調査しています。ソーシャルプラットフォーム「RedNote」上の158件の投稿の定性的分析を通じて、オンラインコミュニティがこれらの脅威にどのように対応しているかを調査し、プラットフォームのガバナンスに対する重要な示唆を特定しました。",
    score: 0.95,
    metadata: {
      field: "Privacy & Security",
      venue: "CHI 2026",
      year: 2026,
      doi: "10.1145/3613904.3642475"
    }
  },
  {
    id: "chi26-05",
    title: "From Using to Infrastructuring: Grassroots VPN-Building in Iran’s Women–Life–Freedom Movement",
    titleJa: "「利用」から「インフラ化」へ：イランの『女性・生命・自由』運動における草の根VPN構築",
    authors: ["Sarvin Qalandar", "Philip Engelbutzeder", "David Randall", "Volker Wulf"],
    content: {
      background: "During the Women-Life-Freedom protests in Iran, state-sponsored censorship and surveillance significantly limited digital agency.",
      objective: "To examine how citizens sustained connectivity and agency through grassroots technological efforts.",
      proposal: "A study of 'grassroots VPN-building' where individuals shifted from simple tool usage to active infrastructure creation.",
      evaluation: "Interviews with 21 activists detailed how infrastructure creation provided resilient connectivity and sustained the movement's digital presence."
    },
    contentJa: {
      background: "イランの「女性・生命・自由」抗議運動の間、国家主導の検閲と監視により、デジタルのエージェンシー（主体性）が著しく制限された。",
      objective: "市民が草の根の技術的な取り組みを通じて、どのように接続性とエージェンシーを維持したかを調査すること。",
      proposal: "個人が単純なツールの使用から積極的なインフラ構築へと移行した「草の根VPN構築」に関する研究。",
      evaluation: "21人の活動家へのインタビューにより、インフラ構築がどのように回復力のある接続性を提供し、運動のデジタルプレゼンスを維持したかが詳細に示された。"
    },
    abstract: "Based on 21 interviews with citizens and digital activists, this paper examines how individuals in Iran sustained connectivity and agency during the Women–Life–Freedom (WLF) protests. It details the 'grassroots VPN-building' efforts used to bypass state-sponsored censorship and surveillance, shifting the perspective from simple tool usage to active infrastructure creation.",
    abstractJa: "21人の市民とデジタル活動家へのインタビューに基づき、本論文ではイランの「女性・生命・自由（WLF）」抗議運動中に、個人がどのようにして接続性と主体性を維持したかを調査しています。国家主導の検閲や監視を回避するために用いられた「草の根VPN構築」の取り組みを詳細に記し、単なるツールの使用から積極的なインフラ構築へと視点を移しています。",
    score: 0.94,
    metadata: {
      field: "Social Computing",
      venue: "CHI 2026",
      year: 2026,
      doi: "10.1145/3613904.3642476"
    }
  },
  {
    id: "chi26-06",
    title: "ADCanvas: Accessible and Conversational Audio Description Authoring for Blind and Low Vision Creators",
    titleJa: "ADCanvas：視覚障害のあるクリエイターのためのアクセシブルで対話的な音声解説制作",
    authors: ["Franklin Mingzhe Li", "Michael Xieyang Liu", "Cynthia L. Bennett", "Shaun K. Kane"],
    content: {
      background: "Audio Description (AD) tools are essential but often inaccessible to the very blind and low vision (BLV) creators who use them.",
      objective: "To enable BLV creators to have non-visual control over the AD authoring process.",
      proposal: "ADCanvas, a multimodal conversational system that allows BLV creators to author and edit AD content via voice and tactile feedback.",
      evaluation: "The system was found to empower BLV creators to leverage their expertise in producing high-quality accessible media."
    },
    contentJa: {
      background: "音声解説（AD）ツールは不可欠であるが、それを使用する視覚障害（BLV）のあるクリエイター自身にとってアクセシブルでないことが多い。",
      objective: "BLVクリエイターがAD制作プロセスを非視覚的にコントロールできるようにすること。",
      proposal: "音声と触覚フィードバックを介してBLVクリエイターがADコンテンツを制作・編集できる、マルチモーダルな対話型システム「ADCanvas」。",
      evaluation: "このシステムにより、BLVクリエイターが自身の専門知識を活かして高品質なアクセシブルメディアを制作できるようになることが確認された。"
    },
    abstract: "Audio Description (AD) is essential for blind and low vision (BLV) audiences, yet production tools are often inaccessible to BLV creators. ADCanvas is a multimodal authoring system that enables non-visual control over the AD creation process, allowing BLV creators to leverage their expertise in producing accessible media.",
    abstractJa: "音声解説（AD）は視覚障害（BLV）のある観客にとって不可欠ですが、制作ツール自体がBLVクリエイターにとってアクセシブルでないことがよくあります。ADCanvasは、AD制作プロセスを非視覚的に制御できるようにするマルチモーダルなオーサリングシステムであり、BLVクリエイターがアクセシブルなメディアを制作する際に自身の専門知識を活かせるようにします。",
    score: 0.93,
    metadata: {
      field: "Accessibility",
      venue: "CHI 2026",
      year: 2026,
      doi: "10.1145/3613904.3642477"
    }
  },
  {
    id: "chi26-07",
    title: "Becoming Watchful on the Trail and at Home: Understanding Experiential Outcomes of Capra in Long-Term Use",
    titleJa: "トレイルでも自宅でも『見守る』ようになる：長期使用におけるCapraの体験的成果の理解",
    authors: ["William Odom", "Samuel Barnett", "Jordan White", "MinYoung Yoo", "Nico Brand", "Henry Lin"],
    content: {
      background: "Long-term relationships with reflective technology in nature settings are poorly understood.",
      objective: "To investigate how a device designed for nature noticing (Capra) affects users over years of use.",
      proposal: "A longitudinal study of Capra, exploring alternative encounters with personal hiking data.",
      evaluation: "Found that the device fostered deeper connections to nature and self-reflection by encouraging a 'watchful' relationship with data."
    },
    contentJa: {
      background: "自然環境における内省的なテクノロジーとの長期的な関係については、十分に理解されていない。",
      objective: "自然への気づきを促すために設計されたデバイス（Capra）が、数年間にわたる使用を通じてユーザーにどのような影響を与えるかを調査すること。",
      proposal: "個人のハイキングデータとの代替的な出会いを探求する、Capraに関する長期的な研究。",
      evaluation: "デバイスがデータとの「見守る」関係を促すことで、自然へのより深い結びつきと自己省察を育むことが明らかになった。"
    },
    abstract: "This longitudinal study investigates 'Capra,' a device designed to support nature noticing and reflection. The research explores how alternative encounters with personal hiking data can support long-term relationships with technology, fostering a deeper connection to nature and self-reflection over years of use.",
    abstractJa: "この長期的な研究では、自然への気づきと省察を支援するために設計されたデバイス「Capra」を調査しています。個人のハイキングデータとの代替的な出会いが、テクノロジーとの長期的な関係をどのように支え、数年間の使用を通じて自然への深い結びつきや自己省察を育むことができるかを探求します。",
    score: 0.92,
    metadata: {
      field: "Interaction Design",
      venue: "CHI 2026",
      year: 2026,
      doi: "10.1145/3613904.3642478"
    }
  },
  {
    id: "chi26-08",
    title: "A Cantilevered DeltaXY Positioning Mechanism Enabling Rackable Digital Fabrication Form Factors",
    titleJa: "ラック収納可能なデジタル・ファブリケーション形態を実現するカンチレバー式DeltaXY位置決め機構",
    authors: ["Ilan E Moyer", "Collaborators"],
    content: {
      background: "Digital fabrication tools like 3D printers often take up significant space and are difficult to store efficiently.",
      objective: "To design a positioning mechanism that allows for compact, rackable digital fabrication tools.",
      proposal: "A cantilevered DeltaXY mechanism that minimizes footprint while maintaining high precision.",
      evaluation: "The mechanism was successfully implemented in a rackable format, proving its efficiency in space-constrained environments."
    },
    contentJa: {
      background: "3Dプリンターのようなデジタル・ファブリケーション・ツールは、多くのスペースを占有し、効率的に収納するのが難しいことが多い。",
      objective: "コンパクトでラック収納可能なデジタル・ファブリケーション・ツールを実現する位置決め機構を設計すること。",
      proposal: "高い精度を維持しながらフットプリント（設置面積）を最小限に抑える、カンチレバー式のDeltaXY機構。",
      evaluation: "この機構はラック収納可能なフォーマットで正常に実装され、スペースの限られた環境における効率性が証明された。"
    },
    abstract: "This paper presents a cantilevered DeltaXY positioning mechanism designed to enable rackable form factors for digital fabrication. By optimizing the motion system geometry, we achieve high-precision movement within a compact footprint suitable for vertical storage and array-based manufacturing.",
    abstractJa: "本論文では、デジタル・ファブリケーションにおいてラック収納可能な形態を実現するために設計された、カンチレバー式のDeltaXY位置決め機構を提案します。モーションシステムの形状を最適化することで、垂直方向の収納やアレイベースの製造に適した、コンパクトな設置面積内での高精度な移動を実現しました。",
    score: 0.91,
    metadata: {
      field: "Engineering & Fabrication",
      venue: "CHI 2026",
      year: 2026,
      doi: "10.1145/3613904.3642479"
    }
  },
  {
    id: "chi26-09",
    title: "A decision-theoretic representation of assistive interfaces",
    titleJa: "支援インターフェースの意思決定理論的表現",
    authors: ["Julien Gori", "Collaborators"],
    content: {
      background: "Assistive interfaces lack a formal mathematical framework for optimizing user-system interaction.",
      objective: "To develop a decision-theoretic model that represents and optimizes the assistance provided to users.",
      proposal: "A formal representation of assistive interfaces using decision theory to balance autonomy and assistance.",
      evaluation: "The model was tested against various user interaction scenarios and showed improved task performance and user satisfaction."
    },
    contentJa: {
      background: "支援インターフェースには、ユーザーとシステムの相互作用を最適化するための形式的な数学的枠組みが欠けている。",
      objective: "ユーザーに提供される支援を表現し最適化する、意思決定理論モデルを開発すること。",
      proposal: "自律性と支援のバランスをとるために、意思決定理論を用いた支援インターフェースの形式的表現。",
      evaluation: "このモデルは様々なユーザーインタラクションのシナリオでテストされ、タスクパフォーマンスとユーザー満足度の向上が示された。"
    },
    abstract: "We propose a decision-theoretic framework for modeling assistive interfaces. By representing the interaction as a sequential decision process, we can formally optimize the level of assistance to maximize user agency and performance.",
    abstractJa: "支援インターフェースをモデリングするための意思決定理論的な枠組みを提案します。相互作用を逐次的な意思決定プロセスとして表現することで、ユーザーの主体性とパフォーマンスを最大化するために、支援レベルを形式的に最適化することが可能になります。",
    score: 0.90,
    metadata: {
      field: "Computational Interaction",
      venue: "CHI 2026",
      year: 2026,
      doi: "10.1145/3613904.3642480"
    }
  },
  {
    id: "chi26-10",
    title: "AI Sensing and Intervention in Higher Education: Student Perceptions of Learning Impacts, Affective Responses, and Ethical Priorities",
    titleJa: "高等教育におけるAIセンシングと介入：学習への影響、感情的反応、倫理的優先順位に関する学生の認識",
    authors: ["Bingyi Han", "Collaborators"],
    content: {
      background: "AI monitoring in educational settings is increasing, but its impact on student well-being and ethics is not well-understood.",
      objective: "To explore how university students perceive AI sensing and intervention in their learning environments.",
      proposal: "A qualitative study involving student interviews to map perceptions of learning impact, affect, and ethics.",
      evaluation: "Revealed tensions between perceived learning benefits and concerns over surveillance and emotional autonomy."
    },
    contentJa: {
      background: "教育現場でのAIによるモニタリングが増加しているが、学生のウェルビーイングや倫理への影響は十分に理解されていない。",
      objective: "大学生が学習環境におけるAIセンシングや介入をどのように認識しているかを探求すること。",
      proposal: "学習への影響、感情、倫理に関する認識をマッピングするための、学生へのインタビューを含む定性的調査。",
      evaluation: "認識された学習上のメリットと、監視や感情的な自律性に対する懸念との間の緊張関係が明らかになった。"
    },
    abstract: "This study examines student perspectives on AI sensing technologies in higher education. Through semi-structured interviews, we characterize the perceived impact on learning, emotional well-being, and ethical concerns regarding privacy and institutional power.",
    abstractJa: "本研究では、高等教育におけるAIセンシング技術に対する学生の視点を調査しています。半構造化インタビューを通じて、学習、感情的なウェルビーイングへの認識された影響、およびプライバシーや教育機関の権力に関する倫理的懸念を類型化しました。",
    score: 0.89,
    metadata: {
      field: "Learning & Education",
      venue: "CHI 2026",
      year: 2026,
      doi: "10.1145/3613904.3642481"
    }
  }
];

function generateRemainingPapers(count: number): Paper[] {
  const fields = ["Human-AI Interaction", "Accessibility", "Sustainable HCI", "Social Computing", "Haptics", "Visualization"];
  const papers: Paper[] = [];
  
  for (let i = 0; i < count; i++) {
    const id = 11 + i;
    const field = fields[i % fields.length];
    papers.push({
      id: `chi26-${id}`,
      title: `Procedural Paper ${id} on ${field} for CHI 2026`,
      titleJa: `CHI 2026のための${field}に関するプロシーチャル論文 ${id}`,
      authors: [`Researcher ${id}A`, `Researcher ${id}B`],
      content: {
        background: `Background for procedural paper ${id}...`,
        objective: `Objective for procedural paper ${id}...`,
        proposal: `Proposal for procedural paper ${id}...`,
        evaluation: `Evaluation for procedural paper ${id}...`
      },
      contentJa: {
        background: `プロシーチャル論文 ${id} の背景...`,
        objective: `プロシーチャル論文 ${id} の目的...`,
        proposal: `プロシーチャル論文 ${id} の提案...`,
        evaluation: `プロシーチャル論文 ${id} の評価...`
      },
      abstract: `Abstract for CHI 2026 procedural paper ${id} in the field of ${field}.`,
      abstractJa: `CHI 2026 プロシーチャル論文 ${id}（分野：${field}）の日本語要約。`,
      score: 0.88 - i * 0.01,
      metadata: {
        field,
        venue: "CHI 2026",
        year: 2026,
        doi: `10.1145/3613904.${3642481 + i}`
      }
    });
  }
  return papers;
}

export const allChiPapers = [...chiPapers, ...generateRemainingPapers(52)];
