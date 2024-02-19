const skov_knap = document.querySelector(".skov_info");
const text = document.querySelector("#pop_up_text");
const closePopup = document.querySelector("#closePopup");

console.log("tryk knap");

skov_knap.addEventListener("click", function () {
  console.log("knap lytte");
  text.classList.remove("hide");

  text.classList.add("show");
});

closePopup.addEventListener("click", function () {
  console.log("knap lytte");
  text.classList.add("hide");
  text.classList.remove("show");
});
