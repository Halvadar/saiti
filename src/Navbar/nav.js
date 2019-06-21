import React from 'react';
import untitled from './untitled.svg';
import './nav.css';

const Nav = function(){
    
    return(
        <nav className="navbar">
            <div className="shvili marcxena">
                <img alt ="surati" src={untitled} 
                width="70px"/>
                <div className="linkebi">მთავარი</div>
            </div>
            <div className="shvili marjvena"> 
                <div className="linkebi">შესვლა</div>
                <div className="linkebi">რეგისტრაცია</div>
                <div></div>
            </div>
        </nav>
    )


}


export default Nav;