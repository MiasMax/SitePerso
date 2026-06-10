/**
 * All site content lives here, extracted from the ai_context files.
 * Remaining [PLACEHOLDERS] are listed in CONTENT.md at the repo root.
 */

export const identity = {
  name: "Maxence",
  fullName: "Maxence Tournaud",
  subtitle: "Network Engineer · DevOps · Self-hoster",
  typingRoles: [
    "Network Engineer",
    "DevOps enthusiast",
    "Homelab tinkerer",
    "ENSIIE student",
  ],
  location: "Paris, France",
};

export const about = {
  bio: `I'm Maxence, an apprentice network & infrastructure engineer at the
Paris Brain Institute (Institut du Cerveau) and an engineering student at
ENSIIE in the FISA apprenticeship program. I work at the interface between
networking, infrastructure and code — configuring datacenter networks and
building internal tools for the DSI by day, running my own self-hosted
homelab by night. I'd rather understand how things work under the hood than
rely on turnkey solutions.`,
  values: [
    {
      title: "Learn by building",
      text: "Real projects over academic exercises — from a recycled PC turned home server to a full CMDB application.",
    },
    {
      title: "Understand the stack",
      text: "From OS internals and VPN cryptography to network architecture — I dig until it makes sense.",
    },
    {
      title: "Pragmatic & direct",
      text: "Go straight to the point, document what matters, keep code quality high (Git, reviews, linting).",
    },
  ],
  funFacts: [
    { icon: "📍", text: "Based in Paris, France" },
    { icon: "🛠️", text: "Daily stack: Ubuntu · Docker · WireGuard" },
    { icon: "🏋️", text: "Weightlifting & competitive skiing" },
    { icon: "🀄", text: "Learning Mandarin Chinese" },
    { icon: "🖨️", text: "3D printing on a Bambu Lab" },
  ],
};

// level: 1–5 (1 = beginner, 5 = expert)
export const skillGroups = [
  {
    category: "Networking",
    skills: [
      { name: "TCP/IP · VLANs", level: 4 },
      { name: "Firewall & flow matrices", level: 4 },
      { name: "WireGuard VPN", level: 4 },
      { name: "Datacenter switching", level: 3 },
      { name: "Reverse proxy · TLS · SNI", level: 3 },
    ],
  },
  {
    category: "DevOps / Infra",
    skills: [
      { name: "Linux / Ubuntu Server", level: 4 },
      { name: "Docker · Portainer", level: 4 },
      { name: "Git · GitLab CI/CD", level: 4 },
      { name: "Bash scripting", level: 3 },
      { name: "Ansible · Netmiko", level: 2, note: "learning" },
      { name: "Raspberry Pi · GPIO", level: 3 },
    ],
  },
  {
    category: "Dev",
    skills: [
      { name: "JavaScript / React", level: 3 },
      { name: "PHP / Laravel", level: 4 },
      { name: "Python", level: 3 },
      { name: "Java", level: 4 },
      { name: "SQL", level: 3 },
      { name: "C#", level: 3 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Azure DevOps", level: 3 },
      { name: "SharePoint", level: 3 },
      { name: "Blender", level: 2 },
      { name: "Grafana · Prometheus", level: 2, note: "learning" },
      { name: "Cockpit", level: 3 },
    ],
  },
];

// service: key used by GET /api/uptime/:service (optional live badge)
export const projects = [
  {
    title: "Homelab Server",
    description:
      "A recycled PC turned Ubuntu home server hosting Docker services: game servers (Minecraft Java & more), static websites and this very portfolio. Next up: hardened reverse proxy, Fail2ban + UFW, automated volume backups.",
    tags: ["Ubuntu Server", "Docker", "Portainer", "Nginx"],
    status: "In Progress",
    github: "[GITHUB_URL]",
    service: "homelab",
  },
  {
    title: "WireGuard VPN",
    description:
      "Full WireGuard tunnel between the home server and a roaming laptop for remote access to the LAN. Hand-configured routing, IP forwarding and iptables MASQUERADE — plus a deep dive into the Noise Protocol, Curve25519 and ChaCha20-Poly1305.",
    tags: ["WireGuard", "iptables", "Linux", "Cryptography"],
    status: "Done",
    github: "[GITHUB_URL]",
    service: "vpn",
  },
  {
    title: "Remote Power Control",
    description:
      "Powering on a Wi-Fi-only desktop remotely without native Wake-on-LAN: a Shelly smart plug driven over its local REST API, paired with a Raspberry Pi Zero 2 W and a GPIO relay that simulates a press on the power button.",
    tags: ["Raspberry Pi", "GPIO", "REST API", "Bash"],
    status: "In Progress",
    github: "[GITHUB_URL]",
  },
  {
    title: "CMDB Application",
    description:
      "Full-stack configuration management database for the Paris Brain Institute's DSI: inventory of servers, network assets and links, with a fully queryable database and an automated GitLab CI/CD deployment pipeline. ~5-month professional project.",
    tags: ["React", "Laravel", "SQL", "Docker", "GitLab CI/CD"],
    status: "In Progress",
  },
  {
    title: "Genshinguess",
    description:
      "A full-stack guessing-game website built and self-hosted end to end: front-end, PHP back-end, SQL database, deployment and server administration all handled solo.",
    tags: ["JavaScript", "PHP", "SQL", "Self-hosted"],
    status: "Done",
    github: "[GITHUB_URL]",
    service: "genshinguess",
  },
  {
    title: "INSEE Salary Analysis",
    description:
      "Statistical analysis of 2023 net monthly salaries across French départements: descriptive statistics, normality testing (Kolmogorov-Smirnov, skewness/kurtosis) and data visualisation, with a programmatically generated slide deck.",
    tags: ["Python", "pandas", "seaborn", "scipy"],
    status: "Done",
    github: "[GITHUB_URL]",
  },
];

export const journey = [
  {
    period: "Sept 2025 — Sept 2028",
    title: "Network & Infrastructure Apprentice",
    org: "Paris Brain Institute (Institut du Cerveau) — DSI, Pitié-Salpêtrière Hospital, Paris",
    type: "work",
    points: [
      "Datacenter network administration: switch & port configuration, VLANs, firewall flow openings",
      "Building the DSI's IT service catalogue (structured forms, Arcops validation workflows)",
      "Developing internal tools — CMDB application for asset & configuration management",
    ],
  },
  {
    period: "2025 — 2028",
    title: "Engineering Degree — FISA (apprenticeship program)",
    org: "ENSIIE — École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise",
    type: "education",
    points: [
      "Computer science engineering with a focus on systems & networks",
      "Discrete mathematics, graph theory, computational logic (SAT solvers), statistics",
    ],
  },
  {
    period: "[DATES] — before Sept 2024",
    title: "Software Developer Intern",
    org: "Suez Smart Solutions",
    type: "work",
    points: [
      "Secured API development in C# with cryptographic mechanisms and Newtonsoft.Json serialisation",
      "Front-end mapping & geolocation features with OpenLayers, in collaboration with UX designers",
      "Code quality work: ESLint, StyleCop, pull requests on Azure DevOps in an Agile team",
    ],
  },
  {
    period: "[DATES]",
    title: "BUT Informatique (2 years completed)",
    org: "[INSTITUTION]",
    type: "education",
    points: [
      "University technology degree in computer science before joining ENSIIE",
    ],
  },
];

export const contact = {
  github: "[GITHUB_URL]",
  linkedin: "[LINKEDIN_URL]",
  email: "[CONTACT_EMAIL]",
};

export const footer = {
  domain: "[DOMAIN]",
  stack: ["Ubuntu Server", "Docker", "Nginx", "[DOMAIN]"],
};
