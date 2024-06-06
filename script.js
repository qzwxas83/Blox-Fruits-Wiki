function scrollToSection(sectionId) {
    var element = document.getElementById(sectionId);
    if (element) {
        var headerHeight = document.querySelector('header').offsetHeight;
        var topMargin = 20;
        var scrollPosition = element.offsetTop - headerHeight - topMargin;
        
        if (window.scrollY !== scrollPosition) {
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    }
}