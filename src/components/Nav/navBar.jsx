import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import mic from '../../Assets/mic.png';
import setting from '../../Assets/setting.png';
import lessthan from '../../Assets/less-than.png';

function Navigation() {
  return (
    <nav>
      <ul className="navItems">
        <li>
          <Link to="/"><img src={lessthan} alt="less than Icon" className="lessThan" /></Link>
          <Link to="/" className="hometext">Home</Link>
        </li>
        <li>
          <h1 className="pageTitle">Crypto Info</h1>
        </li>
        <li>
          <div className="icons">
            <img src={mic} alt="Mic Icon" />
            <img src={setting} alt="Setting Icon" />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
