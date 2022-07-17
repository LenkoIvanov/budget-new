import React, {useState} from "react";
import { BudgetTool } from "./BudgetTool";

function App() {
  const [total, setTotal] = useState(1500);
  const [expense, setExpense] = useState({
     name: "Expense",
     cost: "0"
   });
  const [allExpenses, setAllExpenses] = useState([]);

  const handleSubmit = event =>{
    event.preventDefault();
    let exp = expense.name;
    let cost = expense.cost;
    alert( "New expense " + exp + " costs " + cost );

    setTotal((prevTotal) => prevTotal - cost); //subtract new cost out of budget; wayback needed

    setAllExpenses((prevAllExpenses) => ([
      expense,
      ...prevAllExpenses
    ]));
  }

  const handleChange = event =>{
     setExpense((prevExpense) => ({
      ...prevExpense, //do not forget the old state!
      [event.target.name]: event.target.value
      }))
    }

  return (
    <div>
      <h1>React Budgeting Tool</h1>
      <BudgetTool value = {total} />
      <form onSubmit = {handleSubmit} >
        <input 
        name = "name" 
        type = "text" 
        placeholder = "Enter the expense.."
        onChange = {handleChange}/> &nbsp;&nbsp;&nbsp;
        <input 
        name = "cost" 
        type = "text" 
        placeholder = "Enter the cost..."
        onChange = {handleChange}/>&nbsp;&nbsp;&nbsp;
        <button>Add new expense</button>
      </form>
      {allExpenses.map(({item, cost}) => {return <h1>{item} costs {cost}$</h1>} )}
    </div>
  )
}

export default App;
