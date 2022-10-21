import React from 'react'

const Register = () => {
  return (
    // <div className='rounded-lg mt-32 h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
    <div className='flex items-center justify-around rounded-lg mt-32 h-32 bg-gradient-to-r from-[#AE67FA]  to-[#F49867]'>
       
        <div className='flex flex-col gap-4'>
            <p className='text-xs'>Request Early Access to Get Started</p>
            <p className='font-bold'>Register today & start exploring the endless possiblities.</p>
        </div>

        <button className='bg-black text-white px-4 py-2 rounded-3xl'> Get Started</button>
    </div>
  )
}

export default Register