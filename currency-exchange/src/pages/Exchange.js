// import React, { useState } from 'react';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import { useState } from 'react';
import DropdownMenu from '../components/DropdownMenu.js';
import Exchanger from '../components/Exchanger.js';
import '../App.css';

function Exchange() {
  const [selectedValue, setSelectedValue] = useState('USD');

  const handleDropdownClick = (value) => {
    setSelectedValue(value);
  };
    
  return (
    <div className='body'>
      <DropdownMenu onSelect={handleDropdownClick} />
      <Exchanger selectedValue={selectedValue} />
    </div>
  )
}

export default Exchange



