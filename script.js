$(document).ready(function() {
    // Toggle submenus in the navigation
    $('nav ul li').click(function() {
        $(this).find('ul').slideToggle();
    });

    // Handle navigation click to set the 'active' class
    function handleNavigationClick(event) {
        // Remove the 'active' class from all navigation items
        var navigationItems = document.querySelectorAll('nav a');
        navigationItems.forEach(item => item.classList.remove('active'));

        // Add the 'active' class to the clicked navigation item
        event.target.classList.add('active');
    }

    // Add click event listeners to navigation items
    document.addEventListener('DOMContentLoaded', function () {
        var navigationItems = document.querySelectorAll('nav a');
        navigationItems.forEach(item => item.addEventListener('click', handleNavigationClick));
    });

    // Form validation function
    function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;

        if (name === '' || email === '') {
            alert('Please fill in all fields');
            return false;
        }

        // Add more validation as needed

        return true;
    }

    // Toggle navbar visibility
    $('#menuToggle').click(function() {
        var navbar = document.getElementById("navbar");
        navbar.classList.toggle("show");
    });
});
