/**
 * TopsKnow – Shared app utilities (nav, auth state, toast)
 */

/* ---- Auth helpers ---- */
const Auth = {
  SESSION_KEY: 'topsknow_user',

  login(user) {
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(user));
  },
  logout() {
    localStorage.removeItem(this.SESSION_KEY);
    window.location.href = 'index.html';
  },
  getUser() {
    try { return JSON.parse(localStorage.getItem(this.SESSION_KEY)); }
    catch (e) { console.error('Failed to parse user session:', e); return null; }
  },
  isLoggedIn() { return !!this.getUser(); }
};

/* ---- Enrollment helpers ---- */
const Enrollment = {
  KEY: 'topsknow_enrollments',

  getAll() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || []; }
    catch (e) { console.error('Failed to parse enrollments:', e); return []; }
  },
  isEnrolled(courseId) {
    return this.getAll().some(e => e.courseId === courseId);
  },
  enroll(course) {
    const list = this.getAll();
    if (this.isEnrolled(course.id)) return false;
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + course.lendDays);
    list.push({
      courseId: course.id,
      title: course.title,
      instructor: course.instructor,
      emoji: course.emoji,
      progress: 0,
      enrolledAt: new Date().toISOString(),
      dueDate: dueDate.toISOString(),
      lendDays: course.lendDays
    });
    localStorage.setItem(this.KEY, JSON.stringify(list));
    return true;
  },
  updateProgress(courseId, progress) {
    const list = this.getAll();
    const item = list.find(e => e.courseId === courseId);
    if (item) {
      item.progress = Math.min(100, Math.max(0, progress));
      localStorage.setItem(this.KEY, JSON.stringify(list));
    }
  }
};

/* ---- Toast notifications ---- */
const Toast = {
  container: null,
  init() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }
  },
  show(message, type = 'info', duration = 3500) {
    this.init();
    const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span><span>${message}</span>`;
    this.container.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }
};

/* ---- Navbar ---- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Hamburger
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) navLinks.classList.remove('open');
    });
  }

  // Auth state
  const navActions = document.querySelector('.nav-actions');
  if (navActions) {
    const user = Auth.getUser();
    if (user) {
      navActions.innerHTML = `
        <div class="nav-user">
          <div class="nav-avatar" title="${user.name}">${user.name.charAt(0).toUpperCase()}</div>
          <a href="dashboard.html" class="btn btn-outline btn-sm">Dashboard</a>
          <button class="btn btn-sm" style="background:rgba(239,68,68,0.1);color:#fca5a5;border:1px solid rgba(239,68,68,0.3)" onclick="Auth.logout()">Logout</button>
        </div>`;
    } else {
      navActions.innerHTML = `
        <a href="login.html"    class="btn btn-outline btn-sm">Login</a>
        <a href="register.html" class="btn btn-primary btn-sm">Sign Up Free</a>`;
    }
  }

  // Active link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === current) a.classList.add('active');
  });
}

/* ---- Counter animation ---- */
function animateCounter(el, target, suffix = '') {
  const start = 0;
  const duration = 1800;
  const step = 16;
  let current = start;
  const increment = target / (duration / step);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString() + suffix;
  }, step);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.counter);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

/* ---- Intersection observer for fade-in animations ---- */
function initAnimations() {
  const els = document.querySelectorAll('.course-card, .feature-card, .testimonial-card, .stat-card, .enrolled-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCounters();
  setTimeout(initAnimations, 100);
});
