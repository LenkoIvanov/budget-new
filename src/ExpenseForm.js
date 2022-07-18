import React from "react";

export function ExpenseForm(props) {
    return(
        <div>
         <form onSubmit = {props.onSubmit} >
            <input 
            name = "name" 
            type = "text" 
            placeholder = "Enter the expense.."
            onChange = {props.onChange}/> &nbsp;&nbsp;&nbsp;
            <input 
            name = "cost" 
            type = "text" 
            placeholder = "Enter the cost..."
            onChange = {props.onChange}/>&nbsp;&nbsp;&nbsp;
            <button>Add new expense</button>
      </form>
        </div>
    );
}