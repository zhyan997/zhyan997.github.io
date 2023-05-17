import { useState } from 'react';

function Square({ value, onSquareClick }) {
    return (
        <button className = "square" onClick = {onSquareClick}>
            {value}
        </button>
    );
}
export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        if (squares[i]) {
            return;
        }
    }
}