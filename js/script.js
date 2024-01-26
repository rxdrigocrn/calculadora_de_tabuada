const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicador");
const multiplicationTable = document.querySelector("#multiplication-operations");
const multiplicationTitle = document.querySelector("#multiplication-title span")

const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = "";



  
  for (i = 1; i < multiplicatorNumber + 1; i++) {
    const result = number * i;

    const template = `
        <div class = "row"> 
        <div class = "operation">${number} x ${i} =</div>
        <div class = "result">${result}</div>
        </div>`;



        
    // colocar no html 

    const parser = new DOMParser()
    const htmltemplate = parser.parseFromString(template, "text/html")
    const row = htmltemplate.querySelector(".row")
    multiplicationTable.appendChild(row)


  }

  multiplicationTitle.innerHTML = number 
};

multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;
  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) return;

  createTable(multiplicationNumber, multiplicatorNumber);
});
