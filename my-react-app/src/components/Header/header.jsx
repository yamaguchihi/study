import { useEffect, useState } from 'react';

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
        <div className="tittle">
          <header>My Work</header>
          <div className="lefttitle">
            <li>About</li>
            <li>Works</li>
            <li>News</li>
            <li>Contact</li>
            <li>instagram</li>
            {/* <li>{userState && userState.userName}</li> */}
          </div>
        </div>
    )
}

export default Header ;


