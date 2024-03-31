
import React, { useRef } from 'react'
import { useState } from 'react';
import { validate } from '../utils/validate';

const FormPage = () => {
  const [toggleStateVariable,setToggleStateVariable]=useState(false);
  const emailReference=useRef(null);
  const passwordReference=useRef(null);

  const SubmittingAction =(event)=>{
    const email=emailReference.current.value;
    const password=passwordReference.current.value;
    const message = validate(email,password);
    console.log(email,password,message);
    event.preventDefault();
  }
  
  const toggleFormFunction=(event)=>{
    setToggleStateVariable(!toggleStateVariable);
    event.preventDefault();
  }
  return (
    <div className='w-full  border-green-800  border-dotted flex items-center bg-black bg-opacity-60' >
      <form className="mx-auto w-5/6  border-red-600  h-5/6  my-auto">

        <h1 className='text-white text-4xl pl-2 py-4'>{(!toggleStateVariable?'Log in':'Sign Up')}</h1>
        {toggleStateVariable &&  <div className='my-1'>x
          <input type="text" id="UserName" name="UserName" placeholder='UserName' 
          className="mt-1 block w-full px-3 py-4 border-2 rounded bg-gray-700 bg-opacity-50 border-gray-300  placeho shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-white" />
        </div>}

        <div className='my-4'>
          <input type="text" id="loginId" name="loginId" placeholder='Email' 
          className="mt-1 block w-full px-3 py-4 border-2 rounded bg-gray-700 bg-opacity-50 border-gray-300  placeho shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-white" ref={emailReference} />
        </div>

        <div className='my-4'>
          <input type="password" id="password" name="password" placeholder="password" 
          className="mt-1 block w-full px-3 py-4 border rounded text-white bg-gray-700 bg-opacity-50 border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" ref={passwordReference} />
        </div>

        <button type="submit"  className="w-full flex justify-center py-3 font-md font-mono px-4 border border-transparent rounded shadow-sm text-sm text-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={(event)=>SubmittingAction(event)}>Login</button>

        <button type='button' className='text-white text-center py-4 w-full opacity-80' onClick={(event)=>toggleFormFunction(event)}>New to Netflix ? </button>
        
      </form>
    </div>
  )
}

export default FormPage
    

