// Dynamic animations matching your classic crisp experience
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.service-box, .portfolio-item, .contact-box');

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.05 });

    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(15px)';
        element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        scrollObserver.observe(element);
    });
});
