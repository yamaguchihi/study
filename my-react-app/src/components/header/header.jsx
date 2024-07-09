import { useEffect, useState } from 'react';

import './header.css';

import { getUser } from './service/getUser';

export function Header() {
  const [userState, setUserState] = useState();

  // const [count, setCount] = useState(0);

  // const handleCountUp = () => {
  //   setCount(count + 1);
  // };

  useEffect(() => {
    getUser().then((data) => {
      setUserState(data);
    });
  }, []);

  return (
    <header className="header-container">
      <div className="site-title">株式会社BTF</div>
      <ul className="navigation-container">
        <li>About</li>
        <li>Works</li>
        <li>News</li>
        <li>Contact</li>
        <li>instagram</li>
        <li>{userState && userState.userName}</li>
      </ul>
      {/* <button onClick={handleCountUp}>増やす</button> */}
      {/* {count} */}
    </header>
  );
}

export default Header;
