import React, { createContext } from 'react'
import { BrowserRouter, Route, Link, Routes} from "react-router-dom";
import Laptop from './Laptop';
import Books from './Books';
import LoginGoogle from './LoginGoogle';
import { useState } from 'react';

export const myBasket = createContext()

function Links() {
    
    const[isLoggedIn, setIsLoggedIn] = useState(false) 

  function pleaseLogOut()
  {
    //Logic to logout from the application, redirected to loginPage
    setIsLoggedIn(false)
    window.location.pathname = "/login"

    
  }  

  return (
    <div>
        <BrowserRouter>
            <Link to="/books">Books</Link>
            <Link to="/laptop">Laptop</Link>
            
             {isLoggedIn ? <button onClick={pleaseLogOut}>Logout</button>:<Link to="/logingoogle">Login</Link>}

            <Routes>
            <Route path ="/laptop" element={<Laptop/>}></Route>
            <Route path ="/books" element={<Books/>}></Route>
            {/* <Route path ="/logingoogle" element={<LoginGoogle/>}></Route> */}
            <Route path ="/logingoogle" element=
            {
                <myBasket.Provider value={{set:setIsLoggedIn}}>
                    <LoginGoogle/>
                </myBasket.Provider>
            }></Route>
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default Links