/* main.js – Funcionalidades Globais */

// 1️⃣ Theme toggle (dark / light) – persiste em localStorage
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  const current = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', current);
  themeToggle.textContent = current === 'dark' ? '☀️' : '🌙';

  themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });
}

// 2️⃣ Reading progress bar
const progressBar = document.getElementById('readingProgress');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / docHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
  });
}

// 3️⃣ TOC generation (tocbot)
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('toc') && typeof tocbot !== 'undefined') {
    tocbot.init({
      tocSelector: '#toc',
      contentSelector: '.post-body',
      headingSelector: 'h2, h3',
      collapseDepth: 6,
      scrollSmooth: true,
      tocClass: 'toc-list',
      tocItemClass: 'toc-item',
      activeLinkClass: 'active'
    });
  }
});

// 4️⃣ Gemini Chatbot Loader (Helper function)
function loadGeminiChatbot(config) {
    const script = document.createElement('script');
    script.src = "https://storage.googleapis.com/blogger_estudos_assets/gemini-widget.js";
    script.async = true;
    script.onload = function() {
        if (typeof initializeGeminiChatbot === 'function') {
            initializeGeminiChatbot(config);
        }
    };
    document.head.appendChild(script);
}
