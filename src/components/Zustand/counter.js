import React from 'react';
import useStore from './store';

function Counter() {
  const count = useStore((state) => state.count);  // Selector to get the count
  const increment = useStore((state) => state.increment);  // Selector to get the increment action

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;




