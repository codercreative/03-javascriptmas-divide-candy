const container = document.getElementById("container");
const calculate = document.getElementById("calculate");
const childrenInput = document.getElementById("children-input");
const candyInput = document.getElementById("candy-input");
const resultElement = document.getElementById("result");
const reset = document.getElementById("reset");

function calcTotalCandies(children, candy) {
  const maxCandies = children * Math.floor(candy / children);
  return maxCandies;
}

calculate.addEventListener("click", function () {
  const childrenValue = parseInt(childrenInput.value);
  const candyValue = parseInt(candyInput.value);
  const total = calcTotalCandies(childrenValue, candyValue);

  resultElement.textContent = `${total} candies can be divided equally between ${childrenValue} children without splitting any candies`;

  reset.style.display = "inline-block";
});

reset.addEventListener("click", function () {
  childrenInput.value = "";
  candyInput.value = "";
  resultElement.textContent = "";
  reset.style.display = "none";
});
