import React from 'react';
import ReactDOM from 'react-dom';
// this should be the only .scss file to import and linting is disabled for this import
import style from '#scss/index.scss'; // eslint-disable-line
import App from './components/App.jsx';
// import '#react-phone-input-2/dist/style.css';

ReactDOM.render(<App />, document.getElementById('App'));