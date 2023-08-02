import React, { useState, useMemo } from 'react';

export default function ColorComponent() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  // Calculate squares using useMemo
  const squares = useMemo(() => {
    console.log('Calculating squares...');
    return numbers.map((number) => number * number);
  }, [numbers]);

  const addRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    setNumbers([...numbers, randomNumber]);
  };

  return (
    <div>
      <button onClick={addRandomNumber}>Add Random Number</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>
            Number: {number}, Square: {squares[index]}
          </li>
        ))}
      </ul>
    </div>
  );
}