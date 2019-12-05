import React from 'react';

const NameEmailNumberPass = props => (
  <div>
    <input 
      type='text' 
      name='regFirstName' 
      onChange={ event => props.userInput(event) }
      placeholder='first name' />
    <input 
      type='text' 
      name='regLastName' 
      onChange={ event => props.userInput(event) }
      placeholder='last name' />
    <input 
      type='email' 
      name='regEmail' 
      onChange={ event => props.userInput(event) }
      placeholder='email' />
    <input 
      type='password' 
      name='regPass' 
      onChange={ event => props.userInput(event) } 
      placeholder='create your password' />
    <input 
      type='password' 
      name='regPassTwo' 
      onChange={ event => props.userInput(event) } 
      placeholder='confirm your password' />
    <input 
      type='tel' 
      name='phone'
      pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
      onChange={ event => props.userInput(event) }
      placeholder='please enter your phone number'
      required />
  </div>
)

export default NameEmailNumberPass;