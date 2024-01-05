// import React, { useState } from 'react';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import { useState } from 'react';
import DropdownMenu from '../components/DropdownMenu.js';
import Exchanger from '../components/Exchanger.js';

function Exchange() {
  const [selectedValue, setSelectedValue] = useState('USD');

  const handleDropdownClick = (value) => {
    setSelectedValue(value);
  };
    
  return (
    <div>
      <DropdownMenu onSelect={handleDropdownClick} />
      <Exchanger selectedValue={selectedValue} />
        
    </div>
  )
}

export default Exchange



