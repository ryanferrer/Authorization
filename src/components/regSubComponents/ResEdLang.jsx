import React from 'react';

const ResEdLang = props => (
  <div>
    <h3>upload resume</h3>
    <input type='file' name='regResume' placeholder='upload resume' />
    <h3>Are you eligible to work in the United States?</h3>
    <select 
      name='USEligible'
      onChange={ event => props.userInput(event) }>
      <option value='choose' selected>choose</option>
      <option value='yes'>Yes</option>
      <option value='no'>No</option>
    </select>
    <h3>What is your highest level of education?</h3>
    <select 
      name='regEd'
      onChange={ event => props.userInput(event) }
      placeholder='select your level of education'>
      <option value='choose'>choose</option>
      <option value='GED'>G.E.D.</option>
      <option value='HSD'>High School Diploma</option>
      <option value='AD'>Associate's Degree</option>
      <option value='BD'>Bachelor's Degree</option>
      <option value="PhD">Ph.D.</option>
    </select>
    <h3>Are you fluent in English?</h3>
    <select
      name='regEngFluent'
      onChange={ event => props.userInput(event) }
    >
      <option value='choose'>choose</option>
      <option value='yes'>Yes</option>
      <option value='no'>No</option>
    </select>
    <h3>If you are fluent in any other languages, list them here.</h3>
    <textarea 
      name='regOtherLang' 
      onChange={ event => props.userInput(event) }
      placeholder='Other languages...'></textarea>
  </div>
);

export default ResEdLang;