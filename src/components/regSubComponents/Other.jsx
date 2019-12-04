import React from 'react';

const Other = props => (
  <div>
    <h3>Do you have access to a computer with a camera, microphone, and a reliable internet connection?</h3>
    <select
      name='regAccessToInternet'
      onChange={ event => props.userInput(event) }
    >
      <option value='choose'>choose</option>
      <option value='yes'>Yes</option>
      <option value='no'>No</option>
    </select>
    <h3>How did you hear about us?</h3>
    <textarea 
      name='howDidYouHear'
      onChange={ event => props.userInput(event) }
      placeholder='How did you hear about us?'>
    </textarea>
  </div>
);

export default Other;