import { useEffect } from "react"
import React, { useState} from 'react'

export default function UseEffectForTitle() {
    const [count, setCount] = useState(0)
    useEffect(() => {
      alert("Component is Mounted");
  }, []);
    useEffect(() => {
        document.title = `TitleCount: ${count}`
        }, [count])
        return (
            <>
            
            <div>
                <h3>Count displayer:  {count} </h3>
                <button onClick={() => setCount(count + 1)}>Click Here</button>
                </div>

  
    

    </>
  )
}
