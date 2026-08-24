// import React from 'react'
import axios from 'axios'

const App = () => {

  // async function getData() {
  //   const get = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(get)
  // }
    // const getData = async ()=> {
    //  const response = await fetch('https://jsonplaceholder.typicode.com/todos/7')
    //  const data = await response.json()
    //  console.log(data)
    // }
    const getData = async ()=> {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/7')
      console.log(data);
      
    }
  return (
    <div>
      <button onClick={getData}>get data</button>
    </div>
  )
}

export default App
