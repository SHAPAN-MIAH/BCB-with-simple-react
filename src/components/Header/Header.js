import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <div className="container">
                    <h1>Bangladesh Cricket <span>Board</span></h1>
                    <ul>
                        <a href="/home">Home</a>
                        <a href="/team">Team</a>
                        <a href="/blog">Blog</a>
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;