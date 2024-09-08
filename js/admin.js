// Get all the nav links
    const navLinks = document.querySelectorAll('.nav li a');

    // Loop through each link
    navLinks.forEach(link => {
        // Check if the href matches the current URL
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });


//Form js
// Open the modal
function openForm() {
    document.getElementById("addFormModal").style.display = "block";
}

// Close the modal
function closeForm() {
    document.getElementById("addFormModal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("addFormModal")) {
        document.getElementById("addFormModal").style.display = "none";
    }
}



function toggleDropdown() {
    var dropdown = document.getElementById("foodDropdown");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}
