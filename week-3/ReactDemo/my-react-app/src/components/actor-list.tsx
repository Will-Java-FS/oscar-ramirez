import { useState, useRef } from 'react';

export default function ActorList() {

    const [actors, setActors] = useState(
        [
            "Ryan Reynolds",
            "Hugh Jackman"
        ]
    );

    const actorInput = useRef<HTMLInputElement>(null); // holds end user input
    const actorListItems = actors.map((a) => <li key={a}>{a}</li>);

    function addActor() {
        const actor = actorInput.current!.value;
        if (actors.includes(actor)) {
            alert("Actor already exists in the list");
        } else {
            //spread operator (...) is taking our state variable called 'actors'
            //and spread it out, then it adds actor to the end and sets that new value
            // equal to the state variable 'actors'
            setActors([...actors, actor])
        }

        //clears the current input from our input element
        actorInput.current!.value = "";
    }
    return (
        <>
            <h3>Actor List</h3>
            <ul>
                {actorListItems}
            </ul>
            <input ref={actorInput} />
            <button onClick={addActor}>Add Actor</button>
        </>
    )
}