/**
 * Function to update the Epoch time in milliseconds.
 * Targeted by 'test-user-time' for automated tests.
 */
function updateEpochTime() {
    const timeDisplay = document.querySelector('[data-testid="test-user-time"]');
    if (timeDisplay) {
        // Requirement: Show current epoch time in milliseconds
        timeDisplay.textContent = Date.now().toString();
    }
}

// Initial render
updateEpochTime();

// Update every 500ms for a "live"
setInterval(updateEpochTime, 500);
