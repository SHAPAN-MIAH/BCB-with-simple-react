import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        total = total + player.salary;
    }
    

    return (
        <div className="cart-display">
               <h3>Team Summery</h3>
               <h4>Player Added: {cart.length}</h4>
                <div className="playerName">
                    <h5>Player Name:</h5>
                {
                cart.map(player =><li>{player.name}, Salary: ${player.salary}</li>)
            
                }
                </div>
               <h6 className="budget">Budget: ${total}</h6>
        </div>
    );
};

export default Cart;