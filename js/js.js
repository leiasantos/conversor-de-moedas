// COTAÇÃO DAS MOEDAS DO DIA
const USD = 5.77;
const EUR = 6.28 ;
const GBP = 7.49;
const CNY = 0.81;
const ARS = 0.0058;
const CHF = 6.67;
const TL = 0.17;
const JPY = 0.038;
const KRW = 0.0042;

/* FORMULÁRIO*/
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");
const footer = document.querySelector("main footer");
const selector = document.querySelector("footer span");
const result = document.querySelector("footer h1");


   amount.addEventListener("input",() =>{

    /* MANIPULANDO O INPUT AMOUNT*/
const regexCharacters = /\D+/g
    amount.value = amount.value.replace(regexCharacters, "")
})

form.onsubmit = (event) =>{
   event.preventDefault()

   switch(currency.value){
    case "USD":
        convertCurrency(amount.value, USD, "US$");
        break;

    case "EUR":
        convertCurrency(amount.value, EUR, "€");
        break;

    case "GBP":
    convertCurrency(amount.value, GBP, "£");
        break;

    case "CNY":
    convertCurrency(amount.value, CNY , "¥");
       break;

    case "ARS":
    convertCurrency(amount.value, ARS , "$");
      break;
      
    case "CHF":
    convertCurrency(amount.value, CHF , "fr");
      break;

    case "TL":
    convertCurrency(amount.value, TL ," ₺");
      break;

    case "JPY":
    convertCurrency(amount.value, JPY , "¥");
       break;

    case "KRW":
    convertCurrency(amount.value, KRW , " ₩");
       break;
   }
  

   
}

/* FUNÇÃO PARA CONVERTER A MOEDA */

function convertCurrency(amount, price, symbol){
   try{
    
    // exibindo o simbolo da cotação
    selector.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`;

    let total = amount * price;
    console.log(
      'total', total
    )
    total = formatCurrencyBRL(total);

    
    if(amount * price < 1){
      let totalCentavos = Math.round(amount * price * 100);
      result.textContent = `${totalCentavos} Centavos`;
    } else {
      result.textContent = `${total} Reais`;
    }

    

    // exibindo o footer
     footer.classList.add("show-result")

   } catch (error){
  
    // ocultando o footer
    footer.classList.remove("show-result")

    console.log(error);
    alert("Não foi possível converter. Tente novamente mais tarde.");
   }
}

// FORMATANDO O VALOR DA MOEDA EM REAL
function formatCurrencyBRL(value){
   return Number(value).toLocaleString("pt-BR",{ 
    style: "currency",
    currency: "BRL",

   })  
}




console.log();