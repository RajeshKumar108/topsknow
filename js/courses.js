/**
 * TopsKnow – Course data and catalog logic
 */

const COURSES = [
  {
    id: 1,
    title: "Ethical Hacking & Penetration Testing",
    description: "Master ethical hacking from zero to advanced. Learn Kali Linux, Metasploit, Burp Suite, and real-world attack/defense techniques.",
    instructor: "Alex Chen",
    instructorRole: "Senior Penetration Tester, OSCP Certified",
    level: "Intermediate",
    category: "Penetration Testing",
    duration: "42 hours",
    lessons: 87,
    students: 12400,
    rating: 4.9,
    reviews: 3200,
    price: 29.99,
    lendDays: 30,
    available: 8,
    totalSeats: 10,
    emoji: "🔓",
    bgColor: "linear-gradient(135deg,#1a2235,#0f1724)",
    ribbon: "hot",
    tags: ["Kali Linux","Metasploit","OSCP","Burp Suite"],
    isNew: false,
    modules: [
      { title: "Introduction to Ethical Hacking", lessons: ["Course Overview","Legal Framework & Ethics","Setting Up Your Lab","Introduction to Kali Linux"], free: [0,1] },
      { title: "Reconnaissance & Footprinting", lessons: ["Passive Reconnaissance","OSINT Tools","DNS Enumeration","Google Hacking (Dorking)","Shodan for Recon"], free: [0] },
      { title: "Scanning & Enumeration", lessons: ["Nmap Deep Dive","Port Scanning Techniques","Service Enumeration","Vulnerability Scanning with Nessus"], free: [] },
      { title: "Exploitation with Metasploit", lessons: ["Metasploit Framework Basics","Exploiting Vulnerabilities","Post-Exploitation","Meterpreter Mastery"], free: [] },
      { title: "Web Application Hacking", lessons: ["OWASP Top 10","SQL Injection","XSS & CSRF","Burp Suite Professional","API Security Testing"], free: [] },
      { title: "Reporting & Remediation", lessons: ["Writing Pentest Reports","CVSS Scoring","Remediation Best Practices","Client Communication"], free: [] }
    ],
    includes: ["42 hours of HD video","Downloadable lab files","CTF challenges","Certificate of completion","30-day borrow window","Community Discord access"]
  },
  {
    id: 2,
    title: "CompTIA Security+ Complete Prep",
    description: "Everything you need to pass the CompTIA Security+ SY0-701 exam on your first attempt. Covers all domains with practice questions.",
    instructor: "Sarah Mitchell",
    instructorRole: "Cybersecurity Trainer, CompTIA Certified",
    level: "Beginner",
    category: "Certification",
    duration: "28 hours",
    lessons: 65,
    students: 28600,
    rating: 4.8,
    reviews: 7100,
    price: 0,
    lendDays: 14,
    available: 0,
    totalSeats: 20,
    emoji: "📋",
    bgColor: "linear-gradient(135deg,#1a2235,#0f1724)",
    ribbon: null,
    tags: ["Security+","CompTIA","SY0-701","Certification"],
    isNew: false,
    modules: [
      { title: "Threats, Attacks & Vulnerabilities", lessons: ["Types of Malware","Social Engineering","Application Attacks","Network Attacks","Threat Intelligence"], free: [0,1] },
      { title: "Architecture & Design", lessons: ["Enterprise Security Architecture","Cloud Security Models","Virtualization & Containers","Secure Application Development"], free: [0] },
      { title: "Implementation", lessons: ["Cryptography Fundamentals","PKI & Certificates","Wireless Security","Secure Protocols"], free: [] },
      { title: "Operations & Incident Response", lessons: ["Incident Response Procedures","Digital Forensics","Business Continuity","Disaster Recovery"], free: [] },
      { title: "Governance, Risk & Compliance", lessons: ["Risk Management","Compliance Frameworks","Data Privacy","Security Policies"], free: [] }
    ],
    includes: ["28 hours of video","Full practice exam bank (500+ questions)","Study flashcards","Performance-based question simulations","Certificate of completion","14-day borrow window"]
  },
  {
    id: 3,
    title: "Network Security Fundamentals",
    description: "Comprehensive guide to securing enterprise networks. Covers firewalls, IDS/IPS, VPNs, zero-trust architecture, and network forensics.",
    instructor: "James Rivera",
    instructorRole: "Network Security Architect",
    level: "Intermediate",
    category: "Network Security",
    duration: "35 hours",
    lessons: 72,
    students: 9800,
    rating: 4.7,
    reviews: 2400,
    price: 24.99,
    lendDays: 21,
    available: 5,
    totalSeats: 8,
    emoji: "🛡️",
    bgColor: "linear-gradient(135deg,#1a2235,#0f1724)",
    ribbon: null,
    tags: ["Firewall","IDS/IPS","VPN","Zero Trust","Wireshark"],
    isNew: false,
    modules: [
      { title: "Network Security Basics", lessons: ["OSI Model Review","TCP/IP Deep Dive","Common Network Threats","Defense in Depth"], free: [0,1] },
      { title: "Firewalls & Perimeter Security", lessons: ["Firewall Types & Architectures","Palo Alto Firewall Config","ACL Design","DMZ Architecture"], free: [0] },
      { title: "Intrusion Detection & Prevention", lessons: ["IDS vs IPS","Snort Configuration","Suricata Setup","Alert Tuning & Tuning"], free: [] },
      { title: "VPNs & Secure Tunneling", lessons: ["IPSec Protocol Suite","OpenVPN Setup","WireGuard","SSL/TLS VPN"], free: [] },
      { title: "Zero Trust Architecture", lessons: ["Zero Trust Principles","Identity-Centric Security","Micro-Segmentation","BeyondCorp Model"], free: [] }
    ],
    includes: ["35 hours of video","Lab environment access","Wireshark packet captures","Certificate of completion","21-day borrow window","Q&A with instructor"]
  },
  {
    id: 4,
    title: "Digital Forensics & Incident Response",
    description: "Learn how to investigate cyberattacks, preserve digital evidence, analyze malware, and respond to security incidents like a pro.",
    instructor: "Dr. Priya Nair",
    instructorRole: "DFIR Specialist, CEH",
    level: "Advanced",
    category: "DFIR",
    duration: "38 hours",
    lessons: 80,
    students: 6200,
    rating: 4.9,
    reviews: 1800,
    price: 34.99,
    lendDays: 30,
    available: 3,
    totalSeats: 5,
    emoji: "🔬",
    bgColor: "linear-gradient(135deg,#1a2235,#0f1724)",
    ribbon: "new",
    tags: ["Autopsy","FTK","Volatility","Malware Analysis","SIEM"],
    isNew: true,
    modules: [
      { title: "DFIR Fundamentals", lessons: ["Incident Response Lifecycle","Legal & Chain of Custody","First Responder Toolkit","Volatile Data Collection"], free: [0,1] },
      { title: "Disk & File System Forensics", lessons: ["Disk Imaging with dd/FTK","File System Analysis","Deleted File Recovery","Timeline Analysis"], free: [0] },
      { title: "Memory Forensics", lessons: ["Memory Acquisition","Volatility Framework","Process & DLL Analysis","Malware in Memory"], free: [] },
      { title: "Malware Analysis", lessons: ["Static Analysis Techniques","Dynamic Analysis in Sandbox","Reverse Engineering Basics","Yara Rules"], free: [] },
      { title: "Log Analysis & SIEM", lessons: ["Windows Event Logs","Linux Syslog","Splunk for DFIR","ELK Stack Basics"], free: [] }
    ],
    includes: ["38 hours of video","Virtual forensics lab","Real malware samples (sandboxed)","Report templates","Certificate of completion","30-day borrow window"]
  },
  {
    id: 5,
    title: "Web Application Security (OWASP)",
    description: "In-depth coverage of the OWASP Top 10 vulnerabilities with hands-on exploitation and remediation in a dedicated lab environment.",
    instructor: "Liam O'Brien",
    instructorRole: "AppSec Engineer, Bug Bounty Hunter",
    level: "Intermediate",
    category: "Application Security",
    duration: "30 hours",
    lessons: 62,
    students: 15300,
    rating: 4.8,
    reviews: 4100,
    price: 19.99,
    lendDays: 21,
    available: 12,
    totalSeats: 15,
    emoji: "🌐",
    bgColor: "linear-gradient(135deg,#1a2235,#0f1724)",
    ribbon: null,
    tags: ["OWASP","SQL Injection","XSS","SSRF","Burp Suite"],
    isNew: false,
    modules: [
      { title: "Web Security Fundamentals", lessons: ["HTTP Protocol Deep Dive","Same-Origin Policy","CORS","Cookie Security"], free: [0,1] },
      { title: "Injection Attacks", lessons: ["SQL Injection","NoSQL Injection","Command Injection","LDAP Injection"], free: [0] },
      { title: "Authentication & Session Management", lessons: ["Broken Authentication","JWT Attacks","Session Hijacking","OAuth Flaws"], free: [] },
      { title: "Client-Side Attacks", lessons: ["Reflected XSS","Stored XSS","DOM XSS","CSRF Attacks","Clickjacking"], free: [] },
      { title: "Server-Side Attacks", lessons: ["SSRF","XXE Injection","Insecure Deserialization","IDOR"], free: [] },
      { title: "Security Testing & Remediation", lessons: ["Automated Scanning","Manual Testing Methodology","Secure Coding Practices","Security Code Review"], free: [] }
    ],
    includes: ["30 hours of video","DVWA & custom lab apps","500+ practice challenges","Certificate of completion","21-day borrow window","Bug bounty tips"]
  },
  {
    id: 6,
    title: "Cloud Security: AWS & Azure",
    description: "Protect cloud infrastructure on AWS and Azure. Master IAM, security groups, encryption, monitoring, and cloud-native security tools.",
    instructor: "Mei Zhang",
    instructorRole: "Cloud Security Architect, CCSP",
    level: "Intermediate",
    category: "Cloud Security",
    duration: "32 hours",
    lessons: 68,
    students: 11200,
    rating: 4.7,
    reviews: 2900,
    price: 29.99,
    lendDays: 30,
    available: 7,
    totalSeats: 10,
    emoji: "☁️",
    bgColor: "linear-gradient(135deg,#1a2235,#0f1724)",
    ribbon: null,
    tags: ["AWS","Azure","IAM","CloudTrail","GuardDuty"],
    isNew: false,
    modules: [
      { title: "Cloud Security Fundamentals", lessons: ["Shared Responsibility Model","Cloud Threat Landscape","Identity & Access Management Basics","Cloud Compliance"], free: [0,1] },
      { title: "AWS Security", lessons: ["AWS IAM Deep Dive","S3 Security","VPC Security Groups & NACLs","CloudTrail & CloudWatch","GuardDuty & Security Hub"], free: [0] },
      { title: "Azure Security", lessons: ["Azure Active Directory","Azure Defender","Network Security Groups","Key Vault","Sentinel SIEM"], free: [] },
      { title: "Container & Kubernetes Security", lessons: ["Docker Security","Kubernetes RBAC","Pod Security Policies","Image Scanning"], free: [] },
      { title: "DevSecOps", lessons: ["Shifting Left Security","CI/CD Pipeline Security","SAST & DAST Tools","Infrastructure as Code Security"], free: [] }
    ],
    includes: ["32 hours of video","AWS & Azure sandbox accounts","Terraform security templates","Certificate of completion","30-day borrow window","Job interview prep"]
  },
  {
    id: 7,
    title: "Malware Analysis & Reverse Engineering",
    description: "Understand how malware works by analyzing real-world samples. Learn static and dynamic analysis, disassembly, and writing YARA rules.",
    instructor: "Viktor Sokolov",
    instructorRole: "Malware Researcher, GREM Certified",
    level: "Advanced",
    category: "Malware Analysis",
    duration: "44 hours",
    lessons: 92,
    students: 5400,
    rating: 4.9,
    reviews: 1500,
    price: 39.99,
    lendDays: 30,
    available: 2,
    totalSeats: 4,
    emoji: "🦠",
    bgColor: "linear-gradient(135deg,#1a2235,#0f1724)",
    ribbon: "new",
    tags: ["IDA Pro","Ghidra","YARA","Sandbox","Reverse Engineering"],
    isNew: true,
    modules: [
      { title: "Setting Up the Lab", lessons: ["Isolated VM Setup","Tools Overview","Safe Malware Sourcing","Snapshot Strategy"], free: [0,1] },
      { title: "Static Analysis", lessons: ["File Type Identification","Strings & Metadata","PE Header Analysis","Disassembly with Ghidra"], free: [0] },
      { title: "Dynamic Analysis", lessons: ["Behavior Monitoring","Network Traffic Analysis","API Call Monitoring","Sandbox Environments"], free: [] },
      { title: "Reverse Engineering", lessons: ["x86 Assembly Primer","IDA Pro Workflow","Decompilation with Hex-Rays","Obfuscation Techniques"], free: [] },
      { title: "Threat Intelligence", lessons: ["YARA Rule Writing","IOC Extraction","Malware Families","Threat Actor Attribution"], free: [] }
    ],
    includes: ["44 hours of video","Sandboxed malware lab","Real malware samples","Ghidra & IDA Pro tutorials","Certificate of completion","30-day borrow window"]
  },
  {
    id: 8,
    title: "Cybersecurity for Beginners",
    description: "Your first step into cybersecurity. No prior experience required. Learn core concepts, career paths, and basic security practices.",
    instructor: "Emma Johnson",
    instructorRole: "Cybersecurity Educator",
    level: "Beginner",
    category: "Fundamentals",
    duration: "18 hours",
    lessons: 42,
    students: 45200,
    rating: 4.8,
    reviews: 9800,
    price: 0,
    lendDays: 14,
    available: 50,
    totalSeats: 50,
    emoji: "🔐",
    bgColor: "linear-gradient(135deg,#1a2235,#0f1724)",
    ribbon: null,
    tags: ["Beginner","Fundamentals","Career","Free"],
    isNew: false,
    modules: [
      { title: "What is Cybersecurity?", lessons: ["Introduction to Cybersecurity","CIA Triad","Threat Actors","Career Paths in Cyber"], free: [0,1,2,3] },
      { title: "Basic Security Practices", lessons: ["Password Security","Multi-Factor Authentication","Software Updates","Safe Browsing"], free: [0,1,2,3] },
      { title: "Understanding Threats", lessons: ["Types of Malware","Phishing Attacks","Social Engineering","Ransomware"], free: [0,1] },
      { title: "Securing Your Devices", lessons: ["Antivirus & Endpoint Protection","Encryption Basics","Backup Strategies","Mobile Security"], free: [] },
      { title: "Career & Certifications", lessons: ["Cybersecurity Career Roadmap","Entry-Level Certifications","Building a Home Lab","Resources & Community"], free: [] }
    ],
    includes: ["18 hours of video","Beginner-friendly exercises","Career roadmap guide","Certificate of completion","14-day borrow window","Discord community"]
  },
  {
    id: 9,
    title: "Certified SOC Analyst (CSA) Prep",
    description: "Prepare for the EC-Council Certified SOC Analyst exam. Master SIEM, log analysis, incident triage, and threat hunting in a SOC environment.",
    instructor: "Marcus Williams",
    instructorRole: "SOC Manager, EC-Council Instructor",
    level: "Intermediate",
    category: "SOC / Blue Team",
    duration: "25 hours",
    lessons: 54,
    students: 8700,
    rating: 4.7,
    reviews: 2100,
    price: 24.99,
    lendDays: 21,
    available: 6,
    totalSeats: 8,
    emoji: "🖥️",
    bgColor: "linear-gradient(135deg,#1a2235,#0f1724)",
    ribbon: null,
    tags: ["SOC","SIEM","Threat Hunting","Splunk","Blue Team"],
    isNew: false,
    modules: [
      { title: "SOC Fundamentals", lessons: ["SOC Roles & Tiers","SOC Tools Overview","Alert Workflow","Shift Handover"], free: [0,1] },
      { title: "SIEM Operations", lessons: ["Splunk Fundamentals","ELK Stack","Log Aggregation","Correlation Rules"], free: [0] },
      { title: "Threat Hunting", lessons: ["Proactive Threat Hunting","MITRE ATT&CK Framework","Hypothesis-Based Hunting","Threat Intelligence Feeds"], free: [] },
      { title: "Incident Triage & Response", lessons: ["Alert Triage Process","Escalation Procedures","Containment Strategies","Post-Incident Review"], free: [] }
    ],
    includes: ["25 hours of video","Splunk & ELK labs","Practice exam questions","Certificate of completion","21-day borrow window","Career coaching"]
  }
];

const CATEGORIES = ["All", "Penetration Testing", "Certification", "Network Security", "DFIR", "Application Security", "Cloud Security", "Malware Analysis", "Fundamentals", "SOC / Blue Team"];
const LEVELS = ["All Levels", "Beginner", "Intermediate", "Advanced"];

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let html = '';
  for (let i = 0; i < full; i++) html += '★';
  if (half) html += '½';
  return `<span style="color:var(--color-warning)">${html}</span> <span style="color:var(--color-text-muted);font-size:0.85rem">${rating} (${rating >= 1000 ? (rating/1000).toFixed(1)+'k' : rating})</span>`;
}

function formatStudents(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return n.toString();
}

function availabilityLabel(course) {
  if (course.price === 0) return `<span class="course-available">Unlimited access</span>`;
  if (course.available === 0) return `<span class="course-available none">Waitlist only</span>`;
  if (course.available <= 3) return `<span class="course-available low">Only ${course.available} left!</span>`;
  return `<span class="course-available">${course.available} of ${course.totalSeats} available</span>`;
}

function buildCourseCard(course) {
  const priceHtml = course.price === 0
    ? `<span class="course-price free">FREE</span>`
    : `<span class="course-price">$${course.price}<span style="font-size:0.75rem;color:var(--color-text-muted);font-weight:400"> / ${course.lendDays}d</span></span>`;
  const ribbonHtml = course.ribbon
    ? `<div class="course-ribbon ${course.ribbon === 'new' ? 'new' : 'hot'}">${course.ribbon === 'new' ? 'New' : 'Hot'}</div>`
    : '';
  const levelClass = course.level === 'Beginner' ? 'success' : course.level === 'Advanced' ? 'danger' : 'warning';
  return `
    <div class="course-card" onclick="window.location='course-detail.html?id=${course.id}'">
      ${ribbonHtml}
      <div class="course-card-thumb" style="background:${course.bgColor}">
        ${course.emoji}
      </div>
      <div class="course-card-body">
        <div class="course-card-meta">
          <span class="badge badge-${levelClass}">${course.level}</span>
          <span class="badge badge-primary">${course.category}</span>
        </div>
        <div class="course-card-title">${course.title}</div>
        <div class="course-card-desc">${course.description}</div>
        <div class="course-card-stats">
          <span>⏱ ${course.duration}</span>
          <span>📚 ${course.lessons} lessons</span>
          <span>👥 ${formatStudents(course.students)}</span>
        </div>
        <div style="margin-bottom:12px;font-size:0.82rem">
          <span style="color:var(--color-warning)">★★★★★</span>
          <span style="color:var(--color-text-muted)"> ${course.rating} (${course.reviews >= 1000 ? (course.reviews/1000).toFixed(1)+'k' : course.reviews})</span>
        </div>
        <div class="course-card-footer">
          ${priceHtml}
          ${availabilityLabel(course)}
        </div>
      </div>
    </div>`;
}

function filterCourses({ search = '', category = 'All', level = 'All Levels', sortBy = 'popular' } = {}) {
  let results = [...COURSES];
  if (search) {
    const q = search.toLowerCase();
    results = results.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.tags.some(t => t.toLowerCase().includes(q)) ||
      c.instructor.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
    );
  }
  if (category !== 'All') results = results.filter(c => c.category === category);
  if (level !== 'All Levels') results = results.filter(c => c.level === level);
  switch (sortBy) {
    case 'newest': results.sort((a,b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
    case 'rating': results.sort((a,b) => b.rating - a.rating); break;
    case 'price-asc': results.sort((a,b) => a.price - b.price); break;
    case 'price-desc': results.sort((a,b) => b.price - a.price); break;
    default: results.sort((a,b) => b.students - a.students); break;
  }
  return results;
}

function getCourseById(id) {
  return COURSES.find(c => c.id === parseInt(id, 10)) || null;
}
