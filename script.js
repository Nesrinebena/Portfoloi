// Animation pour les boutons
document.querySelectorAll('.nav-button, .cta-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Effet de fondu au chargement
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});