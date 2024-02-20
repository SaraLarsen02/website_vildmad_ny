// https://rojxzeelsavwyelokrlk.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvanh6ZWVsc2F2d3llbG9rcmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5OTE3NzcsImV4cCI6MjAyMzU2Nzc3N30.ztX5wiBR7BQNfuQgA4MXfmbpFFtAu0T4yPQ6v3UNE28

// INDSAT
const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("id");
var id = urlParams.get("id");
if (id == undefined) id = 1;

// fetch("https://rojxzeelsavwyelokrlk.supabase.co/rest/v1/vild_mad_data/" + id, {
fetch("https://rojxzeelsavwyelokrlk.supabase.co/rest/v1/vild_mad_data?id=eq." + id, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvanh6ZWVsc2F2d3llbG9rcmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5OTE3NzcsImV4cCI6MjAyMzU2Nzc3N30.ztX5wiBR7BQNfuQgA4MXfmbpFFtAu0T4yPQ6v3UNE28",
  },
})
  .then((res) => res.json())
  .then((data) => showRaavare(data[0]));

function showRaavare(raavare) {
  console.log(raavare);
  // document.querySelector(".img_raavare").src = `https://vildmadv2.vps.webdock.io/application/files/8916/2436/4262/Kantarel_ravarekort_app.png`;
  document.querySelector(".img_raavare").src = raavare.image;
  document.querySelector(".name_raavare").textContent = raavare.name;
  document.querySelector(".text_description_raavare").textContent = raavare.description;
  document.querySelector(".text_season_raavare").textContent = raavare.season;
  document.querySelector(".text_storage_raavare").textContent = raavare.type;
}

// --------- OPSKRIFTER ---------
// https://rojxzeelsavwyelokrlk.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvanh6ZWVsc2F2d3llbG9rcmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5OTE3NzcsImV4cCI6MjAyMzU2Nzc3N30.ztX5wiBR7BQNfuQgA4MXfmbpFFtAu0T4yPQ6v3UNE28

fetch("https://rojxzeelsavwyelokrlk.supabase.co/rest/v1/vild_mad_recipes", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvanh6ZWVsc2F2d3llbG9rcmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5OTE3NzcsImV4cCI6MjAyMzU2Nzc3N30.ztX5wiBR7BQNfuQgA4MXfmbpFFtAu0T4yPQ6v3UNE28",
  },
})
  .then((res) => res.json())
  .then((data) => showRecipies(data));

function showRecipies(recipies) {
  console.table(recipies);
  // Looper og kalder Showrecipies
  recipies.forEach(showRecipie);
}

function showRecipie(recipie) {
  // Fang template
  const template = document.querySelector("#recipeTemplate").content;
  // Lav en kopi
  const copy = template.cloneNode(true);
  // Ændre indholdet
  copy.querySelector(".img_recipes").src = recipie.image;
  copy.querySelector(".img_recipes").alt = `Picture of a ${recipie.name.toLowerCase()}`;
  copy.querySelector(".name_recipes").textContent = recipie.name;
  // Appende
  document.querySelector(".recipes_section").appendChild(copy);
}
