import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import options from "../options.json";
import "../styles/DropdownMenu.css";
import { useState } from "react";
import getSymbolFromCurrency from 'currency-symbol-map'
//import currencyToSymbolMap from 'currency-symbol-map/map'


function DropdownMenu({onSelect}) {
    const [isOpen, setIsOpen] = useState(false);
    
    const changeOpen = () => {
        // console.log(currencyToSymbolMap) uncomment this to see all the currency abbreviations
        setIsOpen(!isOpen);
    }
    const buttonClick = (item) => {
        onSelect(item.abbreviation);
        setIsOpen(!isOpen);
    }
  return (
    <div className="wrapper">
        <div className="dropdown">
            <button className="button" onClick={changeOpen}>Dropdown
            { !isOpen ? (<IoMdArrowDropdown/> ) : (<IoMdArrowDropup/>)}
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {options.map((item,i) => (
                        <div className="li"key={i} >
                        <button onClick={() => buttonClick(item)}> {/* Use a callback function here so that it isnt executed instantly*/ }
                                {item.currency} [ {getSymbolFromCurrency(item.abbreviation)} ]
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default DropdownMenu

