import React from 'react';

const NameEmailNumberPass = props => (
  <div>
    <h2>Complete the form below to find your next remote gig.</h2>
    <p>Already have an account? <a href='/login'>Sign In</a>.</p>
    <input 
      type='text' 
      name='regFirstName' 
      onChange={ event => props.userInput(event) }
      placeholder='first name' 
      required />
    <input 
      type='text' 
      name='regLastName' 
      onChange={ event => props.userInput(event) }
      placeholder='last name' 
      required />
    <input 
      type='email' 
      name='regEmail' 
      onChange={ event => props.userInput(event) }
      placeholder='email' 
      required />
    <input 
      type='tel' 
      name='regPhoneNumber'
      pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
      onChange={ event => props.userInput(event) }
      placeholder='phone number: 555-555-5555'
      required />
    <input 
      type='password' 
      name='regPass' 
      onChange={ event => props.userInput(event) } 
      placeholder='create your password' 
      required />
    <input 
      type='password' 
      name='regPassTwo' 
      onChange={ event => props.userInput(event) } 
      placeholder='confirm your password' 
      required />
  </div>
)

export default NameEmailNumberPass;