const messageForm = document.querySelector("#message-form");

const numberInput = document.querySelector("#number-input");

const messageDiv = document.querySelector("#message-div");

const clearMessage = () => {
  while (messageDiv.firstChild) {
    messageDiv.removeChild(messageDiv.lastChild);
  }
};

const createMessage = (number) => {
  const paragraphElement = document.createElement("p");
  let fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (let i = 2; i < number; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  messageDiv.appendChild(paragraphElement);
  if (fibonacci.includes(number)) {
    paragraphElement.innerHTML = `O número ${number} pertence a sequência Fibonancci.`;
    paragraphElement.classList.add("yes");
  } else {
    paragraphElement.innerHTML = `O número ${number} não pertence a sequência Fibonancci.`;
    paragraphElement.classList.add("no");
  }
};

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const valueInput = parseInt(numberInput.value);

  if (valueInput) {
    clearMessage();
    createMessage(valueInput);
  }
});
