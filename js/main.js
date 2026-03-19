/* ==========================================================
   main.js – funcionalidades reutilizadas em todos os posts
   ========================================================== */

/* ---------- 1. Tema escuro / claro ---------- */
(() => {
    const html = document.documentElement;
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    // Carrega preferência salva
    const saved = localStorage.getItem('theme');
    if (saved) html.dataset.theme = saved;

    toggle.addEventListener('click', () => {
        const current = html.dataset.theme === 'dark' ? 'light' : 'dark';
        html.dataset.theme = current;
        localStorage.setItem('theme', current);
        toggle.textContent = current === 'dark' ? '☀️' : '🌙';
    });
})();

/* ---------- 2. Barra de progresso ---------- */
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('readingProgress');
    if (!progressBar) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = (window.scrollY / max) * 100;
    progressBar.style.width = `${percent}%`;
});

/* ---------- 3. TOC (tocbot) ---------- */
if (typeof tocbot !== 'undefined' && document.getElementById('toc')) {
    tocbot.init({
        tocSelector: '#toc',
        contentSelector: '.post-body',
        headingSelector: 'h2, h3',
        collapseDepth: 6,
        orderedList: false,
        scrollSmooth: true,
        scrollContainer: window,
        activeLinkClass: 'active',
        tocItemClass: 'toc-item',
        tocLinkClass: 'toc-link'
    });
}
