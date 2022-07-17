import React from "react";

export function Printer (props){
    return(
        <h1>{props.name} costs {props.cost}$</h1> 
        /*
        Added as a change tracker. State DOES change.
        Issue is probably within the allExpenses state.
        
        */
    );
}