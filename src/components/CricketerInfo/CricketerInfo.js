import React, { useState, useEffect } from 'react';
import CricketersData from '../../Data/Data.json';
import Cart from '../Cart/Cart';
import Info from '../Info/Info';
import './CricketerInfo.css'


const CricketerInfo = () => {

    const [cricketers, setCricketers] = useState(CricketersData);
    const [cart, setCart] = useState([]);

    const handelAddPlayer = (cricketer) => {
        const newCart = [...cart, cricketer];
        setCart(newCart);
    }

    return (
        <div className="cricketer-container container">
            <div className="info-container">
                {
                  cricketers.map(cricketer => <Info 
                    handelAddPlayer={handelAddPlayer}
                    cricketer={cricketer}></Info>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        
    );
};

export default CricketerInfo;