import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const  [products, setProducts] = useState([])
    const [cart, setCart] =useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

   
    const handleAddToCart = (product) =>{
        console.log(product);
        // cart.push(product);
        const newCart =[...cart, product];
        setCart(newCart);
    }

    const remove = ()=>{
        const newCart =[];
        setCart(newCart);
    }
    

    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                   products.map(product=><Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                   ></Product>)
               }
            </div>
            <div className="card-container">
                <div className='card-items'>
                    <h4>Order Summary</h4>
                    <p>Selected Items: {cart.length}</p>
                    {
                        cart.map(p=> <p>{p.name}</p>)
                    }
                    <button className="btn">Select Items</button>
                    <button className="btn" onClick={()=>remove()}>Remove</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Shop;