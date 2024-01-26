const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

let temp;

const convert = () => {
  if (toFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = `${temp.toFixed(1)} degree Fahrenheit  `;
  } else if (toCelcius.checked) {
    temp = Number(textBox.value);
    temp = temp - (32 * 5) / 9;
    result.textContent = `${temp.toFixed(1)} degree Celcius`;
  } else {
    result.textContent = "select a unit";
  }
};
