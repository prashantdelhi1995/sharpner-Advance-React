import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart =(props)=>{
  const expensesOnlyArray =props.chartExpenses.map((monthExpenseData)=>{
    return monthExpenseData.price;
  })
  const maxValue=Math.max(...expensesOnlyArray)
  const ChartData =[
    {expenseMonth:"JAN",expenseValue:0},
    {expenseMonth:"FEB",expenseValue:0},
    {expenseMonth:"MAR",expenseValue:0},
    {expenseMonth:"APR",expenseValue:0},
    {expenseMonth:"MAY",expenseValue:0},
    {expenseMonth:"JUN",expenseValue:0},
    {expenseMonth:"JUL",expenseValue:0},
    {expenseMonth:"AUG",expenseValue:0},
    {expenseMonth:"SEP",expenseValue:0},
    {expenseMonth:"OCT",expenseValue:0},
    {expenseMonth:"NOV",expenseValue:0},
    {expenseMonth:"DEC",expenseValue:0}
  ];
 
  for(let expense of props.chartExpenses){
    ChartData[expense.date.getMonth()].expenseValue +=expense.price;
  }
  return(
    <div className ="chart">
      {ChartData.map((monthData)=>{
      return <ChartBar 
               key ={monthData.expenseMonth}
               label={monthData.expenseMonth}
               value={monthData.expenseValue}
               maxValue={maxValue}/>
      })}
    </div>
  )
}
export default Chart;