import React from 'react'

const App = () => {

  const formSubmit =(elem)=>{
    elem.preventDefault()
    console.log("Form submitted")
  }
  
  return (
    <div>
      <form onSubmit={(elem)=>{
        formSubmit(elem)
      }}>
      <input input='text' placeholder='Enter Here' />
      <button>Submit</button>   
      </form>
    </div>
  )
}

export default App
