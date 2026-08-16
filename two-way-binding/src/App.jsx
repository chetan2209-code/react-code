import React from 'react'
import { useState } from 'react';

const App = () => {
  const [Title, setTitle] = React.useState('');
  
  const formSubmit =(elem)=>{
    elem.preventDefault()
    console.log("Form submitted by", Title)
    setTitle('')
  }
  
  return (
    <div>
      <form onSubmit={(elem)=>{
        formSubmit(elem)
      }}>
      <input input='text' placeholder='Enter Here' value={Title} onChange={(elem)=>{
        setTitle(elem.target.value)
      }}/>
      <button>Submit</button>   
      </form>
    </div>
  )
}

export default App
