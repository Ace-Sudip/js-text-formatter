const inputText = document.getElementById("inputtext");
const outputText = document.getElementById("outputtext");

console.log(inputText, outputText);

inputText.addEventListener("keyup", getValue);
function getValue() {
  outputText.innerHTML = inputText.value;
}

document.querySelector(".uppercase").onclick = () => {
  return (outputText.innerHTML = outputText.innerHTML.toUpperCase());
};

document.querySelector(".lowercase").onclick = () => {
  return (outputText.innerHTML = outputText.innerHTML.toLowerCase());
};
document.querySelector(".capitalize").onclick = () => {
  return (outputText.innerHTML =
    outputText.innerHTML.charAt(0).toUpperCase() +
    outputText.innerHTML.slice(1).toLowerCase());
};

const boldBtn = document.querySelector(".bolding");

boldBtn.addEventListener("click", () => {
  outputText.style.fontWeight = "bolder";
});

const italicBtn = document.querySelector(".italic");
italicBtn.addEventListener("click", () => {
  outputText.style.fontStyle = "italic";
});

const underLineBtn = document.querySelector(".underlining");
underLineBtn.addEventListener("click", () => {
  outputText.style.textDecoration = "underline";
});
