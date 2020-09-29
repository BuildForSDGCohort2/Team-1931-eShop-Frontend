import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './App.css';

const myelement = (
  <div className="App">
      <div className="App-Header"></div>

      <div className="Menu">
        <div className="App-Logo"></div>
        <div className="App-Address"></div>
        {/*}  
        <buttongroup className="App-Auth" id="myAppAuth">
          <button className="loginbutton">Log In</button>   
          <button className="signupbutton">Sign up</button>                      
        </buttongroup>
        */}
        <div class="App-Auth" id="myAppAuth"> 
         {/* <a href="#home" class="active">Home</a> */ }       
          <a href="#LogIn">Log In</a>
          <a href="#SignUp">Sign Up</a>
          <a className="toggleColor" href="#Menu" class="icon" onClick="toggleMenu">
            <i class="fa fa-bars"></i>
          </a>
        </div>        

      </div>

      <div className="Content">
        <div className="App-Sidebar">SIDE BAR</div>
        <div className="App-Content">CONTENT</div>
      </div>

      <div className="App-Footer">Footer</div>
  </div>
);

ReactDOM.render(myelement,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
