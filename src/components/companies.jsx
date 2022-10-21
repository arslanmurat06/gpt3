import React from 'react'
import Google from '../img/google.png';
import Shopify from '../img/shopify.png';
import Slack from '../img/slack.png';
import Dropbox from '../img/dropbox.png';

const Companies = () => {
  return (
    <div className='w-full flex mt-16 '>
        <div className='flex w-full items-center justify-center gap-10'>
            <img  className="w-20 "  src={Google} alt="Google logo"/>
            <img className="w-20" src={Shopify} alt="Google logo"/>
            <img className="w-20" src={Slack} alt="Google logo"/>
            <img  className="w-20" src={Dropbox} alt="Google logo"/>
        </div>
    </div>
  )
}

export default Companies