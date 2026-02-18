import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart, removeFromCart, setSearchTerm } from '../store/cartSlice';
import { ShoppingCart, Trash2, Package, Search } from 'lucide-react';

const ReduxDemo = () => {
  const dispatch = useDispatch();
  const { items, products, status, searchTerm } = useSelector((state) => state.cart);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // Filter Logic
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="card">
      <div className="flex-between" style={{ marginBottom: '20px' }}>
        <h2>Redux Store</h2>
        <div style={{ position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '10px', top: '8px', opacity: 0.5 }} />
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            style={{ padding: '8px 10px 8px 35px', borderRadius: '5px', border: '1px solid var(--border-color)', width: '200px' }}
          />
        </div>
      </div>

      <div className="grid">
        <div style={{ flex: 2 }}>
          {status === 'loading' ? <p>Loading...</p> : (
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
              {filteredProducts.map(product => (
                <div key={product.id} style={{ border: '1px solid var(--border-color)', padding: '15px', borderRadius: '8px' }}>
                  <Package size={32} style={{ marginBottom: '10px', opacity: 0.5 }} />
                  <h4>{product.name}</h4>
                  <p style={{ color: 'gray', fontSize: '0.9em' }}>{product.category}</p>
                  <p style={{ color: 'var(--primary)', fontWeight: 'bold' }}>${product.price}</p>
                  <button className="primary" style={{ width: '100%' }} onClick={() => dispatch(addToCart(product))}>Add</button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ flex: 1, borderLeft: '1px solid var(--border-color)', paddingLeft: '20px' }}>
          <h3>Cart ({items.length})</h3>
          {items.map(item => (
            <div key={item.id} className="flex-between" style={{ padding: '10px 0', borderBottom: '1px solid var(--border-color)' }}>
              <div>{item.name} <br/><small>x{item.quantity}</small></div>
              <button onClick={() => dispatch(removeFromCart(item.id))} style={{ color: 'red', border: 'none', background: 'none' }}><Trash2 size={16}/></button>
            </div>
          ))}
          <h4>Total: ${total}</h4>
        </div>
      </div>
    </div>
  );
};

export default ReduxDemo;