const API = "https://YOURDOMAIN.infinityfreeapp.com/api";

document.getElementById("eventForm").addEventListener("submit", async e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const res = await fetch(API + "/add_event.php", {
    method: "POST",
    credentials: "include",
    body: formData
  });
  if (res.ok) {
    alert("Event toegevoegd");
    loadEvents();
  } else {
    alert("Je moet ingelogd zijn");
  }
});

async function loadEvents() {
  const res = await fetch(API + "/get_events.php");
  const events = await res.json();
  document.getElementById("events").innerHTML = events.map(e =>
    `<div><h3>${e.title}</h3><p>${e.event_date} - ${e.location}</p></div>`
  ).join("");
}

loadEvents();