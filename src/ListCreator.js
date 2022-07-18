import React from "react";

function increment(i){
    return i = i + 1;
}
export function ListCreator (props){
    let i = 0;
     return(
        <ol>
            {props.arr.map(({name, cost}) => {return <li key = {increment(i)}>{name} costs {cost}$  <button>X</button></li>})}
        </ol>
    );
}