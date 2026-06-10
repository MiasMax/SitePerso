/**
 * All site content lives here. Remaining [PLACEHOLDERS] are listed
 * in CONTENT.md at the repo root.
 */

export const identity = {
  firstName: "MAXENCE",
  lastName: "TOURNAUD",
  tagline: "NETWORK · INFRA · CODE",
  typingRoles: [
    "Network Engineer",
    "DevOps enthusiast",
    "Homelab tinkerer",
    "ENSIIE student",
  ],
  location: "Paris, France",
};

export const about = {
  intro: `Network and infrastructure apprentice at the Paris Brain Institute,
engineering student at ENSIIE. Days spent in datacenter configs,
evenings spent breaking my own home server. I like knowing exactly
what runs where, and why.`,
  funFacts: [
    { icon: "📍", text: "Paris, France" },
    { icon: "🛠️", text: "Ubuntu · Docker · WireGuard" },
    { icon: "🏋️", text: "Weightlifting, competitive skiing" },
    { icon: "🀄", text: "Learning Mandarin" },
    { icon: "🖨️", text: "3D printing on a Bambu Lab" },
  ],
};

// One card per domain. Concrete sentences, no skill bars.
export const skillDomains = [
  {
    num: "01",
    title: "Network",
    text: "VLANs, firewall flow matrices, WireGuard tunnels. I configure datacenter switches at work and run my own VPN at home, down to the iptables rules.",
    stack: ["TCP/IP", "VLAN", "WireGuard", "Firewall", "TLS"],
  },
  {
    num: "02",
    title: "Infra & Self-hosting",
    text: "Ubuntu Server, Docker, Portainer. My homelab runs game servers, websites and this very portfolio on a recycled PC. If it can be self-hosted, I self-host it.",
    stack: ["Ubuntu", "Docker", "Portainer", "Nginx", "Bash"],
  },
  {
    num: "03",
    title: "Dev",
    text: "React, Laravel, Python, Java. Currently building a full CMDB app for the DSI: database design, REST API, front-end and the GitLab CI/CD pipeline behind it.",
    stack: ["React", "Laravel", "Python", "Java", "SQL"],
  },
  {
    num: "04",
    title: "Automation",
    text: "Next on the list: Ansible and Netmiko. The goal is NetOps, treating network gear like code instead of clicking through configs one switch at a time.",
    stack: ["Ansible", "Netmiko", "GitLab CI/CD", "Python"],
  },
];

// service: key used by GET /api/uptime/:service (optional live badge)
// featured: shown on the home page
export const projects = [
  {
    title: "Homelab Server",
    description:
      "A recycled PC turned Ubuntu home server. Runs game servers, static sites and this portfolio in Docker. Next steps: hardened reverse proxy, Fail2ban, automated backups.",
    tags: ["Ubuntu Server", "Docker", "Portainer", "Nginx"],
    status: "In Progress",
    github: "[GITHUB_URL]",
    service: "homelab",
    featured: true,
  },
  {
    title: "WireGuard VPN",
    description:
      "Hand-built WireGuard tunnel between my home server and a roaming laptop. Routing, IP forwarding, iptables MASQUERADE, plus a deep dive into the Noise Protocol and ChaCha20-Poly1305.",
    tags: ["WireGuard", "iptables", "Linux", "Cryptography"],
    status: "Done",
    github: "[GITHUB_URL]",
    service: "vpn",
    featured: true,
  },
  {
    title: "Remote Power Control",
    description:
      "Powering on a Wi-Fi-only desktop from anywhere, without native Wake-on-LAN: a Shelly smart plug driven over its REST API, plus a Pi Zero 2 W and a GPIO relay wired to the power button.",
    tags: ["Raspberry Pi", "GPIO", "REST API", "Bash"],
    status: "In Progress",
    github: "[GITHUB_URL]",
  },
  {
    title: "CMDB Application",
    description:
      "Full-stack configuration management database for the Paris Brain Institute's DSI. Inventory of servers, network assets and links, queryable database, automated GitLab CI/CD deployment.",
    tags: ["React", "Laravel", "SQL", "Docker", "GitLab CI/CD"],
    status: "In Progress",
    featured: true,
  },
  {
    title: "Genshinguess",
    description:
      "A guessing-game website built and hosted end to end: front-end, PHP back-end, SQL database, deployment and server admin, all handled solo.",
    tags: ["JavaScript", "PHP", "SQL", "Self-hosted"],
    status: "Done",
    github: "[GITHUB_URL]",
    service: "genshinguess",
  },
  {
    title: "INSEE Salary Analysis",
    description:
      "Statistical analysis of 2023 net salaries across French departements: normality tests, skewness, kurtosis and data viz, with a slide deck generated from code.",
    tags: ["Python", "pandas", "seaborn", "scipy"],
    status: "Done",
    github: "[GITHUB_URL]",
  },
];

export const journey = [
  {
    period: "2025 - 2028",
    title: "Network & Infrastructure Apprentice",
    org: "Paris Brain Institute (Institut du Cerveau), DSI",
    type: "work",
    text: "Datacenter network admin: switches, VLANs, firewall flows. Building the IT service catalogue and a CMDB app for the team.",
  },
  {
    period: "2025 - 2028",
    title: "Engineering Degree, FISA apprenticeship",
    org: "ENSIIE, Évry",
    type: "education",
    text: "Computer science engineering with a focus on systems and networks. Graph theory, SAT solvers, statistics.",
  },
  {
    period: "[DATES], before Sept 2024",
    title: "Software Developer Intern",
    org: "Suez Smart Solutions",
    type: "work",
    text: "Secured API development in C#, mapping features with OpenLayers, code quality work with ESLint and StyleCop on Azure DevOps.",
  },
  {
    period: "[DATES]",
    title: "BUT Informatique (2 years)",
    org: "[INSTITUTION]",
    type: "education",
    text: "University technology degree in computer science, before joining ENSIIE.",
  },
];

// Homelab page
export const homelab = {
  intro: `An old PC, Ubuntu Server, a fixed IP and way too many Docker
containers. This page shows what actually runs on it, live.`,
  hardware: [
    { label: "Host", value: "Recycled desktop PC" },
    { label: "OS", value: "Ubuntu Server" },
    { label: "Containers", value: "Docker + Portainer" },
    { label: "Access", value: "WireGuard VPN" },
  ],
  services: [
    {
      name: "Portfolio",
      desc: "This site. React build served by Express, in Docker.",
      service: "homelab",
    },
    {
      name: "WireGuard VPN",
      desc: "Remote access to the LAN from my laptop, anywhere.",
      service: "vpn",
    },
    {
      name: "Game servers",
      desc: "Minecraft Java and friends, for me and my friends.",
      service: "games",
    },
    {
      name: "Genshinguess",
      desc: "Self-hosted guessing game, full PHP stack.",
      service: "genshinguess",
    },
  ],
  diagram: `            INTERNET
               |
        [ ISP router ]
               |
     ┌─────────┴─────────┐
     |                   |
[ HOME SERVER ]   [ WireGuard peer ]
  Ubuntu Server      laptop, phone
     |
  [ Docker ]
     ├── nginx (reverse proxy)
     ├── portfolio
     ├── game servers
     └── ...`,
  roadmap: [
    "Hardened reverse proxy with HTTPS everywhere",
    "Fail2ban + UFW lockdown",
    "Automated backups of Docker volumes",
    "Monitoring with Grafana + Prometheus",
  ],
};

export const contact = {
  github: "[GITHUB_URL]",
  linkedin: "[LINKEDIN_URL]",
  email: "[CONTACT_EMAIL]",
};

export const footer = {
  domain: "[DOMAIN]",
  stack: ["Ubuntu Server", "Docker", "Nginx", "[DOMAIN]"],
};
