/**
 * Website functionality for Xi Peng's academic profile
 * Performance optimized version
 */

// 使用DOMContentLoaded确保DOM已加载完成
document.addEventListener('DOMContentLoaded', function() {
  // 获取返回顶部按钮
  const backToTopButton = document.querySelector('.back-to-top');
  
  // 获取导航链接
  const navLinks = document.querySelectorAll('.nav-links a');
  
  // 获取所有有ID的部分用于滚动监听
  const sections = document.querySelectorAll('section[id]');
  
  // 主题切换
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const storageKey = 'preferred-theme';
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      themeToggle && (themeToggle.textContent = '☀️');
      const metaThemes = document.querySelectorAll('meta[name="theme-color"]');
      metaThemes.forEach(m => m.setAttribute('content', '#0b0b0c'));
    } else {
      root.removeAttribute('data-theme');
      themeToggle && (themeToggle.textContent = '🌙');
      const metaThemes = document.querySelectorAll('meta[name="theme-color"]');
      metaThemes.forEach(m => m.setAttribute('content', '#ffffff'));
    }
  }

  const savedTheme = localStorage.getItem(storageKey);
  applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

  themeToggle && themeToggle.addEventListener('click', function() {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    localStorage.setItem(storageKey, next);
    applyTheme(next);
  });
  
  // 防抖函数 - 提高滚动事件性能
  function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  
  // 处理滚动事件 - 用于显示/隐藏返回顶部按钮和高亮当前导航
  const handleScroll = debounce(function() {
    // 返回顶部按钮显示逻辑
    if (window.pageYOffset > 300) {
      backToTopButton.style.opacity = '1';
      backToTopButton.style.visibility = 'visible';
    } else {
      backToTopButton.style.opacity = '0';
      backToTopButton.style.visibility = 'hidden';
    }
    
    // 导航高亮逻辑
    let current = '';
    sections.forEach(section => {
      // 获取部分的位置信息
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      
      // 检查当前滚动位置是否在该部分内
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    // 更新导航链接的active状态
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  }, 10);
  
  // 添加滚动事件监听
  window.addEventListener('scroll', handleScroll);
  
  // 初始化调用一次以设置初始状态
  handleScroll();

   // 所有外部链接新窗口打开且安全
   const anchorElements = document.querySelectorAll('a[href^="http"], a[target="_blank"]');
   anchorElements.forEach(a => {
     if (!a.href.includes(window.location.hostname)) {
       a.setAttribute('target', '_blank');
       a.setAttribute('rel', 'noopener noreferrer');
     }
   });
  
  // 清理函数 - 防止内存泄漏
  function cleanup() {
    window.removeEventListener('scroll', handleScroll);
  }
  
  // 如果浏览器支持页面隐藏API，在页面隐藏时清理资源
  if (document.hidden !== undefined) {
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        cleanup();
      } else {
        window.addEventListener('scroll', handleScroll);
      }
    });
  }
}); 