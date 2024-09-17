import { useEffect, useState } from 'react';
import './header.css'

// import { getUser } from './service/getUser.js';

export function Header (){

 const [userState, setUserState ] = useState ();

// useEffect(()=> {
//   getUser().then((date) => {
//     setUserState(date);
//     console.log(date);
//   });
// },[]);

    return (
        <header className="tittle">
          <div className="lefttittle">My Work</div>
          <ul className="righttittle">
            <li>About</li>
            <li>Works</li>
            <li>News</li>
            <li>Contact</li>
            <li>instagram</li>
            {/* <li>{userState && userState.userName}</li> */}
          </ul>
        </header>
    )
}

export default Header ;


