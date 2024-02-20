// https://rojxzeelsavwyelokrlk.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvanh6ZWVsc2F2d3llbG9rcmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5OTE3NzcsImV4cCI6MjAyMzU2Nzc3N30.ztX5wiBR7BQNfuQgA4MXfmbpFFtAu0T4yPQ6v3UNE28

fetch("https://rojxzeelsavwyelokrlk.supabase.co/rest/v1/vild_mad_data?id=eq.1", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvanh6ZWVsc2F2d3llbG9rcmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5OTE3NzcsImV4cCI6MjAyMzU2Nzc3N30.ztX5wiBR7BQNfuQgA4MXfmbpFFtAu0T4yPQ6v3UNE28",
  },
})
  .then((res) => res.json())
  .then((data) => showData(data));

function showData(product) {
  console.table(product);
  // document.querySelector(".heroimg_raavare").scr = `https://vildmadv2.vps.webdock.io/application/files/8916/2436/4262/Kantarel_ravarekort_app.png`;
  // document.querySelector(".name_raavare").textContent = product.name;
  // document.querySelector(".text_description_raavare").textContent = product.description;
  // document.querySelector(".text_season_raavare").textContent = product.season;
  // document.querySelector(".text_storage_raavare").textContent = product.type;

  // items.forEach()
}

// function () {}

// --------- OPSKRIFTER ---------
// https://rojxzeelsavwyelokrlk.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvanh6ZWVsc2F2d3llbG9rcmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5OTE3NzcsImV4cCI6MjAyMzU2Nzc3N30.ztX5wiBR7BQNfuQgA4MXfmbpFFtAu0T4yPQ6v3UNE28

// fetch("https://rojxzeelsavwyelokrlk.supabase.co/rest/v1/vild_mad_recipes", {
//   method: "GET",
//   headers: {
//     apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvanh6ZWVsc2F2d3llbG9rcmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5OTE3NzcsImV4cCI6MjAyMzU2Nzc3N30.ztX5wiBR7BQNfuQgA4MXfmbpFFtAu0T4yPQ6v3UNE28",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => showData(data));

// function showData(product) {
//   console.table(product);
//   // Looper og kalder ShowProduct
//   products.forEach(ShowProduct);
// }

// function ShowProduct(product) {
//   // Fang template
//   const template = document.querySelector("#recipeTemplate").content;
//   // Lav en kopi
//   const copy = template.cloneNode(true);
//   // Ændre indholdet
//   // copy.querySelector(".image").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
//   // copy.querySelector(".image").alt = `Picture of a ${product.productdisplayname}`;
//   copy.querySelector(".name_recipes").textContent = product.name;
//   // Appende
//   document.querySelector(".recipes_section").appendChild(copy);
// }
