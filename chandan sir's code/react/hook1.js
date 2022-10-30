import React, { useCallback } from 'react';
import React, { useState, useCallback } from 'react'
const Hello1 = () => {
const [count, setCount] = useState(0)
const incrementCounter = useCallback(() => {
setCount(count + 1)
}, [count])
const decrementCounter = useCallback(() => {
setCount(count - 1)
}, [count])
return (
	<div>
	<h3>Count: {count}</h3>
	<button onClick={incrementCounter}>Increase counter</button>
	<br />
	<button onClick={decrementCounter}>Decrease Counter</button>
	</div>
)
}
export default Example2;export default Hook1;