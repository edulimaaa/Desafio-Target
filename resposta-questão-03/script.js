const dadosDiv = document.querySelector("#dados-div");

fetch("dados.json")
  .then((response) => response.json())
  .then((data) => {
    let lowerValue = null;
    let lowestValueDay = null;
    let highestValue = null;
    let highestValueDay = null;

    data.forEach((obj) => {
      if (
        obj.hasOwnProperty("dia") &&
        obj.hasOwnProperty("valor") &&
        obj.valor > 0
      ) {
        const currentValue = obj.valor;
        const currentDay = obj.dia;

        if (lowerValue === null || currentValue < lowerValue) {
          lowerValue = currentValue;
          lowestValueDay = currentDay;
        }
        if (highestValue === null || currentValue > highestValue) {
          highestValue = currentValue;
          highestValueDay = currentDay;
        }
      }
    });

    let sum = 0;
    let counter = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].valor > 0) {
        sum += data[i].valor;
        counter++;
      }
    }

    const average = sum / counter;
    let aboveAverageDays = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].valor > average) {
        aboveAverageDays++;
      }
    }

    dadosDiv.innerHTML = `
    <p>O menor valor de faturamento ocorrido em um dia do mês é dia ${lowestValueDay} de ${lowerValue}.</p>
    <p>O maior valor de faturamento ocorrido em um dia do mês é dia ${highestValueDay} de ${highestValue}.</p>
    <p>O número de dias no mês em que o valor de faturamento diário foi superior à média mensal é ${aboveAverageDays} dias.</p>
    `;
  });
