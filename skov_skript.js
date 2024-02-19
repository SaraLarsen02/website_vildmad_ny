//https://rojxzeelsavwyelokrlk.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvanh6ZWVsc2F2d3llbG9rcmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5OTE3NzcsImV4cCI6MjAyMzU2Nzc3N30.ztX5wiBR7BQNfuQgA4MXfmbpFFtAu0T4yPQ6v3UNE28

//fetch("https://rojxzeelsavwyelokrlk.supabase.co/rest/v1/vild_mad_data?season=eq.Summer", {

fetch("https://rojxzeelsavwyelokrlk.supabase.co/rest/v1/vild_mad_data", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvanh6ZWVsc2F2d3llbG9rcmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5OTE3NzcsImV4cCI6MjAyMzU2Nzc3N30.ztX5wiBR7BQNfuQgA4MXfmbpFFtAu0T4yPQ6v3UNE28",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
  items.forEach(showItem);
}

function showItem(item) {
  const forestTemplate = document.querySelector("#forest_list_item_template").content;
  console.log("template");

  const copy = forestTemplate.cloneNode(true);
  copy.querySelector(".forest_list_image").src = item.image;
  copy.querySelector(".item_name").textContent = item.name;
  copy.querySelector(".forest_name").textContent = item.type_forest;

  const parent = document.querySelector(".forest_list");
  parent.appendChild(copy);
  console.log("name");
}
