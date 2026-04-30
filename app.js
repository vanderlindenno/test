const API = "https://vanderlinden.42web.io/api";

document.getElementById("eventForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const res = await fetch(API + "/add_event.php", {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  alert(data.message || "Event ingestuurd en wacht op goedkeuring");

  e.target.reset();
});
