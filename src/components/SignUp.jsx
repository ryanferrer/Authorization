import React from 'react';

const SignUp = props => (
  <div className='sign-up'>
    <form>
      <input type='text' placeholder='first name' />
      <input type='text' placeholder='last name' />
      <input type='email' placeholder='email' />
      <input type='tel' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='phonenumber' />
    </form>
  </div>
);

export default SignUp;