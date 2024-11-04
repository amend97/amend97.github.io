document.addEventListener("DOMContentLoaded", function() {
    const selectedHat = document.getElementById("selected-hat");
    const hats = document.querySelectorAll(".hat");
    let isHatSelected = false;

    // Step 1: Select a Hat
    hats.forEach(hat => {
        hat.addEventListener("click", () => {
            selectedHat.src = hat.src; // Set the selected hat image
            selectedHat.style.display = "block"; // Make it visible
            isHatSelected = true; // Mark that a hat is selected
        });
    });

    // Step 2: Place Hat on Tap
    const catContainer = document.getElementById("cat-container");
    catContainer.addEventListener("click", (event) => {
        if (isHatSelected) {
            const rect = catContainer.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            // Position the hat at the tap location
            selectedHat.style.left = `${x - selectedHat.width / 2}px`;
            selectedHat.style.top = `${y - selectedHat.height / 2}px`;

            isHatSelected = false; // Deselect the hat after placing
        }
    });
});
