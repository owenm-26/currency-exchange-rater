// import React, { useState } from 'react';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import { useState } from 'react';
import DropdownMenu from '../components/DropdownMenu.js';
import Exchanger from '../components/Exchanger.js';
import '../App.css';

function Exchange() {
  const [selectedValue, setSelectedValue] = useState('USD');
  const [sameOption, setsameOption] = useState(false);

  const handleDropdownClick = (value) => {
    setSelectedValue(value);
    setsameOption(false);
    // console.log('Root sameOption: ' + sameOption)
  };

    
  return (
    <div className='body'>
      <DropdownMenu onSelect={handleDropdownClick} />
      <Exchanger selectedValue={selectedValue} sameOption={sameOption}/>
    </div>
  )
}

export default Exchange



