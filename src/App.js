import React from 'react';
import Myapp from './component/Myapp';
import Avatar from './avatar.png';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

function App() {
  return (
    <div className='form'>
          <div>
          <img src={"/phone.png"}  className='my-img' />
             <br />
          </div>
          <div>
          <img src={Avatar}  className='avatar' />
              <h1 className='Name'>welcome</h1>
        <form className="body">
         <i className="fa fa-user" />
          <input type="text"   className="input" placeholder="Username"/>
         <br />
         <i className="fa fa-lock" />
          <input type="text"  className="input" placeholder="Password" />
          <br />
        <input type="submit" value="Login"  className="submit"/>
      </form>
          </div>
    </div>
  );
}

export default App;
