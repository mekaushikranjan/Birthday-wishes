document.addEventListener("DOMContentLoaded", function() {
    // Check if the script runs by logging a message
    console.log("Script loaded and DOM fully loaded.");

    // Ensure the button exists and event listener is attached
    const button = document.getElementById("clickButton");
    if (button) {
        console.log("Button found and event listener added.");
        button.addEventListener("click", function() { // Temporary alert to confirm click
            window.location.href = "new.html"; // Ensure new.html exists
        });
    } else {
        console.error("Button not found.");
    }
});
