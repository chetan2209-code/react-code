import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
const [userData, setUserData] = React.useState([]);

  const getData = async ()=>{
    // console.log('data aa gaya');
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
    setUserData(response.data)
  }
  useEffect(function(){
    getData()
  },[])

    let printUserData = 'No User Available'

    if(userData.length>0){
    printUserData = userData.map(function(elem, idx){

        return <div key={idx}>
          <a href={elem.url} target='_blank'>
            <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
          <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
        </div>
        <h3 className='font-bold text-lg'>{elem.author}</h3>
          </a>
        </div>
      })
    }
    
    
  
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      
       <div className='flex flex-wrap'>
        {printUserData}
       </div>
    </div>
  )
}

export default App
