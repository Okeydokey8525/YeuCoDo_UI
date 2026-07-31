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
