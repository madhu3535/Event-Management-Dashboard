let events = JSON.parse(localStorage.getItem("events")) || [];


function addEvent() {

  console.log("Button clicked");

  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const capacity = document.getElementById("capacity").value;

  console.log(title, date, capacity);

  const event = {
    id: Date.now(),
    title,
    date,
    capacity: Number(capacity),
    registered: 0
  };

  events.push(event);
  displayEvents();
}


function displayEvents() {
  const container = document.getElementById("events");

  if (!container) {
    console.log("Container not found");
    return;
  }

  container.innerHTML = "";

  events.forEach(event => {
    const div = document.createElement("div");
    div.className = "event-card";

    div.innerHTML = `
      <h3>${event.title}</h3>
      <p>Date: ${event.date}</p>
      <p>Seats Left: ${event.capacity - event.registered}</p>
      <button onclick="register(${event.id})">Register</button>
    `;

    container.appendChild(div);
  });
  localStorage.setItem("events", JSON.stringify(events));
}

// load saved events on refresh
displayEvents();

