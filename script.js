let inputvalue = document.getElementById("input-value");
const errormsg = document.getElementById("errormsg");
const unitC = document.getElementById("unitC");
const unitF = document.getElementById("unitF");
const unitK = document.getElementById("unitK");
const Converter = document.getElementById("converter");

const convertbox = document.querySelector(".convert-box");
const celciusValue = document.getElementById("celcius-value");
const farahneitValue = document.getElementById("farahneit-value");
const kelvinValue = document.getElementById("kelvin-value");

// formulas

// To convert celcius to farahneit
// F=(1.8*c)+32

// To convert farahneit to celcius
// C = (°F − 32) × 5/9

// to convert celcius to kelvin
// K=C+273.15

// The formula to convert Kelvin to Celsius is
//  C = K - 273.15

// Kelvin K to Fahrenheit °F Formula
// °F = K * 9/5 - 459.67

// Fahrenheit °F to Kelvin K Formula
// K = (°F + 459.67) × 5/9

Converter.addEventListener("click", (e) => {
  e.preventDefault();
  
    convertbox.style.display="flex"

  let value = parseFloat(inputvalue.value);

  if (unitC.checked) {
    if (value > -273.15) {
    errormsg.style.display="none"
      // first conditon celcius to farahneit
      let F = 1.8 * value + 32;
      //  secnod condtion celcius  to kelvin
      let K = value + 273.15;

      celciusValue.innerText = `${value.toFixed(2)} °C` ;
      farahneitValue.innerText = `${F.toFixed(2)} °F `;
      kelvinValue.innerText = `${K.toFixed(2)} °K`;
    }
    else{
        errormsg.style.display="block"
        errormsg.innerText="Your value number is higher than 273.15 °C it cant be true please input correct value"
    }
  }

  if (unitF.checked) {
     C = (value - 32) * 5/9

    if (C > -273.15) {

    errormsg.style.display="none"

     
      //  secnod condtion farahneit  to kelvin
      let K =(value-32) * 5/9+273.15;

      celciusValue.innerText = `${C.toFixed(2)} °C` ;
      farahneitValue.innerText = `${value.toFixed(2)} °F `;
      kelvinValue.innerText = `${K.toFixed(2)} °K`;
    }
    else{
        errormsg.style.display="block"
        errormsg.innerText="Your value number is higher than 273.15 °C it cant be true please input correct value"
    }
  }


  if (unitK.checked) {
     C = value-273.15
    if (C > -273.15) {
    errormsg.style.display="none"
      // first kelvin  to farahneit
      let F = (value -273.15) * 9/5 +32;

     celciusValue.innerText = `${C.toFixed(2)} °C` ;
      farahneitValue.innerText = `${F.toFixed(2)} °F `;
      kelvinValue.innerText = `${value.toFixed(2)} °K`;
    }
    else{
        errormsg.style.display="block"
        errormsg.innerText="Your value number is higher than 273.15 °C it cant be true please input correct value"
    }
  }

});
