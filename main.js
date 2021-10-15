

const ButtonForAdding= document.querySelector(".add-currency-btn");
const addNewCurrency = document.querySelector(".add-currency-list");
const currenciesList = document.querySelector(".currencies");

const firstAppearanceCurrencies = [ "EUR", "USD", "GBP", "HUF", "RON"];
let baseCurrency;
let baseCurrencyAmount;

let currencies = [
    {
        name: "US Dollar",
        abbreviation: "USD",
        symbol: "\u0024",
        flagURL: "https://img.geonames.org/flags/m/us.png",
    },
    {
        name: "Euro",
        abbreviation: "EUR",
        symbol: "\u20AC",
        flagURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1024px-Flag_of_Europe.svg.png",
      },
      {
        name: "Japanese Yen",
        abbreviation: "JPY",
        symbol: "\u00A5",
        flagURL: "https://img.geonames.org/flags/m/jp.png",
      },
      {
        name: "British Pound",
        abbreviation: "GBP",
        symbol: "\u00A3",
        flagURL: "https://img.geonames.org/flags/m/gb.png",
      },
      {
        name: "Australian Dollar",
        abbreviation: "AUD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/m/au.png",
      },
      {
        name: "Canadian Dollar",
        abbreviation: "CAD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/m/ca.png",
      },
      {
        name: "Chinese Yuan Renminbi",
        abbreviation: "CNY",
        symbol: "\u00A5",
        flagURL: "http://www.geonames.org/flags/m/cn.png",
      },
      {
        name: "Swedish Krona",
        abbreviation: "SEK",
        symbol: "\u006B\u0072",
        flagURL: "http://www.geonames.org/flags/m/se.png",
      },
      {
        name: "New Zealand Dollar",
        abbreviation: "NZD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/m/nz.png",
      },
      {
        name: "Mexican Peso",
        abbreviation: "MXN",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/m/mx.png",
      },
      {
        name: "Singapore Dollar",
        abbreviation: "SGD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/m/sg.png",
      },
      {
        name: "Hong Kong Dollar",
        abbreviation: "HKD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/m/hk.png",
      },
      {
        name: "Norwegian Krone",
        abbreviation: "NOK",
        symbol: "\u006B\u0072",
        flagURL: "http://www.geonames.org/flags/m/no.png",
      },
      {
        name: "South Korean Won",
        abbreviation: "KRW",
        symbol: "\u20A9",
        flagURL: "http://www.geonames.org/flags/m/kr.png",
      },
      {
        name: "Turkish Lira",
        abbreviation: "TRY",
        symbol: "\u20BA",
        flagURL: "http://www.geonames.org/flags/m/tr.png",
      },
      {
        name: "Russian Ruble",
        abbreviation: "RUB",
        symbol: "\u20BD",
        flagURL: "http://www.geonames.org/flags/m/ru.png",
      },
      {
        name: "Indian Rupee",
        abbreviation: "INR",
        symbol: "\u20B9",
        flagURL: "http://www.geonames.org/flags/m/in.png",
      },
      {
        name: "Brazilian Real",
        abbreviation: "BRL",
        symbol: "\u0052\u0024",
        flagURL: "http://www.geonames.org/flags/m/br.png",
      },
      {
        name: "South African Rand",
        abbreviation: "ZAR",
        symbol: "\u0052",
        flagURL: "http://www.geonames.org/flags/m/za.png",
      },
      {
        name: "Philippine Peso",
        abbreviation: "PHP",
        symbol: "\u20B1",
        flagURL: "http://www.geonames.org/flags/m/ph.png",
      },
      {
        name: "Czech Koruna",
        abbreviation: "CZK",
        symbol: "\u004B\u010D",
        flagURL: "http://www.geonames.org/flags/m/cz.png",
      },
      {
        name: "Indonesian Rupiah",
        abbreviation: "IDR",
        symbol: "\u0052\u0070",
        flagURL: "http://www.geonames.org/flags/m/id.png",
      },
      {
        name: "Malaysian Ringgit",
        abbreviation: "MYR",
        symbol: "\u0052\u004D",
        flagURL: "http://www.geonames.org/flags/m/my.png",
      },
      {
        name: "Hungarian Forint",
        abbreviation: "HUF",
        symbol: "\u0046\u0074",
        flagURL: "http://www.geonames.org/flags/m/hu.png",
      },
      {
        name: "Icelandic Krona",
        abbreviation: "ISK",
        symbol: "\u006B\u0072",
        flagURL: "http://www.geonames.org/flags/m/is.png",
      },
      {
        name: "Croatian Kuna",
        abbreviation: "HRK",
        symbol: "\u006B\u006E",
        flagURL: "http://www.geonames.org/flags/m/hr.png",
      },
      {
        name: "Bulgarian Lev",
        abbreviation: "BGN",
        symbol: "\u043B\u0432",
        flagURL: "http://www.geonames.org/flags/m/bg.png",
      },
      {
        name: "Romanian Leu",
        abbreviation: "RON",
        symbol: "\u006C\u0065\u0069",
        flagURL: "http://www.geonames.org/flags/m/ro.png",
      },
      {
        name: "Danish Krone",
        abbreviation: "DKK",
        symbol: "\u006B\u0072",
        flagURL: "http://www.geonames.org/flags/m/dk.png",
      },
      {
        name: "Thai Baht",
        abbreviation: "THB",
        symbol: "\u0E3F",
        flagURL: "http://www.geonames.org/flags/m/th.png",
      },
      {
        name: "Polish Zloty",
        abbreviation: "PLN",
        symbol: "\u007A\u0142",
        flagURL: "http://www.geonames.org/flags/m/pl.png",
      },
      {
        name: "Israeli Shekel",
        abbreviation: "ILS",
        symbol: "\u20AA",
        flagURL: "http://www.geonames.org/flags/m/il.png",
      }
];


//Opening the list when we click the add currency button
ButtonForAdding.addEventListener("click", ButtonForAddingClick);

function ButtonForAddingClick(event) {
    ButtonForAdding.classList.toggle("open");
}
//Closing the list when we click outside if it
window.onclick = function(event){
  if(!event.target.matches(".add-currency-btn"))
  ButtonForAdding.classList.remove("open");

}


//Adding the clicked currency to the list
//Also checking if there is already a selected currency 
addNewCurrency.addEventListener("click", addNewCurrencyClick);

function addNewCurrencyClick(event) {
    const clickedListItem = event.target.closest("li");
    if(!clickedListItem.classList.contains("disabled")){
        const newCurrency = currencies.find( c => c.abbreviation===clickedListItem.getAttribute("data-currency"));
        if(newCurrency) newcurrenciesListItem(newCurrency);
    }
}

//Closing button implementation
currenciesList.addEventListener("click", currenciesListClick);

function currenciesListClick(event) {
    if(event.target.classList.contains("close")){
        const parentNode = event.target.parentNode;
        parentNode.remove();
        addNewCurrency.querySelector(`[data-currency= ${parentNode.id}]`).classList.remove("disabled");
        if(parentNode.classList.contains("base-currency")){
            const newBaseCurrencyLI = currenciesList.querySelector(".currency");
            if(newBaseCurrencyLI) {
                setNewBaseCurrency(newBaseCurrencyLI);
                baseCurrencyAmount = Number(newBaseCurrencyLI.querySelector(".input input").value);
            }
        }
    }

}
//Implementing the new base currency
function setNewBaseCurrency(newBaseCurrencyLI) {
    newBaseCurrencyLI.classList.add("base-currency");
    baseCurrency = newBaseCurrencyLI.id;
    const baseCurrencyRate = currencies.find(currency=> currency.abbreviation===baseCurrency).rate;
    currenciesList.querySelectorAll(".currency").forEach(currencyLI => {
        const currencyRate = currencies.find(currency => currency.abbreviation===currencyLI.id).rate;
        const exchangeRate = currencyLI.id===baseCurrency ? 1 : (currencyRate/baseCurrencyRate).toFixed(4);
        currencyLI.querySelector(".base-currency-rate").textContent= `1${baseCurrency} = ${exchangeRate} ${currencyLI.id}`;
    });

}
//Changing the new base currency when we input a new value to another currency
currenciesList.addEventListener("input", currenciesListInputChange);

function currenciesListInputChange(event) {
    const isNewBaseCurrency = event.target.closest("li").id!==baseCurrency;
    if(isNewBaseCurrency) {
        currenciesList.querySelector(`#${baseCurrency}`).classList.remove("base-currency");
        setNewBaseCurrency(event.target.closest("li"));
    }
//changing the input value for the currency after we input a value to our base-currency
    const newBaseCurrencyAmount =isNaN(event.target.value) ? 0 : Number(event.target.value);
    if(baseCurrencyAmount!== newBaseCurrencyAmount || isNewBaseCurrency) {
        baseCurrencyAmount = newBaseCurrencyAmount;
        const baseCurrencyRate = currencies.find(currency=> currency.abbreviation===baseCurrency).rate;
        currenciesList.querySelectorAll(".currency").forEach(currencyLI => {
            if(currencyLI.id !== baseCurrency) {
            const currencyRate = currencies.find(currency => currency.abbreviation===currencyLI.id).rate;
            const exchangeRate = currencyLI.id===baseCurrency ? 1 : (currencyRate/baseCurrencyRate).toFixed(4);
            currencyLI.querySelector(".input input").value=exchangeRate*baseCurrencyAmount!==0 ? (exchangeRate*baseCurrencyAmount).toFixed(4) : "";
        }});
    }
}


//If the input value isn`t a number we display an empty string 
currenciesList.addEventListener("focusout", currenciesListFocusOut);

function currenciesListFocusOut(event){
    const inputValue= event.target.value;
    if(isNaN(inputValue) || Number(inputValue)===0) event.target.value="";
    else event.target.value = Number(inputValue).toFixed(4);
}

//After we press the "enter" keyboard the focusout is triggered
currenciesList.addEventListener("keydown", currenciesListKeyDown)

function currenciesListKeyDown(event) {
    if(event.key==="Enter") event.target.blur();
 }



// Add currency to the list
function populateaddNewCurrency () {
    for(let i=0; i<currencies.length; i++) {
        addNewCurrency.insertAdjacentHTML(
            "beforeend",
             `<li data-currency=${currencies[i].abbreviation}>
                 <img src=${currencies[i].flagURL}  class="flag"><span>${currencies[i].abbreviation} - ${currencies[i].name}</span>
            </li>`
            );
    }
}

// Implementing the Initial Currencies
function populateCurrencciesList() {
    for ( let i=0; i<firstAppearanceCurrencies.length; i++) {
        const currency= currencies.find(c => c.abbreviation===firstAppearanceCurrencies[i]);
        if(currency) newcurrenciesListItem(currency);
    }
}

function newcurrenciesListItem(currency) {
    if(currenciesList.childElementCount===0) {  // Check if the the currency list is empty (0-first list item)
        baseCurrency = currency.abbreviation;
        baseCurrencyAmount = 0;
    }

    // Disable the already selected currencies
    addNewCurrency.querySelector(`[data-currency= ${currency.abbreviation}]`).classList.add("disabled");
    const baseCurrencyRate = currencies.find(c=> c.abbreviation===baseCurrency).rate;
    const exchangeRate = currency.abbreviation===baseCurrency ? 1 : (currency.rate/baseCurrencyRate).toFixed(4);

    const inputValue = baseCurrencyAmount ? (baseCurrencyAmount*exchangeRate).toFixed(4) : "";

    currenciesList.insertAdjacentHTML( 
        "beforeend",
        ` <li class="currency ${currency.abbreviation===baseCurrency ? "base-currency" : ""}" id=${currency.abbreviation} >
        <img src=${currency.flagURL}  class="flag">
        <div class="info">
            <p class="input"><span class="currency-symbol">${currency.symbol}</span><input placeholder="0.0000" value=${inputValue}></p>
            <p class="currency-name">${currency.abbreviation} - ${currency.name}</p>
            <p class="base-currency-rate">1 ${baseCurrency} = ${exchangeRate} ${currency.abbreviation}</p>
        </div>
        <span class="close">&times;</span>
        </li>`
        );
}



//Accesing the data from exchangerateapi.io
let url= "https://api.exchangerate.host/latest";
fetch(url)
    .then( res => res.json())
    .then(data => {
      console.log(data);
     document.querySelector(".date").textContent = data.date;
      data.rates["EUR"] = 1;
      currencies = currencies.filter( currency => data.rates[currency.abbreviation]);
      currencies.forEach(currency => currency.rate = data.rates[currency.abbreviation]); 
      populateaddNewCurrency();

      populateCurrencciesList(); 
    })
    .catch(err => console.log(err)); 







