const reverseForm = document.querySelector("#reverse-form");

const textInput = document.querySelector("#text-input");

const textSection = document.querySelector("#text-section");

let textReverse = [];

const createText = (text) => {
  const element = document.createElement("div");

  element.innerHTML = `
  <p>${text}</p>
  `;

  textSection.appendChild(element);
};

const clearText = () => {
  while (textSection.firstChild) {
    textSection.removeChild(textSection.lastChild);
  }
};

reverseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const valueInput = textInput.value;

  if (valueInput) {
    for (let i = 0; i < valueInput.length; i++) {
      textReverse.unshift(valueInput[i]);
    }
    clearText();
    createText(textReverse.join(""));
    textReverse = [];
  }
});
