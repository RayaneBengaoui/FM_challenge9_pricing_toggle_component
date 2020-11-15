const toggleContainer = document.querySelector(".toggle-container");

const price_1 = document.querySelector(".price_1");
const price_2 = document.querySelector(".price_2");
const price_3 = document.querySelector(".price_3");
const prices = [price_1, price_2, price_3];

toggleContainer.addEventListener("click", () => {
  toggleContainer.classList.toggle("active");

  prices.map((price) => {
    let string = price.innerHTML;
    if (toggleContainer.classList.contains("active")) {
      price.innerHTML = string.slice(0, 3) + "9" + string.slice(3, 6);
    } else {
      price.innerHTML = string.slice(0, 3) + "" + string.slice(4, 7);
    }
  });
});
