import React from 'react';

import LoginLogics from '../redux/auth/loginLogics';


function Login() {
  const { email, setEmail, password, setPassword, visible, handleLogin } = LoginLogics();

    return (
        <div className='container'>

        <form onSubmit={handleLogin}>
          <div >
          <h2 >Login to your account with your email and password to see yourfavorites movies</h2>
          </div>
          <div >
              <label >Email</label>
           
              <input 
                id="email"
                name="email"
                value={email}
                type="email"
                placeholder=""
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div >
              <label htmlFor="password">Password</label>
          
              <input
                id="password"
                name="password"
                value={password}
                type={visible ? "password" : "text"}
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
                required
              />
         
            </div>


            <button  type="submit">
              Login
            </button>
            
         
             Sign up
         
           
            </form>
            </div>
    )
}


export default Login;