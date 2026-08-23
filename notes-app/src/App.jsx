import React from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("wait..")
  }

  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex items-start gap-4 w-1/2 flex-col justify-between p-10 '>
       
         <input className='px-5 w-full py-2 rounded outline-none border-2' type="text" 
        placeholder='Enter Notes Heading' />
        
        <textarea className='px-5 w-full h-32 py-2 border-2 outline-none rounded' type='text' placeholder='Write details' >
        </textarea>
        <button className='bg-white text-black px-5 w-full py-2 outline-none rounded border-2 '>Add Notes</button>

       
      </form>
      <div>
        
      </div>
    </div>
  )
}

export default App
