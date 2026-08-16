import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = React.useState({user: 'Chetan', age:19});

  

  const btnClicked = ()=>{
    const newNum = {...num};
    newNum.user = 'Ishwari'
    setnum(newNum)
  }
  
  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
