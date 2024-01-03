import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import options from "../options.json";
import "../styles/DropdownMenu.css";
import { useState } from "react";
import getSymbolFromCurrency from 'currency-symbol-map'
import currencyToSymbolMap from 'currency-symbol-map/map'


function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false)
    
    const changeOpen = () => {
        // console.log(currencyToSymbolMap) uncomment this to see all the currency abbreviations
        setIsOpen(!isOpen);
        
    }
  return (
    <div className="dropdown">
        <button className="button" onClick={changeOpen}>Dropdown
        { !isOpen ? (<IoMdArrowDropdown/> ) : (<IoMdArrowDropup/>)}
        </button>
        {isOpen && (
            <div className="dropdown-menu">
                {options.map((item,i) => (
                    <div className="li"key={i}>
                    <p>{item.currency}[ {getSymbolFromCurrency(item.abbreviation)} ]</p>
                    </div>
                ))}
            </div>
        )}

    </div>
  )
}

export default DropdownMenu

