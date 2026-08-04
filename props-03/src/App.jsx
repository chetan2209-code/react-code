import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Chetan Rana' age={19} img="https://images.unsplash.com/photo-1627135345338-a2024b1aea9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95fGVufDB8fDB8fHww" />
      <Card user='Ishwari Rana' age={18} img="https://images.unsplash.com/photo-1729762018388-5c77be44ecb4?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App
