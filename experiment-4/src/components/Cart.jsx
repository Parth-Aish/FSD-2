import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = total * 0.1;

  if (items.length === 0) return (
    <div className="card" style={{ textAlign: 'center', padding: '80px' }}>
      <h2>Your Cart is Empty</h2>
      <Link to="/shop"><button className="primary">Go to Shop</button></Link>
    </div>
  );

  return (
    <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div className="card" style={{ flex: 2 }}>
        <h2>Shopping Cart ({items.length})</h2>
        {items.map(item => (
          <div key={item.id} style={{ display: 'flex', gap: '20px', padding: '20px 0', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '3rem', width: '80px', height: '80px', background: 'var(--bg-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>{item.image}</div>
            <div style={{ flex: 1 }}>
              <div className="flex-between"><h3 style={{ margin: 0 }}>{item.name}</h3><strong>${item.price * item.quantity}</strong></div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginTop: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-color)', borderRadius: '6px' }}>
                  <button onClick={() => dispatch(updateQuantity({id: item.id, amount: -1}))} style={{ padding: '5px 10px', border: 'none', background: 'transparent' }}><Minus size={14}/></button>
                  <span style={{ padding: '0 10px' }}>{item.quantity}</span>
                  <button onClick={() => dispatch(updateQuantity({id: item.id, amount: 1}))} style={{ padding: '5px 10px', border: 'none', background: 'transparent' }}><Plus size={14}/></button>
                </div>
                <button onClick={() => dispatch(removeFromCart(item.id))} style={{ color: 'var(--danger)', background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}><Trash2 size={14} /> Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="card" style={{ flex: 1, minWidth: '300px' }}>
        <h3>Order Summary</h3>
        <div className="flex-between" style={{ margin: '10px 0' }}><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
        <div className="flex-between" style={{ margin: '10px 0' }}><span>Tax (10%)</span><span>${tax.toFixed(2)}</span></div>
        <hr style={{ margin: '20px 0' }} />
        <div className="flex-between" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '20px' }}><span>Total</span><span>${(total + tax).toFixed(2)}</span></div>
        <button className="primary" style={{ width: '100%', padding: '15px' }}>Checkout</button>
      </div>
    </div>
  );
};
export default Cart;