let priceArray = document.querySelectorAll(".price");

let total = 0;

priceArray.forEach((price) => {
  total += parseFloat(price.innerHTML);
});

document.querySelector("#total").innerHTML = Math.round(total);
