alert("✅ app.js is geladen");

const API = "https://vanderlinden.42web.io/api";

const form = document.getElementById("eventForm");
if (!form) {
  alert("Formulier niet gevonden (id=eventForm)");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  alert("Opslaan aangeklikt ✅");

  const formData = new FormData(form);

  try {
    const res = await fetch(API + "/add_event.php", {
      method: "POST",
      body: formData
    });

    alert("Response ontvangen: HTTP " + res.status);

    const text = await res.text();
    alert("Server zegt: " + text);

    if (!res.ok) {
      throw new Error("Server error " + res.status);
    }

    form.reset();
  } catch (err) {
    alert("❌ Fout: " + err.message);
    console.error(err);
  }
});
