// Adiciona interatividade aos cards
document.querySelectorAll('.character-card, .small-card').forEach(card => {
    card.addEventListener('click', function() {
        // Efeito de click
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Efeito de entrada suave
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.character-card, .small-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});