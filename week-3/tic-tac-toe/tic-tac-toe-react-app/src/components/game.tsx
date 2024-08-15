import { Board } from './board'
import { useState } from 'react';

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares: number[]) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    
    return (
        <>
            <div className="game">
                <div className="game-board">
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
                </div>
            </div>
            <div className="game-info">
                <ol>

                </ol>
            </div>
        </>
    );
}