// Select all <a> element links
document.querySelectorAll('a').forEach(link => {
    // Add hover effect when the mouse hovers over text
    link.addEventListener('mouseenter', () => {
        link.style.color = '#FFCC00'; // Gold text
        link.style.textDecoration = 'underline'; // Add underline
    });

    // Remove hover effect when the mouse leaves
    link.addEventListener('mouseleave', () => {
        link.style.color = ''; // Resets to default text color
        link.style.textDecoration = 'none'; // Removes the underline
    });
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        link.style.backgroundColor = 'orange';
    });
});

$(function() {
    $("a").tooltip();
});
