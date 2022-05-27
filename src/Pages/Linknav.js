import React from 'react'
import {

  Link
  
} from "react-router-dom";
import Register2 from '../Register2';
import Login from './Login';
const Linknav = () => {
  return (
    <div>

<Link  to="/">
                    Login
                </Link>{"                                                                   "}
                <Link  to="/register2">
                    Cart
                </Link>
      
    </div>
  )
}

export default Linknav;