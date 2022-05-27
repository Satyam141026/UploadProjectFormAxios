import React from 'react'
import {

  Link
  
} from "react-router-dom";

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