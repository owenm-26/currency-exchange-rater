import React, { useState } from 'react';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import DropdownMenu from '../components/DropdownMenu.js';

function Exchange() {
    const options = [
        'one', 'two', 'three'
      ];

    const [choice, setChoice] = useState();

    const handleChoice = (event) =>{
        setChoice(event.target.value);
        console.log("choice is " + choice);
    };
  return (
    <div>
        <DropdownMenu/>
        {/* <select>
            <option value="US Dollar">US Dollar</option>
            <option value="Euro">Euro</option>
        </select> */}
        {/* <Dropdown options={options} onChange={handleChoice} value={choice} placeholder="Select an option"/> */}
    </div>
  )
}

export default Exchange



