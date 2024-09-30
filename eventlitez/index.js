// Event array to store the list of events
let eventArray = [];

// Function to handle form submission
document
    .getElementById("eventForm")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const eventName = document.getElementById("eventName").value;
        const eventDate = document.getElementById("eventDate").value;
        const eventTime = document.getElementById("eventTime").value;
        const eventLocation = document.getElementById("eventLocation").value;

        // Create event object and add to array
        const newEvent = {
            name: eventName,
            date: eventDate,
            time: eventTime,
            location: eventLocation,
        };

        eventArray.push(newEvent);

        // Display the updated event list
        displayEvents();

        // Clear the form inputs
        document.getElementById("eventForm").reset();
    });

// Function to display events
function displayEvents() {
    const eventList = document.getElementById("eventList");
    eventList.innerHTML = ""; // Clear existing list

    // Loop through the event array and display each event
    eventArray.forEach(function (event, index) {
        const li = document.createElement("li");
        li.textContent = `${event.name} - ${event.date} at ${event.time}, Location: ${event.location}`;
        eventList.appendChild(li);
    });
}
