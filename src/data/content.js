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
      "Full-stack configuration management database for the Paris Brain Institute's DSI. React front, Laravel REST API, roles and permissions wired to Active Directory over LDAPS, three-server Docker setup deployed by GitLab CI/CD on every push.",
    tags: ["React", "Laravel", "Docker", "LDAPS", "GitLab CI/CD"],
    status: "In Progress",
    featured: true,
  },
  {
    title: "Genshinguess",
    description:
      "A guessing-game website built and hosted end to end on a classic LAMP-style stack: Apache, PHP back-end, MariaDB database, deployment and server admin all handled solo.",
    tags: ["PHP", "Apache", "MariaDB", "JavaScript", "Self-hosted"],
    status: "Done",
    github: "[GITHUB_URL]",
    service: "genshinguess",
  },
  {
    title: "Battle Royale Game",
    description:
      "Unity battle royale built by a team of 10. I worked on player input serialization and the weapon system, and managed the GitHub repo: branching, versioning, keeping ten people from stepping on each other.",
    tags: ["Unity", "C#", "Git", "Teamwork"],
    status: "Done",
    github: "[GITHUB_URL]",
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
    period: "Sept 2025 - Sept 2028",
    title: "Engineering Apprentice, Dev & IT Infrastructure",
    org: "Paris Brain Institute (ICM), DSI, Pitié-Salpêtrière, Paris",
    type: "work",
    text: "Infrastructure & Networks division (CloudOps and Network teams). Datacenter network admin: switches, VLANs, firewall flows. Main mission: building a CMDB centralizing the whole IT inventory.",
  },
  {
    period: "2025 - 2028",
    title: "Engineering Degree, FISA apprenticeship",
    org: "ENSIIE, Évry",
    type: "education",
    text: "Computer science engineering with a focus on systems and networks. Graph theory, SAT solvers, statistics.",
  },
  {
    period: "2025, 4 months",
    title: "JavaScript Developer Intern",
    org: "WebGames, Caen",
    type: "work",
    text: "Built an advanced map editor (5,200+ lines of JS): hierarchical layers, nested groups, drag and drop, grid culling for massive scenes. Shipped to production.",
  },
  {
    period: "May - July 2024",
    title: "Full-Stack Developer Intern",
    org: "Suez Smart Solutions, Île-de-France",
    type: "work",
    text: "Secured API development with cryptography for water treatment systems, mapping features with OpenLayers, Azure DevOps in an Agile team.",
  },
  {
    period: "2022 - 2025",
    title: "BUT Informatique",
    org: "Université Paris-Saclay, IUT d'Orsay",
    type: "education",
    text: "Three-year computer science degree. Ranked top 10 of a class of 63.",
  },
];

// Homelab page
export const homelab = {
  intro: `An old PC, Ubuntu Server, a fixed IP and way too many Docker
containers. This page shows what actually runs on it, live.`,
  hardware: [
    { label: "Board", value: "Asus TUF Gaming B450-Plus" },
    { label: "RAM", value: "16 GB" },
    { label: "OS", value: "Ubuntu Server" },
    { label: "Containers", value: "Docker + Portainer" },
    { label: "Management", value: "Cockpit web console" },
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
      name: "Genshinguess",
      desc: "Self-hosted guessing game, Apache + PHP + MariaDB.",
      service: "genshinguess",
    },
    {
      name: "Cockpit",
      desc: "Web console for the server: logs, services, resources.",
      service: "cockpit",
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
     ├── Cockpit (web admin)
     └── Docker
          ├── nginx (reverse proxy)
          ├── portfolio
          ├── genshinguess (LAMP)
          └── game servers`,
  roadmap: [
    "Hardened reverse proxy with HTTPS everywhere",
    "Fail2ban + UFW lockdown",
    "Automated backups of Docker volumes",
    "Monitoring with Grafana + Prometheus",
  ],
};

// Interactive game-server panel on the Homelab page.
// status: "live" = always on (green), "on-demand" = spun up on request (amber).
export const gameServers = [
  {
    name: "Empyrion",
    full: "Empyrion - Galactic Survival",
    glyph: "🚀",
    genre: "Space survival sandbox",
    status: "on-demand",
    blurb:
      "Voxel space survival with ships, planets and bases. Heavy on RAM, so it spins up when the crew wants to play.",
  },
  {
    name: "Palworld",
    full: "Palworld",
    glyph: "🐾",
    genre: "Open-world survival",
    status: "on-demand",
    blurb:
      "Dedicated Palworld world for co-op. Resource hungry, launched on demand.",
  },
  {
    name: "Minecraft",
    full: "Minecraft (Vanilla)",
    glyph: "🟩",
    genre: "Sandbox",
    status: "live",
    blurb:
      "Vanilla Java server, light enough to leave running around the clock.",
  },
  {
    name: "MC Modded",
    full: "Minecraft (Modded)",
    glyph: "🛠️",
    genre: "Modpack sandbox",
    status: "on-demand",
    blurb:
      "Modded Forge/Fabric pack. More mods, more memory, so it runs on request.",
  },
  {
    name: "Terraria",
    full: "Terraria",
    glyph: "🌳",
    genre: "2D sandbox adventure",
    status: "live",
    blurb:
      "Lightweight Terraria world, always available for a quick session.",
  },
  {
    name: "Hytale",
    full: "Hytale",
    glyph: "⚔️",
    genre: "Adventure sandbox",
    status: "on-demand",
    blurb:
      "Set up and waiting. Spun up on demand whenever there's something to test.",
  },
];

export const contact = {
  github: "https://github.com/MiasMax",
  linkedin: "https://fr.linkedin.com/in/maxence-tournaud-4b1726270",
  email: "tournaudmax@gmail.com",
};

export const footer = {
  domain: "miasmax.com",
  stack: ["Ubuntu Server", "Docker", "Nginx", "miasmax.com"],
};
