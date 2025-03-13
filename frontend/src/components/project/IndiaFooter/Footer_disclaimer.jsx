import React from 'react'

const data =
{
    tag: `Marketed By - Authorised Channel Partner`,
    text: `This is not the official website of developer property, it belongs to authorised channel
         partners for information purposes only. All rights for logo & images are reserved to the developer.
          Thank you for visiting our website. This disclaimer ("Disclaimer") is applicable to this website and 
          all microsites and websites owned by us. By using or accessing this website you agree with the Disclaimer without any 
        qualification or limitation. || All Rights Reserved CopyRight © 2024`,
    privacy: `Disclaimer and Privacy Policy`
}

const Footer_disclaimer = () => {
    return (
        <div className=' text-gray-500 flex flex-col justify-between items-center overflow-x-hidden px-10 text-center'>
            {/* <h1 className=' text-black text-lg'>{data.tag}</h1> */}
            <p className=' text-sm'>{data.text}</p>
            {/* <h2 className=' text-lg'>{data.privacy}</h2> */}
        </div>
    )
}

export default Footer_disclaimer