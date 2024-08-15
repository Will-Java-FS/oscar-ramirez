import { useState } from "react"

//this component uses State

export default function Counter() {

    // let value = 0;

    // function increase() {
    //     value++;
    //     console.log(value);
    // }

    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
        console.log(count);
    }

    return (
        <>
            <h3>The value is {count}</h3>
            <button onClick={increase}>Increase!</button>
        </>
    )
}