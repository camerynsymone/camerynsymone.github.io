// Select all <a> element links
document.querySelectorAll('a').forEach(link => {
    // Add hover effect when the mouse hovers over text
    link.addEventListener('mouseenter', () => {
        link.style.backgroundColor = '#FFD700'; // Gold background
        link.style.color = '#004080'; // Deep blue color text
        link.style.textDecoration = 'underline'; // Add underline
    });

    // Remove hover effect when the mouse leaves
    link.addEventListener('mouseleave', () => {
        link.style.backgroundColor = 'transparent'; // Removes background
        link.style.color = ''; // Resets to default text color
        link.style.textDecoration = 'none'; // Removes the underline
    });
});
