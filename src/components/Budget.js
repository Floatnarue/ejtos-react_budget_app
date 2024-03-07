
import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {

    // get a global state from Redux
    const { budget , expenses ,currency , dispatch } = useContext(AppContext);
    
    const LimitBudget = 20000 ;

    const totalExpenses = expenses.reduce((total,item) => {
        return (total += item.cost) ;
        
    },0) ;


    const handleBudgetChange = (event) => {
        const enteredValue = Number(event.target.value) ;
        
        if (Number.isNaN(enteredValue))  {
            alert("Please enter a valid number")
            return ;
        } if (!Number.isInteger(enteredValue)) {
            alert("Please enter an integer")
            return ;
            
        } if (enteredValue < totalExpenses)  {
            alert(
                "The value of the budget can't be lower than the expenses value " +
                  currency +
                  totalExpenses
              );
        } else if (enteredValue > LimitBudget) {
            alert("Budget cannot exceed " + LimitBudget);
            return;
        

        }dispatch({
            type: "SET_BUDGET",
            payload : enteredValue,
        });
        
        
        
    };
    return (
        <div
          className="alert alert-secondary"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <label htmlFor="budget"> Budget:</label>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>{currency}</span>
            <input
              required="required"
              type="number"
              id="budget"
              value={budget}
              step="10"
              onChange={handleBudgetChange}
            ></input>
          </div>
        </div>
      );
    };
export default Budget;