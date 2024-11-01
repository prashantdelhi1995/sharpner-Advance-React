import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [heading,setHeading]=useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setHeading(false)
  };
  const onClickHandler=()=>{
    setHeading(true)
  }
  const onCancelHandler=()=>{
    setHeading(false)
  }

  return (
    <div className="new-expense">
      {heading===false &&(<button type="button" onClick={onClickHandler}>Add Expense</button>)} 
      {heading === true &&( <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancelHandler}/>)}
    </div>
  );
};

export default NewExpense;
