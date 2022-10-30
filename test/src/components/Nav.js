//not used just for demo


import React from 'react';
import { Link } from 'react-router-dom'

function Nav_bar() {
   return (
    <>
    <ul>
            <li>
                 <Link to='/'>First</Link>  
            </li>
            <li>
                 <Link to='/second'>Second</Link>  
            </li>
            <li>
                 <Link to='/third'>Third</Link>  
            </li>
            <li>
                 <Link to='/fourth'>Fourth</Link>  
            </li>
            <li>
                 <Link to='/login'>Login</Link>  
            </li>
            <li>
                 <Link to='/register'>Register</Link>  
            </li>
          </ul>
    </>
   )
}

export default Nav_bar