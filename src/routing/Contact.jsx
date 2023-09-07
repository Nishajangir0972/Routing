import React from 'react'

function Contact() {
  return (
    <div className='contact'>
      <h1>Contact</h1>
<form>
  <input type="text" placeholder='Enter Your Name' /><br />
  <input type="Email" placeholder='Enter Your Email' /><br />
  <textarea name="Enter Your message" id="message" cols="30" rows="10">Enter Your message</textarea>
</form>

    </div>
  )
}

export default Contact