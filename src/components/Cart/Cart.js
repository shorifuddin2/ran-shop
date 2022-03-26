import React from 'react';

const Cart = () => {
    const Cart = (props) =>{
        const single = props.cart;
        const random=()=>{
            let len = Math.ceil(Math.random()*single.length);
            if(single[len]===undefined){
                len =Math.ceil(Math.random()*single.length);
                console.log(single[0]);
                const alert =single[0];
                alert(alert.name+ ''+"its you selected");
                
            }
            else{
            const alertnews = single[len];
            alert(alertnews.name+ '' +"its you selected");
            console.log(alertnews);
        }
    return (
        <div>
            
        </div>
    );
};

export default Cart;