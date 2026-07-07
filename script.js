// Dynamic interaction file
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card, .portfolio-card');
    
    // Smooth reveal animation setup on scroll
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        revealOnScroll.observe(card);
    });
});
