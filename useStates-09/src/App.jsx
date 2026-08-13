import React, { useState } from 'react'

const App = () => {
  
    const [num, setNum] = React.useState(0);
    
    function increaseNum(){
      setNum(num+1)
      // console.log('in')
    }
    function decreaseNum(){
      setNum(num-1)
      // console.log('dn')
    }
    function jumpNum(){
      setNum(num*num)
    }
    return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jumpNum}>multiply by num</button>
    </div>
  )
}

export default App
