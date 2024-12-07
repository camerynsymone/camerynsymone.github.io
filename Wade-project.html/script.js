// Highlight navigation links on hover
document.querySelectorAll('.external-nav-a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.backgroundColor = '#FFD700'; // Bright gold background
        link.style.color = '#00274D'; // Dark navy blue text
    });

    link.addEventListener('mouseleave', () => {
        link.style.backgroundColor = 'transparent'; // Reset to no background
        link.style.color = 'white'; // Reset to default white text
    });
});
