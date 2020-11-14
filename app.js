const toggleContainer = document.querySelector(".toggle-container");
const toggleCircle = document.querySelector(".inner-circle");

toggleContainer.addEventListener("click", () => {
  toggleContainer.classList.toggle("active");
  console.log("work");
});
