import React, { useEffect, useState } from 'react';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import '../App.css';



function Exchanger({selectedValue, sameOption}) {
    const [conversion, setConversion] = useState(0);
    const [currencyAmount, setCurrencyAmount] = useState(0)
    const [activated, setActivated] = useState(false);
    const [newOption, setNewOption] = useState(sameOption);
    console.log('exchanger sameOption:' + sameOption);

    const saveValue = () => {
      var input = document.getElementById("userInput").value;
      setCurrencyAmount(input);
  } 
  

  const handleConversion = async () => {
    const sVNew = selectedValue;
    const freecurrencyapi = new Freecurrencyapi('fca_live_MsKvEUTvWNYdjo5jisGitqAWigCcvzTpw7xoKSNi');
    
    try{
      const response = await freecurrencyapi.latest({
        base_currency: 'USD',
        currencies: sVNew,
      });
      setConversion(response.data[sVNew]);
      setActivated(true);
      setNewOption(true); {/*Do this after so that the result is only displayed once conversion is properly set */}
    }catch(error){
      console.error('Error assigning conversion ' + error);
    }
  }

  return (
    <div className='input-box'>
        <label>
        <p className='convert-summmary'>USD -&gt; {selectedValue}</p>
        <input type="number" placeholder="0.00" id="userInput" className='userInput'/>
      </label>
      <button 
      onClick={() => {
        saveValue(); handleConversion();}} className='convert-button'
    >Convert</button>
    {newOption && activated && 
      <div className='convertedValue'>
        <h1>{currencyAmount} USD =  {conversion * currencyAmount} </h1> {/* if the user has ever converted something, show  conversion */}
      </div>}
    </div>
  )
    }

export default Exchanger