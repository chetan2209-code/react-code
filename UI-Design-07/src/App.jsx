import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Navbar from './components/Section1/Navbar'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1733348137613-90f1af8674fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
      intro: '',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1618491558456-9147fe305c2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8',
      intro: '',
      tag: 'Underarrest'
    },
    {
      img: 'https://images.unsplash.com/photo-1636840438199-9125cd03c3b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXJvbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      tag: 'Avengers'
    }
  ]
  return (
    <div >
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
