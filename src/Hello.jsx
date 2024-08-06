import React from 'react'
import { useState } from 'react'

function Sayhello() {
    let  [text, setText] = useState('');//creating state variable
    function say() {

        setText(text="Hello")
    }
   
    function clear() {
        setText('')
    }
  return (
    <>
            <div className="container my-5 py-5 border border-5 w-50 bg-light">
                <div className='d-flex justify-content-center'>
                <img src="https://cdn.prod.website-files.com/5daaade3e3e3f04da71daa8e/60c9d40039e3533cb7d9373f_GIFs%20in%20Emails.gif" width={250} height={250} alt="" />
                </div>
                <h2 className='text-center text-success'>{text}</h2>

                <div className='d-flex justify-content-center'>

                    <button className="btn btn-primary mx-2" onClick={say}>Show</button>
                    <button className="btn btn-warning mx-2" onClick={clear}>Hide</button>
                    
                </div>
            </div>
            <hr />
            <hr />
        </>
  )
}

export default Sayhello
