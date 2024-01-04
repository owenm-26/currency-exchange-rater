import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Exchanger({selectedValue}) {
    const [conversion, setConversion] = useState(0);

    const useApiCall = ({selectedValue}) =>{
        useEffect(() => {
            axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=540dc9c7d041a40b46de7befdfb8207a')
              .then(response => {
                const extractedConversions = response.data.map(item => item.name);
                setConversion((extractedConversions[{selectedValue}]));
              })
              .catch(error => {
                console.error('Error fetching data:', error);
              });
          }, []);

          console.log("Conversion from USD to " + selectedValue + ": " + conversion) 
    }
  return (
    <div>
        <label>
        USD
        <input name="input" />
      </label>
      <button onClick={useApiCall({selectedValue})}>Click Me</button>

    </div>
  )
}

export default Exchanger