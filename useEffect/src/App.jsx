import React, { useEffect } from 'react'
import { useState } from 'react';

const App = () => {

  const [num, setnum] = React.useState(0);
  const [num2, setnum2] = React.useState(10);
  useEffect(function(){
    console.log('loading......');
    
  },[])
  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button onClick={()=>{
          setnum(num + 1)
      }} onDoubleClick={()=>{
        setnum2(num2 + 69)
      }}>here</button>
    </div>
  )
}

export default App
