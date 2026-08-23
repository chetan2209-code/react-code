import React from 'react'

const App = () => {
  // localStorage.setItem('user', 'chetan')
  // localStorage.setItem('age', 18)

//  const user = localStorage.getItem('user')

//  const age = localStorage.getItem('age')
//  console.log(user, age);

//  localStorage.removeItem('age')

const user = {
  username: 'chetan',
  age: 18,
  city: 'Pune'
}
 console.log(user)
localStorage.setItem('user',JSON.stringify(user))

  return (
    <div>
      Hello
    </div>
  )
}

export default App
