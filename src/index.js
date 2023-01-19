import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hellomessage from './Hellomessage';
import Parentcomponent from './Parentcomponent';
import Conditionrendering from './Conditionrendering';
import Employee1 from './Employee1'
import Csspracticeinreact from './Csspracticeinreact';
import Csspracticeclasscomponent from './Csspracticeclasscomponent';
import Cssstylesheet from './Cssstylesheet';
import Stylesheet1 from './Stylesheet1';
import Stylesheet2 from './Stylesheet2';
import Bootscomponent from './Bootscomponent';
import Usestatecomponent from './Usestatecomponent';
import Usestatewithobjects from './Usestatewithobjects';
import Usestatewitharray from './Usestatewitharray';
import Classeffect from './Classeffect';
import Functioneffect from './Functioneffect';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hellomessage name='shubham' /> */}
    {/* <Hellomessage name="rahul" /> */}
    {/* <Parentcomponent /> */}
    {/* <Conditionrendering /> */}
    {/* <Employee1 /> */}
    {/* <Csspracticeinreact /> */}
    {/* <Csspracticeclasscomponent /> */}
    {/* <Cssstylesh/>eet check={false} /> */}
    {/* <Stylesheet1 /> */}
    {/* <Stylesheet2 /> */}
    {/* <Bootscomponent /> */}
    {/* <Usestatecomponent /> */}
    {/* <Usestatewithobjects /> */}
    {/* <Usestatewitharray /> */}
    {/* <Classeffect /> */}
    {/* <Functioneffect /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
