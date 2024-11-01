import React,{useState} from 'react'
import "./ExpenseItem.css";
import ExpensesDate from "./ExpensesDate";
import Card from "../UI/Card";


const ExpenseItem = (props) => {
  let [title,setTitle] = useState(props.title);
  function buttonClickHandler() {
    setTitle("New Title")
  }

  return (
    <Card className="expense-item">
      <ExpensesDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={buttonClickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

