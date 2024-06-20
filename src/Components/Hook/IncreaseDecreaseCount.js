import React, { useState } from 'react'


export default function IncreaseDecreaseCount() {
    const [count, setCount] = useState(0);
  return (
    <>
    <div className='valueHolder'>
    <h3>Initial Click Count: {count}</h3>
    </div>

<button onClick={() => setCount(0)}>Reset Count</button>
<button onClick={() => setCount(count + 1)}>Increase Count</button>
<button onClick={() => setCount(count - 1)}>Decrease Count</button>

    </>
  )
}
