# TopsKnow – Cybersecurity Course Lending Platform

A fully responsive, dark-themed web application for browsing, borrowing, and tracking cybersecurity courses.

## 🚀 Features

| Page | Description |
|------|-------------|
| **Home** (`index.html`) | Hero section, animated stats, featured courses, testimonials, and CTA |
| **Courses** (`courses.html`) | Full catalog with live search, category filters, level filters, sort, and free-only toggle |
| **Course Detail** (`course-detail.html`) | Course info, instructor card, curriculum accordion, enroll/borrow button |
| **Login** (`login.html`) | Email/password login with show/hide password, social login simulation, "forgot password" |
| **Register** (`register.html`) | Sign-up form with password strength meter, social sign-up simulation |
| **Dashboard** (`dashboard.html`) | Borrowed courses with progress bars, due dates, stats overview, recommended courses, activity feed |

## 📁 Project Structure

```
topsknow/
├── index.html          # Homepage
├── courses.html        # Course catalog
├── course-detail.html  # Individual course page
├── login.html          # Login page
├── register.html       # Registration page
├── dashboard.html      # User dashboard
├── css/
│   └── styles.css      # All styles (dark cybersecurity theme)
└── js/
    ├── app.js          # Shared utilities: navbar, auth, toast, animations
    └── courses.js      # Course data (9 courses) and filtering logic
```

## 🎨 Design

- **Dark cybersecurity theme** with cyan (`#00d4ff`) primary and purple (`#7c3aed`) accent colours
- Fully **responsive** — mobile, tablet, and desktop
- Animated hero shield, floating badges, counter animations, scroll fade-in

## 🔒 Auth & Data

Authentication and enrollment state are stored in `localStorage` for demo purposes (no backend required). Every page works offline by simply opening the HTML files in a browser.

## ▶️ Running Locally

No build step needed — just open `index.html` in any modern browser:

```bash
# Option A: direct open
open index.html

# Option B: local server
npx serve .
# or
python3 -m http.server 8080
```

## 📚 Courses Available

1. Ethical Hacking & Penetration Testing
2. CompTIA Security+ Complete Prep (Free)
3. Network Security Fundamentals
4. Digital Forensics & Incident Response
5. Web Application Security (OWASP)
6. Cloud Security: AWS & Azure
7. Malware Analysis & Reverse Engineering
8. Cybersecurity for Beginners (Free)
9. Certified SOC Analyst (CSA) Prep
