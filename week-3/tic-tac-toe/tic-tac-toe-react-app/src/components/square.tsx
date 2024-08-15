import { MouseEventHandler } from "react";


export function Square(props: {value: string, onSquareClick:MouseEventHandler}) {
    // props = value: string, onSquareClick: function
    return (
        <button className="square" onClick={props.onSquareClick}>
            {props.value}
        </button>
    );
}