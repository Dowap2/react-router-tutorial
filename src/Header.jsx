import React from 'react';
import { Link,Router } from "react-router-dom";
import './Header.css';

export function Header(){
    return (
        <div>
            <div className="logo">
                velopert
            </div>
            <div className="menu">   
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/aladin">알라딘</Link>
                </li>
                <li>
                    <Link to="/lionking">라이언킹</Link>
                </li>
                <li>
                    <Link to="/spiderman">Spider Man</Link>
                </li>
            </div>
        </div>
    );
};

export default Header;