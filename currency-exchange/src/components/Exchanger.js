import React, { useEffect, useState } from 'react';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import '../App.css';



function Exchanger(selectedValue) {
    const [conversion, setConversion] = useState(0);
    const [currencyAmount, setCurrencyAmount] = useState(0)

    const saveValue = () => {
      var input = document.getElementById("userInput").value;
      setCurrencyAmount(input);
  }

  return (
    <div className='input-box'>
        <label>
        USD
        <input type="number" placeholder="Enter numeric value" id="userInput" />
      </label>
      <button 
      onClick={() => {
        saveValue()
            const sVNew = selectedValue.selectedValue;
          const freecurrencyapi = new Freecurrencyapi('fca_live_MsKvEUTvWNYdjo5jisGitqAWigCcvzTpw7xoKSNi');

            freecurrencyapi.latest({
              base_currency: 'USD',
              currencies: sVNew
          }).then(response => {
              setConversion(response.data);
              console.log("response: " + response);
              console.log("conversion: " + conversion);
          });

          } 
    }
    >Click Me</button>

    </div>
  )
    }

export default Exchanger