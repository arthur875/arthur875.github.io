document.addEventListener('DOMContentLoaded', () => {
    const date = new Date(); 
    const dateElement = document.getElementById('date');
    if (dateElement) { // If element with ID 'date' exists
        dateElement.innerHTML = date.getHours() + ":" + date.getMinutes();
    } else { // If element with ID 'date' does not exist
        console.error("Element with ID 'date' not found.");
    }

    const greeting_message = document.getElementById('greeting_message');
    
    if (greeting_message) {
        if (date.getHours() < 12) {
            greeting_message.innerHTML = "Buon Mattino!";
        } else if (date.getHours() < 18) {
            greeting_message.innerHTML = "Buon Pomeriggio!";
        } else {
            greeting_message.innerHTML = "Buona Sera!";
        }
    }
});