import React from 'react'

const Complaint = () => {
  return (
    <div className='w-[70%] h-[70%] bg-slate-300 rounded m-auto p-10'>
        <p className='text-center font-bold text-2xl underline'>File your complaint here:</p>
        <div className='relative'>
          <p className='text-xl font-semibold'>Title:</p>
          <input type="text" placeholder='Enter title here' className='md:[w-500px] w-[300px]'/>
        </div>
        <div>
          <p className='text-xl font-semibold'>Description:</p>
          <input type="text" placeholder='Enter description here' className='md:[w-500px] w-[300px]'/>
        </div>
    </div>
  )
}

export default Complaint