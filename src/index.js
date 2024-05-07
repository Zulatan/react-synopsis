import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Counter from './components/localStorage';
import ParentComponent from './components/propDrilling/parentComponent';
import ChildComponent from './components/propDrilling/childComponent';
import GrandChildComponent from './components/propDrilling/GrandChildComponent';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* Local state below */}
    {/* <Counter /> */}

    {/* Prop Drilling below */}
    {/* <ParentComponent /> */}

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
