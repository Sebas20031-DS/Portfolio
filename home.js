// Smooth scrolling functionality to the navigation menu links
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-menu a');
  
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetSection = document.querySelector(link.getAttribute('href'));
            scrollToSection(targetSection);
        });
        });
  
    function scrollToSection(section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
        }
  });