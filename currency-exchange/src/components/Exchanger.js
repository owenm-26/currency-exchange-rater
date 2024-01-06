import React, { useEffect, useState } from 'react';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import '../App.css';



function Exchanger(selectedValue) {
    const [conversion, setConversion] = useState(0);
    const [currencyAmount, setCurrencyAmount] = useState(0)
    const [activated, setActivated] = useState(false);

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
        setActivated(true);
          const sVNew = selectedValue.selectedValue;
          const freecurrencyapi = new Freecurrencyapi('fca_live_MsKvEUTvWNYdjo5jisGitqAWigCcvzTpw7xoKSNi');

            freecurrencyapi.latest({
              base_currency: 'USD',
              currencies: sVNew
          }).then(response => {
              setConversion(response.data[sVNew]);
          });
          
          } 
    }
    >Click Me</button>
    {activated && 
      <div className='convertedValue'>
        <h1>result: {conversion * currencyAmount}</h1> {/* if the user has ever converted something, show  conversion */}
      </div>}
    </div>
  )
    }

export default Exchanger