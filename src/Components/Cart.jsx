import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context'

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart()

    if (cart.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h2>Your Amazon Cart is empty.</h2>
                <p>Check your Saved for later items below or <Link to="/">continue shopping</Link>.</p>
            </div>
        )
    }

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1>Shopping Cart</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>

                {/* Cart Items List */}
                <div style={{ flex: '3', minWidth: '300px' }}>
                    {cart.map(item => (
                        <div key={item.id} style={{
                            display: 'flex',
                            gap: '20px',
                            borderBottom: '1px solid #ddd',
                            padding: '20px 0',
                            alignItems: 'start'
                        }}>
                            {/* Image */}
                            <Link to={`/product/${item.id}`}>
                                <img src={item.images && item.images[0]} alt={item.title} style={{ width: '150px', height: '150px', objectFit: 'contain' }} />
                            </Link>

                            {/* Details */}
                            <div style={{ flex: 1 }}>
                                <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: '#007185', fontSize: '18px', fontWeight: '500' }}>
                                    {item.title}
                                </Link>
                                <p style={{ fontSize: '12px', color: '#007600' }}>In stock</p>
                                <p style={{ fontSize: '12px', color: '#565959' }}>Eligible for FREE Shipping</p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                                    <select
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, Number(e.target.value) - item.quantity)}
                                        style={{ padding: '5px', borderRadius: '8px', border: '1px solid #ddd', background: '#F0F2F2', boxShadow: '0 2px 5px rgba(15,17,20,0.1)' }}
                                    >
                                        {[...Array(10).keys()].map(x => (
                                            <option key={x + 1} value={x + 1}>Qty: {x + 1}</option>
                                        ))}
                                    </select>
                                    <div style={{ borderLeft: '1px solid #ddd', height: '14px' }}></div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        style={{ background: 'none', border: 'none', color: '#007185', cursor: 'pointer', fontSize: '12px' }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>

                            {/* Price */}
                            <div style={{ fontWeight: '700', fontSize: '18px' }}>
                                ${item.price}
                            </div>
                        </div>
                    ))}

                    <div style={{ textAlign: 'right', fontSize: '18px', marginTop: '20px' }}>
                        Subtotal ({cartCount} items): <span style={{ fontWeight: 'bold' }}>${cartTotal.toFixed(2)}</span>
                    </div>
                </div>

                {/* Checkout Sidebar */}
                <div style={{ flex: '1', minWidth: '250px' }}>
                    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
                        <div style={{ fontSize: '18px', marginBottom: '20px' }}>
                            Subtotal ({cartCount} items): <span style={{ fontWeight: 'bold' }}>${cartTotal.toFixed(2)}</span>
                        </div>
                        <button style={{
                            background: '#FFD814',
                            border: '1px solid #FCD200',
                            borderRadius: '20px',
                            width: '100%',
                            padding: '8px',
                            cursor: 'pointer',
                            boxShadow: '0 2px 5px 0 rgba(213,217,217,.5)'
                        }}>
                            Proceed to Buy
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart
