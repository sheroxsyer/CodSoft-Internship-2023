// Add an event listener to the window for resizing
window.addEventListener('resize', () => {
    // Call a function to handle the responsiveness
    handleResponsive();
});

// Initial call to handle responsiveness when the page loads
handleResponsive();

// Function to handle responsiveness
function handleResponsive() {
    // Get the width of the window
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Select the navigation elements
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('nav div.right');

    // Check if the window width is less than a certain value (e.g., 768px)
    if (windowWidth < 768) {
        // If it is, add a class to the navigation elements to style them for small screens
        nav.classList.add('mobile');
        navLinks.style.display = 'none'; // For example, hide the navigation links
    } else {
        // If the window is larger, remove the class and reset styles
        nav.classList.remove('mobile');
        navLinks.style.display = 'flex';
    }
}
