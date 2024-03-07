

import React, {useContext, useState} from "react";
import { AppContext } from "../context/AppContext";




const Currency =() => {
    // get current glb state
    const {currency ,dispatch} = useContext(AppContext) ;
    
    //state hook update our comp
    const [isOpen ,setIsOpen] = useState(false) ;
    
    // update currency in glob state
    const setCurrencyHandler =(currency) => {
        dispatch ({
            type : "CHG_CURRENCY",
            payload : currency ,
            
        }) ;
        
    };

    const currencyLabel = () => {
        switch (currency ) {
            case "$":
                return "$ Dollar";
            case "£":
                return "£ Pound";
            case "€":
                return "€ Euro";
            case "₹":
                return "₹ Ruppee";
            default:
                return "";
            }
    };
    
    return (
        <div id = "currency_menu" className="dropdown" style={{cursor : "pointer"}}>
            <botton id = "currency-menu-button" className = "btn dropdown-toggle"
            type = "button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "#93e399", color: "#fff" }}
            onClick={()=> setIsOpen(!isOpen)}> 
            Currency {"("}
            {currencyLabel()}
            {")"}   
            </botton>
            <ul className={`custom-menu dropdown-menu ${isOpen ? "show" : ""} `}>
                <li>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => setCurrencyHandler("$")}
                    >
                        $ Dollar
                    </button>
                </li>
                <li>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => setCurrencyHandler("£")}
                    >
                        £ Pound
                    </button>
                </li>
                <li>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => setCurrencyHandler("€")}
                    >
                        € Euro
                    </button>
                </li>
                <li>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => setCurrencyHandler("₹")}
                    >
                        ₹ Ruppee
                    </button>
                </li>
            </ul>
        </div>
  );
};

export default Currency;