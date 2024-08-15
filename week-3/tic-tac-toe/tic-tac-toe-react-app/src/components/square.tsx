

export function Square({...props}) {
    // props = value: string, onSquareClick: function
    return (
        <button className="square" onClick={props.onSquareClick}>
            {props.value}
        </button>
    );
}