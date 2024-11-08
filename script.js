function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    const dateString = now.toLocaleDateString(undefined, options);
    const timeString = now.toLocaleTimeString();

    document.getElementById('clock').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();
