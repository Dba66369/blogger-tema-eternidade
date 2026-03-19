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

/* ---------- 4. Efeito 3D “TILT” (Global) ---------- */
function initTilt() {
    if (window.innerWidth < 1024) return;
    
    // Suporte para Hero (se houver)
    const heroes = document.querySelectorAll('.post-hero h1, .hero h1');
    document.addEventListener('mousemove', e => {
        heroes.forEach(h1 => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            h1.style.transform = `translate3d(${x}px,${y}px,0)`;
        });
    });

    // Cards com classe .tilt-book
    document.querySelectorAll('.tilt-book').forEach(b => {
        b.addEventListener('mousemove', e => {
            const r = b.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            b.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-5px)`;
        });
        b.addEventListener('mouseleave', () => {
            b.style.transform = '';
        });
    });
}
window.addEventListener('load', () => setTimeout(initTilt, 100));
