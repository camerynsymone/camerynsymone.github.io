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

// Initialize jQuery-UI Accordion
$(function() {
    $("#weather-widget-container").accordion({
        collapsible: true, // Allows all sections to collapse
        heightStyle: "content" // Adjust height to fit the content
    });
});

// Initialize the Weather Widget Script
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
})(document, 'script', 'weatherwidget-io-js');

// Use AJAX to Dynamically Load Navigation Bar
$(document).ready(function () {
    $('#navbar-container').load('navbar.html', function (response, status, xhr) {
        if (status === "success") {
            $(this).css('visibility', 'visible').css('opacity', 1); // Fade in after loading
        } else if (status === "error") {
            console.error("Error loading navbar: " + xhr.status + " " + xhr.statusText);
            $('#navbar-container').html('<p>Failed to load navbar.</p>'); // Fallback content
        }
    });
});
