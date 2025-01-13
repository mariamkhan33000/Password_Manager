import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 flex flex-col items-center justify-center' >
        <div className="logo font-bold text-2xl " >
           <span className="text-green-500">&lt;</span>
            Pass
            <span className="text-green-500">OP/&gt;</span>
            </div>
        <div className='flex items-center text-white'> 
            <p>Create with </p>
            <img width={24} src="icons/heart.png" alt="" /> VIC<span className='text-green-500'>KY</span>CODER
        </div>
    </div>
  )
}

export default Footer