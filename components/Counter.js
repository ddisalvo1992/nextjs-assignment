'use client';

import { useState } from 'react';

export default function Counter({ incrementBy, color }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    let newCount = count + incrementBy;
    
    if (newCount > 10) {
      newCount = 0;
    }
    
    setCount(newCount);
  };

  const buttonStyle = {
    backgroundColor: color,
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '10px 0'
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h3>Current Count: {count}</h3>
      <button style={buttonStyle} onClick={handleClick}>
        Increment by +{incrementBy}
      </button>
    </div>
  );
}
