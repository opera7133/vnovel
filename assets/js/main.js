function toggleNav() {
    var hamburger = document.getElementById("hamburgerbtn");
    var backdrop = document.getElementById("menu-backdrop");
    var drawer = document.getElementById("menu-drawer");
    var body = document.body;

    if (hamburger && backdrop && drawer && body) {
        hamburger.classList.toggle("is-open");
        body.classList.toggle("overflow-hidden");

        backdrop.classList.toggle("opacity-0");
        backdrop.classList.toggle("pointer-events-none");
        backdrop.classList.toggle("opacity-100");
        backdrop.classList.toggle("pointer-events-auto");

        drawer.classList.toggle("translate-x-full");
    }
}

function updateIcons(isDark) {
    const darkIcon = document.getElementById("dark-icon");
    const lightIcon = document.getElementById("light-icon");
    if (!darkIcon || !lightIcon) return;

    if (isDark) {
        lightIcon.classList.remove("hidden");
        darkIcon.classList.add("hidden");
    } else {
        darkIcon.classList.remove("hidden");
        lightIcon.classList.add("hidden");
    }
}

// Global Site Theme (Light/Dark)
function setGlobalTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        updateIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateIcons(false);
    }
    localStorage.theme = theme;
    updateGiscusTheme();
}

function toggleDarkMode() {
    if (document.documentElement.classList.contains('dark')) {
        setGlobalTheme('light');
    } else {
        setGlobalTheme('dark');
    }
}

// Update Active Button State
function updateReaderSettingButtons(type, value) {
    if (type === 'theme') {
        const themes = ['light', 'sepia', 'dark'];
        themes.forEach(t => {
            const btn = document.getElementById(`reader-theme-btn-${t}`);
            if (btn) {
                if (t === value) {
                    btn.classList.add('ring-2', 'ring-cyan-500', 'ring-offset-2');
                } else {
                    btn.classList.remove('ring-2', 'ring-cyan-500', 'ring-offset-2');
                }
            }
        });
    } else if (type === 'font') {
        const fonts = ['sans', 'serif'];
        fonts.forEach(f => {
            const btn = document.getElementById(`reader-font-btn-${f}`);
            if (btn) {
                if (f === value) {
                    btn.classList.add('bg-cyan-500', 'reader-dark:bg-cyan-500', 'text-white', 'border-cyan-500');
                    btn.classList.remove('bg-white', 'text-gray-700');
                } else {
                    btn.classList.remove('bg-cyan-500', 'reader-dark:bg-cyan-500', 'text-white', 'border-cyan-500');
                    btn.classList.add('bg-white', 'text-gray-700');
                }
            }
        });
    } else if (type === 'fontSize') {
        const sizes = ['small', 'medium', 'large'];
        sizes.forEach(s => {
            const btn = document.getElementById(`reader-size-btn-${s}`);
            if (btn) {
                if (s === value) {
                    btn.classList.add('bg-cyan-500', 'reader-dark:bg-cyan-500', 'text-white', 'border-cyan-500');
                    btn.classList.remove('bg-white', 'text-gray-700');
                } else {
                    btn.classList.remove('bg-cyan-500', 'reader-dark:bg-cyan-500', 'text-white', 'border-cyan-500');
                    btn.classList.add('bg-white', 'text-gray-700');
                }
            }
        });
    }
}

// Reader Theme (Light/Sepia/Dark) - Applied ONLY to post content
function setReaderTheme(theme) {
    const contentBg = document.getElementById('content-bg');
    if (!contentBg) return;

    // Apply to main content wrapper
    contentBg.classList.remove('reader-theme-light', 'reader-theme-sepia', 'reader-theme-dark');
    contentBg.classList.add(`reader-theme-${theme}`);

    // Apply to SNS share wrapper if it exists
    const snsBg = document.getElementById('sns-bg');
    if (snsBg) {
        snsBg.classList.remove('reader-theme-light', 'reader-theme-sepia', 'reader-theme-dark');
        snsBg.classList.add(`reader-theme-${theme}`);
    }

    // Apply to Article Main Content
    const novelMain = document.getElementById('novel-main');
    if (novelMain) {
        novelMain.classList.remove('reader-theme-light', 'reader-theme-sepia', 'reader-theme-dark');
        novelMain.classList.add(`reader-theme-${theme}`);
    }

    // Apply to Prose content for text colors
    const articleContent = document.getElementById('article-content');
    if (articleContent) {
        // Remove old content theme classes
        articleContent.classList.remove('reader-theme-light-content', 'reader-theme-sepia-content', 'reader-theme-dark-content');
        articleContent.classList.add(`reader-theme-${theme}-content`);
    }

    localStorage.readerTheme = theme;
    updateReaderSettingButtons('theme', theme);
}

// Reader Font (Sans/Serif) - Applied ONLY to post content
function setReaderFont(font) {
    const articleContent = document.getElementById('article-content');
    if (!articleContent) return;

    articleContent.classList.remove('reader-font-sans', 'reader-font-serif');
    articleContent.classList.add(`reader-font-${font}`);

    localStorage.readerFont = font;
    updateReaderSettingButtons('font', font);
}

// Reader Font Size (Small/Medium/Large) - Applied ONLY to post content
function setReaderFontSize(size) {
    const articleContent = document.getElementById('article-content');
    if (!articleContent) return;

    articleContent.classList.remove('reader-font-size-small', 'reader-font-size-medium', 'reader-font-size-large');
    articleContent.classList.add(`reader-font-size-${size}`);

    localStorage.readerFontSize = size;
    updateReaderSettingButtons('fontSize', size);
}

function updateGiscusTheme() {
    const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Global Theme
    const savedTheme = localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setGlobalTheme(savedTheme);

    // 2. Initialize Reader Theme
    const savedReaderTheme = localStorage.readerTheme || 'light';
    setReaderTheme(savedReaderTheme);

    // 3. Initialize Reader Font
    const savedReaderFont = localStorage.readerFont || 'sans';
    setReaderFont(savedReaderFont);

    // 4. Initialize Reader Font Size
    const savedReaderFontSize = localStorage.readerFontSize || 'medium';
    setReaderFontSize(savedReaderFontSize);
});

// Scroll to Top Logic
document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.getElementById('scroll-to-top');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
