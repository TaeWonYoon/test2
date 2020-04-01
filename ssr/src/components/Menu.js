import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Menu = () => {
const a = {
  color: 'red'
}
      return(
          <div>
          <ul>
           <li>
            <NavLink to="/red" activeStyle={a}>Red</NavLink>
           </li>
           <li>
            <Link to="/blue">Blue</Link>
           </li>
          </ul>
          </div>
      );

}

export default Menu;
