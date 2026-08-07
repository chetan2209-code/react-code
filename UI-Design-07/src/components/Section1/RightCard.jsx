import React from 'react'

const RightCard = () => {
  return (
    <div className='h-full overflow-hidden relative w-80 bg-amber-200 rounded-4xl'>
        <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1758876201598-67fd2a5570ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHdvcmtpbmclMjBwcm9jZXNzfGVufDB8fDB8fHww" alt="" />
        <div className='absolute top-0 left-0 h-full w-full bg-amber-400'>
            <h2>1</h2>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati voluptatum ipsum cumque quasi quisquam?</p>
            
            <div>
                <button>Satisfied</button>
                <button><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCard
