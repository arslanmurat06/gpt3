import React from 'react'
import VR from '../img/vr.png';

const Vr = () => {
  return (
    <div className='flex items-center ml-10 '>
        <div className=''>
            <img src={VR} className="" alt="women with wr glasses" />
        </div>

        <div className='flex  flex-col mt-28'>
          <p className='text-[#71E5FF]'>Request Early Access to Get Started</p>
          <p className='font-bold text-transparent w-2/3 text-4xl bg-clip-text bg-gradient-to-r from-[#AE67FA] to-[#F49867] mt-6'>The possibilities are beyond your imagination</p>
          <p className='text-[#81AFDD] mt-6'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p className='text-[#FF8A71] mt-6'>Request Early Access to Get Started</p>
        </div>
    </div>
  )
}

export default Vr