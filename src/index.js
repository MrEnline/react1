import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//const tagsH = <h2 class='h'>Test</h2>;
const text = "Заголовок";

const elements = (
	<div>
		<h2 className='header'>{text}</h2>
		<input type='text' />
    <label htmlFor=''>Просто метка</label>
		<button/>
		<button>Кнопка</button>
	</div>
);

ReactDOM.render(
  elements,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
