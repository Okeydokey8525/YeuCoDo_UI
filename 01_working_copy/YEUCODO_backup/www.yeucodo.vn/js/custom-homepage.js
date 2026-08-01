/* custom-homepage.js - A2 Desktop navigation & A8 Mobile Menu */
document.addEventListener('DOMContentLoaded', function() {
    // Ngn href="#" nhy lAn  u trang cho mc cha
    var parentLinks = document.querySelectorAll('.pc-menu .menu-item-has-children > a[href="#"]');
    parentLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });

    // A8 - Mobile menu toggle
    var toggleBtn = document.querySelector('.icon-menu-sticky-header');
    var sidebar = document.querySelector('.menu-wrapper .ts-floating-sidebar');
    
    if(toggleBtn && sidebar) {
        // Init ARIA
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('aria-label', 'Toggle menu');
        sidebar.setAttribute('aria-hidden', 'true');

        // Create overlay
        var overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        overlay.setAttribute('aria-hidden', 'true');
        document.body.appendChild(overlay);
        
        function toggleMenu() {
            var isOpen = sidebar.classList.contains('is-open');
            if (isOpen) {
                sidebar.classList.remove('is-open');
                overlay.classList.remove('is-active');
                document.body.classList.remove('menu-open');
                toggleBtn.setAttribute('aria-expanded', 'false');
                sidebar.setAttribute('aria-hidden', 'true');
            } else {
                sidebar.classList.add('is-open');
                overlay.classList.add('is-active');
                document.body.classList.add('menu-open');
                toggleBtn.setAttribute('aria-expanded', 'true');
                sidebar.setAttribute('aria-hidden', 'false');
            }
        }
        
        toggleBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
        
        // Escape key to close
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && sidebar.classList.contains('is-open')) {
                toggleMenu();
            }
        });

        // Close menu on navigation link click
        var navLinks = sidebar.querySelectorAll('a:not([href="#"])');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (sidebar.classList.contains('is-open')) {
                    toggleMenu();
                }
            });
        });

        // Submenu toggles
        var dropIcons = document.querySelectorAll('.ts-menu-drop-icon');
        dropIcons.forEach(function(icon) {
            icon.setAttribute('aria-expanded', 'false');
            icon.setAttribute('aria-label', 'Toggle submenu');
            icon.addEventListener('click', function(e) {
                e.preventDefault();
                var subMenu = this.nextElementSibling;
                if(subMenu && subMenu.classList.contains('sub-menu')) {
                    var isSubOpen = subMenu.classList.contains('is-open');
                    if (isSubOpen) {
                        subMenu.classList.remove('is-open');
                        this.classList.remove('is-active');
                        this.setAttribute('aria-expanded', 'false');
                    } else {
                        subMenu.classList.add('is-open');
                        this.classList.add('is-active');
                        this.setAttribute('aria-expanded', 'true');
                    }
                }
            });
        });

        // Reset state on resize to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 1024 && sidebar.classList.contains('is-open')) {
                toggleMenu();
            }
        });
    }
});
