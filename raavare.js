// https://rojxzeelsavwyelokrlk.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvanh6ZWVsc2F2d3llbG9rcmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5OTE3NzcsImV4cCI6MjAyMzU2Nzc3N30.ztX5wiBR7BQNfuQgA4MXfmbpFFtAu0T4yPQ6v3UNE28

fetch("https://rojxzeelsavwyelokrlk.supabase.co/rest/v1/vild_mad_data?id=eq.1", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvanh6ZWVsc2F2d3llbG9rcmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5OTE3NzcsImV4cCI6MjAyMzU2Nzc3N30.ztX5wiBR7BQNfuQgA4MXfmbpFFtAu0T4yPQ6v3UNE28",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.table(items);
  // document.querySelector(".name_raavare").textContent = items.name;
  // items.forEach()
}

// function () {}
