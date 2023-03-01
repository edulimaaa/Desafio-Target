const mainElement = document.querySelector("#text-main");

const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;
const total = sp + rj + mg + es + outros;

const createPercentage = (total, stateValue) => {
  const calDiv = stateValue / total;

  const result = calDiv * 100;

  return `${result.toFixed(2)} %`;
};

const paragraphElement = document.createElement("div");

paragraphElement.innerHTML = `
<p>SP – R$67.836,43 - ( ${createPercentage(total, sp)} )</p>
<p>RJ – R$36.678,66 - ( ${createPercentage(total, rj)} )</p>
<p>MG – R$29.229,88 - ( ${createPercentage(total, mg)} )</p>
<p>ES – R$27.165,48 - ( ${createPercentage(total, es)} )</p>
<p>Outros – R$19.849,53 - ( ${createPercentage(total, outros)} )</p>
`;

mainElement.appendChild(paragraphElement);
