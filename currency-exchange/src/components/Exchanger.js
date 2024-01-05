import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import '../App.css';



function Exchanger(selectedValue) {
    const [conversion, setConversion] = useState(0);
    
    // const useApiCall = ({selectedValue}) =>{
    //   console.log(selectedValue);
    //   const freecurrencyapi = new Freecurrencyapi('fca_live_MsKvEUTvWNYdjo5jisGitqAWigCcvzTpw7xoKSNi');

    //     freecurrencyapi.latest({
    //       base_currency: 'USD',
    //       currencies: selectedValue
    //   }).then(response => {
    //       setConversion(response.data);
    //       console.log("response: " + response);
    //       console.log("conversion: " + conversion);
    //   });

        // useEffect(() => {
        //     axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=540dc9c7d041a40b46de7befdfb8207a')
        //       .then(response => {
        //         const extractedConversions = response['rates'].map(item => item.name);
        //         setConversion((extractedConversions[{selectedValue}]));
        //       })
        //       .catch(error => {
        //         console.error('Error fetching data:', error);
        //       });
        //   }, []);

          // console.log("Conversion from USD to " + selectedValue + ": " + conversion) 
    // }
  return (
    <div className='input-box'>
        <label>
        USD
        <input name="input" />
      </label>
      <button 
      onClick={() => {
            const sVNew = selectedValue.selectedValue;
            console.log(typeof selectedValue);
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