import React from 'react'
import "./mailList.css"

function MailList() {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Save time, save money</h1>
        <span className='mailDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aut optio ipsam dolores fugit natus!</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList