import React from 'react'

const App = () => {
  function btnClicked(){
    console.log("I miss you")
  }

  function InputChanged(val){
    console.log(val)
  }

  const speed = (elem)=>{
    if(elem>0){
      console.log("hello")
    }else{
      console.log("ulta chala diya")
    }
  }


  return (
    <div>
      <button onClick={btnClicked}>Leave me !</button>
      <button onClick={()=>{
        console.log('btnClicked')
      }}>Please don't leave me</button>


      <input onChange={function(elem){
        InputChanged(elem.target.value);
      }}
      type="text" placeholder='Enter Your Message' />


      <div onMouseMove={(elem)=>{
        console.log(elem)
      }} className='box'></div>

      <div onWheel={(elem)=>{
        speed(elem.deltaY)
        
      }} className="page">
        <div className='page1'>Hii!</div>
        <div className='page2'>Don't contact me</div>
        <div className='page3'>um.....ah..</div>
      </div>

    </div>
  )
}

export default App
