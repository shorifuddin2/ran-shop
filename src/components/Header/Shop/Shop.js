import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { ImCross } from 'react-icons/im'
import Modal from 'react-modal';
import './Shop.css';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#root');

const Shop = () => {
    const  [products, setProducts] = useState([])
    const [cart, setCart] =useState([]);
    const [rendom, setRendom]=useState([])

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
    
    const random=(cart)=>{
        const randomIndex = Math.floor(Math.random()*cart.length)
        setRendom(cart[randomIndex])
    }

    const [modalIsOpen, setIsOpen] = React.useState(false);
    //Modal open function
    function openModal() {
        setIsOpen(true);
    }
    // Modal close function
    function closeModal() {
        setIsOpen(false);
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
                    <Modal
                                        isOpen={modalIsOpen}
                                        onRequestClose={closeModal}
                                        style={customStyles}
                                        contentLabel="Example Modal">
                                        <ImCross className='cross' onClick={closeModal}></ImCross>
                                        <h1>{random.name}</h1>
                                        {/* <img  src={drawItem.img} alt="" /> */}
                                        </Modal>
                    <button className="btn" onClick={()=>random(cart)}>Select Items</button>
                    <button className="btn" onClick={()=>remove()}>Remove</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Shop;