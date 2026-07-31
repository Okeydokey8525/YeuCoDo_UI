/* custom-homepage.js - A2 Desktop navigation */
document.addEventListener('DOMContentLoaded', function() {
    // Ngăn href="#" nhảy lên đầu trang cho mục cha
    var parentLinks = document.querySelectorAll('.pc-menu .menu-item-has-children > a[href="#"]');
    parentLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
});

// A8 - Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.querySelector('.icon-menu-sticky-header');
    var sidebar = document.querySelector('.ts-floating-sidebar');
    
    if(toggleBtn && sidebar) {
        // Create overlay
        var overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        document.body.appendChild(overlay);
        
        function toggleMenu() {
            sidebar.classList.toggle('is-open');
            overlay.classList.toggle('is-active');
            document.body.classList.toggle('menu-open');
        }
        
        toggleBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
        
        // Escape key to close
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && sidebar.classList.contains('is-open')) {
                toggleMenu();
            }
        });

        // Submenu toggles
        var dropIcons = document.querySelectorAll('.ts-menu-drop-icon');
        dropIcons.forEach(function(icon) {
            icon.addEventListener('click', function(e) {
                e.preventDefault();
                var subMenu = this.nextElementSibling;
                if(subMenu && subMenu.classList.contains('sub-menu')) {
                    subMenu.classList.toggle('is-open');
                    this.classList.toggle('is-active');
                }
            });
        });
    }
});
