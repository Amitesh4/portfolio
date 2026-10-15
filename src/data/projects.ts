export type ProjectVisual = "ghostap" | "zerotrust" | "blood" | "banking" | "grievance";

export type Block = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type ArchLayer = {
  layer: string;
  items: { name: string; note: string }[];
};

export type StackGroup = {
  category: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  short: string;
  category: string;
  status: string;
  year: string;
  featured: boolean;
  overview: string;
  highlights: string[];
  stack: string[];
  stackGroups: StackGroup[];
  repo: string | null;
  demo: string | null;
  visual: ProjectVisual;
  problem?: string;
  approach?: string;
  blocks: Block[];
  architecture?: ArchLayer[];
  modules?: { name: string; note: string }[];
};

export const projects: Project[] = [
  {
    slug: "ghostap",
    title:
      "GhostAP: A Passive, Multi-Indicator and Explainable Risk-Scoring System for Evil Twin Wi-Fi Access Point Detection",
    short: "GhostAP",
    category: "Cybersecurity · Wireless Network Security",
    status: "Proposed system",
    year: "2026",
    featured: true,
    overview:
      "GhostAP is a proposed passive wireless-security monitoring system that identifies access points impersonating legitimate networks. Instead of trusting a single signal, it correlates multiple observable 802.11 indicators over time and produces an explainable risk score for each suspicious access point.",
    highlights: [
      "Passive collection of IEEE 802.11 management-frame metadata",
      "Access-point profiling by SSID, BSSID, channel, security config, signal strength and vendor OUI",
      "Multi-indicator weighted risk scoring with temporal analysis",
      "Explainable alerts that show the evidence behind each score",
      "Monitoring dashboard with detections, evidence and detection statistics",
    ],
    stack: [
      "Python",
      "Scapy / PyShark",
      "pandas",
      "NumPy",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "Plotly",
      "SQLite / JSON",
      "scikit-learn (optional)",
      "Git",
    ],
    stackGroups: [
      { category: "Language", items: ["Python 3"] },
      { category: "Wireless collection", items: ["Scapy / PyShark", "Compatible Wi-Fi adapter", "External antenna (monitor mode)"] },
      { category: "Data processing", items: ["pandas", "NumPy"] },
      { category: "Detection", items: ["Weighted rules", "Temporal anomaly scoring", "scikit-learn (optional)"] },
      { category: "Storage", items: ["SQLite", "JSON"] },
      { category: "Backend", items: ["Flask"] },
      { category: "Dashboard", items: ["HTML", "CSS", "JavaScript", "Plotly"] },
      { category: "Tooling", items: ["Git", "GitHub"] },
    ],
    repo: null,
    demo: null,
    visual: "ghostap",
    problem:
      "An Evil Twin attack is a rogue wireless access point that imitates a legitimate network, usually by advertising the same SSID to appear trustworthy. Because SSIDs are not unique identifiers and wireless device addresses can be spoofed, users cannot establish an access point's authenticity from its network name alone. Existing detection approaches (authorised-AP lists, RSSI fingerprinting, packet-forwarding behaviour, network-path analysis) each become unreliable in changing wireless environments — legitimate networks may share an SSID, signal strength varies with distance and interference, and routers legitimately change channels or configuration. The question GhostAP addresses is: how can a lightweight, passive software system flag suspicious Wi-Fi access points by correlating multiple observable indicators over time, while giving interpretable alerts and minimising false positives?",
    approach:
      "GhostAP collects observable IEEE 802.11 metadata through a compatible Wi-Fi adapter and external antenna, maintains profiles of observed access points over time, and combines several indicators into a single interpretable risk score. Rather than declaring an attack, it presents suspiciousness together with the evidence that produced it. The system is passive by design — it does not disrupt wireless networks or intercept private user traffic.",
    blocks: [
      {
        heading: "Indicators that are correlated",
        bullets: [
          "SSID and BSSID — a familiar network name advertised by an unfamiliar access point.",
          "Advertised authentication and encryption — an unexpected security downgrade.",
          "Channel and frequency — duplicated or unexpected channel assignments.",
          "RSSI / signal level — unusual changes in the signal-strength pattern over time.",
          "Vendor OUI — where meaningful and available.",
          "First-seen / last-seen timestamps and configuration changes across observations.",
        ],
      },
      {
        heading: "Explainable risk scoring",
        body:
          "The engine computes a weighted score: R = (Σ wᵢxᵢ / Σ wᵢ) × 100, where wᵢ is the importance assigned to indicator i and xᵢ is its normalised suspiciousness between 0 and 1. R is a suspiciousness score from 0 to 100, not a calibrated probability that an access point is malicious. Weights and alert thresholds are tuned using labelled test observations.",
        bullets: [
          "Every alert lists the indicators that contributed to the score.",
          "Alerts carry the risk score, an alert category and the observation timestamps.",
          "Each alert states uncertainty and possible benign causes.",
        ],
      },
      {
        heading: "Evaluation approach",
        bullets: [
          "Precision, recall, F1-score and false-positive rate.",
          "Detection latency from first observation to alert.",
          "Controlled experiments in an authorised test environment using legitimate and test access points.",
          "Comparison against a simple baseline detector that flags duplicate SSIDs or single suspicious indicators.",
        ],
      },
      {
        heading: "Ethical and authorised-testing scope",
        body:
          "GhostAP is a defensive, passive monitoring tool intended for authorised environments only. It is designed to observe already-broadcast wireless metadata without disrupting networks, injecting packets or intercepting private user traffic. Evaluation uses controlled test access points with the permission of the environment owner. No effectiveness claims are made until the prototype has been implemented and measured; the project aims to improve the interpretability of Evil Twin detection and to investigate whether multi-indicator correlation can reduce false alarms compared with simpler methods.",
      },
    ],
    architecture: [
      {
        layer: "Data acquisition",
        items: [
          { name: "External antenna", note: "Receives observable Wi-Fi signals" },
          { name: "Compatible Wi-Fi adapter", note: "Monitor-mode support; Linux environment if macOS lacks capture support" },
          { name: "Wireless metadata collector", note: "Scapy or PyShark — extract SSID, BSSID, channel, security info and RSSI" },
        ],
      },
      {
        layer: "Detection engine",
        items: [
          { name: "Store", note: "SQLite or JSON — access-point profiles and observations" },
          { name: "Feature extraction + temporal baseline", note: "pandas, NumPy — compare against previously recorded profiles" },
          { name: "Multi-indicator risk engine", note: "Weighted rules plus optional anomaly detection" },
        ],
      },
      {
        layer: "Presentation",
        items: [
          { name: "Backend", note: "Flask — exposes detection results to the dashboard" },
          { name: "GhostAP dashboard", note: "HTML, CSS, JavaScript and Plotly" },
          { name: "Output", note: "Risk level, evidence, observation history and evaluation metrics" },
        ],
      },
    ],
    modules: [
      { name: "Wireless metadata collection", note: "Collect supported 802.11 management-frame metadata via adapter and external antenna." },
      { name: "Feature extraction", note: "Extract and compare features of observed access points against recorded profiles." },
      { name: "Risk scoring", note: "Multi-indicator risk scoring and suspicious-event correlation." },
      { name: "Dashboard", note: "Alerts, supporting evidence, event timeline and detection statistics." },
    ],
  },
  {
    slug: "zero-trust-self-healing-network",
    title: "AI-Powered Autonomous Zero Trust Self-Healing Network Using Software-Defined Networking",
    short: "Zero Trust Self-Healing Network",
    category: "AI · Cybersecurity · Network Automation",
    status: "Proposed architecture",
    year: "2026",
    featured: true,
    overview:
      "A proposed network management and security framework that combines Artificial Intelligence, Software-Defined Networking and Zero Trust principles. It monitors network telemetry, predicts failures, evaluates trust, and coordinates corrective actions such as rerouting traffic or isolating suspicious devices — reducing downtime and manual intervention.",
    highlights: [
      "Software-Defined Networking-based virtual enterprise network",
      "Continuous telemetry and network health monitoring",
      "Machine-learning-based failure prediction with per-device / per-link risk scores",
      "Dynamic Zero Trust evaluation and policy enforcement",
      "Intelligent decision engine that ranks and validates recovery actions",
      "Automated recovery with verification, rollback and retry",
      "Monitoring dashboard for topology, metrics, alerts and recovery history",
    ],
    stack: [
      "Python",
      "Ryu",
      "Mininet",
      "Open vSwitch",
      "Scikit-learn",
      "TensorFlow / PyTorch",
      "FastAPI / Flask",
      "Prometheus",
      "InfluxDB / PostgreSQL",
      "Grafana / React",
      "REST API",
      "Ubuntu Linux",
    ],
    stackGroups: [
      { category: "Language", items: ["Python"] },
      { category: "SDN", items: ["Ryu controller", "Mininet", "Open vSwitch"] },
      { category: "Machine learning", items: ["Scikit-learn", "TensorFlow / PyTorch"] },
      { category: "Backend & monitoring", items: ["FastAPI / Flask", "REST API", "Prometheus"] },
      { category: "Storage", items: ["InfluxDB", "PostgreSQL"] },
      { category: "Dashboard", items: ["Grafana", "React"] },
      { category: "Operating system", items: ["Ubuntu Linux"] },
      { category: "Tooling", items: ["Git", "GitHub"] },
    ],
    repo: null,
    demo: null,
    visual: "zerotrust",
    problem:
      "Modern enterprise networks face hardware failures, cyberattacks, congestion and manual configuration errors. Conventional network management reacts only after a failure and depends heavily on human intervention, while traditional security models implicitly trust authenticated users — leaving room for lateral movement by attackers. Existing work tends to solve these problems in isolation: SDN security, Zero Trust, AI-based detection or self-healing. There is a need for one autonomous framework that unifies detection, trust and recovery.",
    approach:
      "The project proposes a virtual enterprise network built on SDN, where a controller maintains a live view of topology and link state. Telemetry from Mininet, Open vSwitch and Ryu feeds a streaming pipeline and health monitor. Machine-learning models predict failures and produce risk scores; a Zero Trust layer continuously evaluates identities and authorises proposed actions; and an intelligent decision engine ranks viable recovery actions and applies them through the controller, verifying the outcome and rolling back if recovery fails.",
    blocks: [
      {
        heading: "Network monitoring and telemetry",
        bullets: [
          "Telemetry collector gathers measurements from Mininet, Open vSwitch and Ryu where supported.",
          "Link metrics: throughput, utilisation, latency, packet loss and availability.",
          "Device metrics: interface counters and CPU / memory where available.",
          "A streaming pipeline publishes timestamped measurements; a health monitor flags unavailable devices, degraded links and abnormal values.",
        ],
      },
      {
        heading: "AI failure prediction",
        bullets: [
          "Define what constitutes a failure and the prediction horizon.",
          "Baseline model: threshold-based or Random Forest, with gradient boosting or time-series models evaluated if justified by the data.",
          "Per-device or per-link risk scores returned with timestamps and confidence.",
          "Model evaluation: precision, recall, F1-score, false alarms and prediction lead time.",
        ],
      },
      {
        heading: "Zero Trust security",
        bullets: [
          "Identity management and authentication for users and system services.",
          "Authorization defines which identities may view, propose, approve or execute network changes.",
          "A policy engine evaluates every proposed recovery action against security and operational policy.",
          "An enforcement layer blocks unauthorised commands before they reach the controller, with a full audit trail.",
        ],
      },
      {
        heading: "Intelligent decision engine",
        bullets: [
          "Fault classification (link failure, congestion, packet loss) and topology analysis to find affected devices and alternative paths.",
          "Candidate recovery actions are generated and ranked by service impact, latency, available capacity and action cost.",
          "Policy integration rejects actions that violate Zero Trust or operational constraints; the chosen action and rationale are logged.",
        ],
      },
      {
        heading: "Self-healing and recovery workflow",
        body:
          "The recovery orchestrator coordinates the full detect-to-recover flow: the action executor applies changes through the controller, routes are restored or traffic redirected where a viable alternative path exists, congestion is mitigated with permitted routing changes, and recovery verification checks connectivity and telemetry afterwards. Unsuccessful actions are rolled back safely and alternatives attempted.",
      },
      {
        heading: "Evaluation metrics",
        bullets: [
          "Recovery time, recovery success rate and service disruption.",
          "Latency and packet loss during recovery.",
          "Prediction accuracy, false positives and prediction lead time.",
          "Baseline comparison of ordinary detection / recovery against the proposed system, plus ablation studies on individual components.",
        ],
      },
      {
        heading: "Implementation status",
        body:
          "This is a proposed system architecture. The feature set and module breakdown describe the intended design; no measured accuracy, recovery speed or performance results are claimed here. Evaluation is planned using repeatable network scenarios and baseline comparisons with recorded configuration, model versions, seeds and logs for reproducibility.",
      },
    ],
    architecture: [
      {
        layer: "Enterprise SDN foundation",
        items: [
          { name: "Topology generator", note: "YAML-configured enterprise network — routers, switches, hosts, servers and links" },
          { name: "Network control layer", note: "NetworkController, NetworkState, EventBus, device/link control and topology snapshots" },
          { name: "Failure framework", note: "Failure models, failure manager, network impairments and reusable failure scenarios" },
        ],
      },
      {
        layer: "Telemetry & analytics",
        items: [
          { name: "Telemetry & health", note: "Collector, link/device metrics, streaming pipeline, health monitor and telemetry API" },
          { name: "Data & analytics", note: "Metric storage, historical queries, feature engineering, anomaly baseline and dataset generation" },
        ],
      },
      {
        layer: "AI & trust",
        items: [
          { name: "AI failure prediction", note: "Baseline and advanced models, risk scoring and prediction API" },
          { name: "Zero Trust security", note: "Identity, authentication, authorization, policy engine, enforcement and audit trail" },
        ],
      },
      {
        layer: "Autonomy & presentation",
        items: [
          { name: "Intelligent decision engine", note: "Fault classification, topology analysis, candidate generation, ranking and policy integration" },
          { name: "Autonomous self-healing", note: "Recovery orchestrator, action executor, route recovery, congestion mitigation, verification, rollback" },
          { name: "Advanced dashboard", note: "Topology, live telemetry, failure management, prediction panel, recovery timeline and secure controls" },
        ],
      },
    ],
    modules: [
      { name: "Module 1 · Enterprise SDN foundation", note: "Bootstrap, topology generator, control layer, failure models / manager, impairments, scenarios and release validation." },
      { name: "Module 2 · Telemetry and monitoring", note: "Telemetry collector, link and device metrics, streaming pipeline, health monitor and telemetry API." },
      { name: "Module 3 · Network data and analytics", note: "Metric storage, historical queries, feature engineering, anomaly-detection baseline, dataset generation and data quality." },
      { name: "Module 4 · AI failure prediction", note: "Prediction problem definition, baseline and advanced models, risk scoring, model evaluation and prediction API." },
      { name: "Module 5 · Zero Trust security", note: "Identity management, authentication, authorization, policy engine, enforcement layer and audit trail." },
      { name: "Module 6 · Intelligent decision engine", note: "Fault classification, topology analysis, candidate generation, action ranking, policy integration and decision logging." },
      { name: "Module 7 · Autonomous self-healing", note: "Recovery orchestrator, action executor, route recovery, congestion mitigation, verification, rollback / retry and recovery metrics." },
      { name: "Module 8 · Advanced dashboard", note: "Topology visualisation, live telemetry, failure management, prediction panel, recovery timeline, secure controls and event streaming." },
      { name: "Module 9 · Research evaluation and deployment", note: "Experiment framework, baseline comparison, AI and recovery evaluation, ablation studies, reproducibility and documentation." },
    ],
  },
  {
    slug: "blood-donation-management",
    title: "AI-Based Blood Donation Management System",
    short: "Blood Donation System",
    category: "Full-Stack · Applied ML",
    status: "Implemented",
    year: "2026",
    featured: false,
    overview:
      "A Flask web application that connects blood donors with hospitals and recipients. It combines a scikit-learn eligibility predictor, rule-based donor matching and admin analytics to manage the donation lifecycle end to end.",
    highlights: [
      "Donor and recipient registration with blood-group validation and hashed authentication",
      "ML eligibility predictor (Logistic Regression + StandardScaler) over age, haemoglobin, weight, BMI and donation history",
      "Rule-based donor matching (explicitly not ML) for requests",
      "Donation-history tracking and admin analytics dashboards",
    ],
    stack: ["Python", "Flask", "SQLAlchemy", "SQLite", "scikit-learn", "Jinja2", "Bootstrap 5", "Chart.js", "Flask-Login"],
    stackGroups: [
      { category: "Backend", items: ["Python", "Flask", "Flask-Login"] },
      { category: "Data", items: ["SQLAlchemy ORM", "SQLite"] },
      { category: "Machine learning", items: ["scikit-learn (Logistic Regression + StandardScaler)"] },
      { category: "Frontend", items: ["Jinja2 templates", "Bootstrap 5", "Chart.js"] },
    ],
    repo: "https://github.com/Amitesh4/Blood-donation-system",
    demo: null,
    visual: "blood",
    blocks: [
      {
        heading: "How it works",
        body:
          "Donors register with health information and a blood group; recipients and hospitals register with organisation details. A short self-assessment feeds the ML eligibility model, while a rule-based matcher filters donors by blood group and availability. Admins track donation history and system activity through charts.",
      },
      {
        heading: "Honest note on the model",
        body:
          "The training data is synthetic and the project was built for demonstration and educational purposes. The eligibility model supports, and does not replace, real medical screening.",
      },
    ],
  },
  {
    slug: "banking-system",
    title: "Banking System",
    short: "Banking System",
    category: "Backend · Java",
    status: "Implemented",
    year: "2026",
    featured: false,
    overview:
      "A full-stack banking system with a Spring Boot REST API and a vanilla JavaScript frontend backed by MySQL, covering accounts, authentication and transaction flows.",
    highlights: [
      "Spring Boot 2.7 REST API with layered service and repository structure",
      "Vanilla JavaScript frontend consuming the REST endpoints",
      "MySQL persistence for accounts and transactions",
    ],
    stack: ["Java", "Spring Boot 2.7", "REST API", "MySQL", "JavaScript"],
    stackGroups: [
      { category: "Backend", items: ["Java", "Spring Boot 2.7", "REST API"] },
      { category: "Data", items: ["MySQL"] },
      { category: "Frontend", items: ["Vanilla JavaScript"] },
    ],
    repo: "https://github.com/Amitesh4/banking-system",
    demo: null,
    visual: "banking",
    blocks: [
      {
        heading: "Scope",
        body:
          "The project focuses on a clean REST API design and a simple front end that exercises it — accounts, authentication and transactions over a MySQL datastore.",
      },
    ],
  },
  {
    slug: "ai-grievance-resolution",
    title: "AI Grievance Resolution System",
    short: "AI Grievance Resolution",
    category: "AI · Automation",
    status: "Implemented",
    year: "2026",
    featured: false,
    overview:
      "An AI agent-based system that automatically classifies, prioritises and routes public grievances to the right department, reducing manual triage.",
    highlights: [
      "Automatic classification of incoming grievances",
      "Priority assignment for triage",
      "Routing to the appropriate department",
    ],
    stack: ["Python", "AI agents", "NLP"],
    stackGroups: [
      { category: "Backend", items: ["Python", "AI agents"] },
      { category: "Processing", items: ["Text classification", "NLP"] },
    ],
    repo: "https://github.com/Amitesh4/ai-grievance-resolution-system",
    demo: null,
    visual: "grievance",
    blocks: [
      {
        heading: "Goal",
        body:
          "To demonstrate an agent-based pipeline that turns unstructured complaints into structured, routed tickets.",
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
