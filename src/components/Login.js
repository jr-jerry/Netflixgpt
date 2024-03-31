import React from 'react'
import Header from './Header'
import FormPage from './FormPage'

const Login = () => {
  return (<>

      <Header/>
  
    <div className="absolute">

          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="background-image" className="w-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50 z-0"></div>
    </div>
    <div className='absolute inset-0 m-auto flex  flex-wrap w-2/6 h-5/6  border-purple-600 my-20'>
    <FormPage className=' w-full'/>
    </div>
   

    </>
  )
}

export default Login