import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart, updateQuantity, setSearchTerm, setCategoryFilter, clearNotification } from '../store/cartSlice';
import { Search, Filter, ShoppingBag, Plus, Minus } from 'lucide-react';

const Shop = () => {
  const dispatch = useDispatch();
  // Get 'items' from state to check quantities
  const { products, items, status, searchTerm, categoryFilter, notification } = useSelector((state) => state.cart);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchProducts());
  }, [status, dispatch]);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => dispatch(clearNotification()), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification, dispatch]);

  const categories = ['All', ...new Set(products.map(p => p.category))];
  
  const filteredProducts = products.filter(product => {
    const safeName = product.name ? product.name.toLowerCase() : '';
    const safeSearch = searchTerm ? searchTerm.toLowerCase() : '';
    const matchesSearch = safeName.includes(safeSearch);
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Helper to get quantity of a specific product
  const getProductQuantity = (id) => {
    const foundItem = items.find(item => item.id === id);
    return foundItem ? foundItem.quantity : 0;
  };

  return (
    <div>
      {/* Toast Notification */}
      {notification && (
        <div style={{
          position: 'fixed', bottom: '20px', right: '20px', 
          background: '#22c55e', color: 'white', padding: '12px 24px', 
          borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)', 
          zIndex: 1000, fontWeight: 'bold', animation: 'fadeIn 0.3s ease-out'
        }}>
          {notification}
        </div>
      )}

      {/* Controls Header */}
      <div className="card" style={{ marginBottom: '30px' }}>
        <div className="flex-between" style={{ flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h2 style={{ margin: 0 }}>Shop Inventory</h2>
            <p style={{ margin: '5px 0 0 0', opacity: 0.6 }}>Found {filteredProducts.length} products</p>
          </div>
          
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }} />
              <input 
                type="text" placeholder="Search..." value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                style={{ padding: '10px 10px 10px 40px', borderRadius: '8px', border: '1px solid var(--border-color)', width: '200px', backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
              />
            </div>
            <select 
              value={categoryFilter} onChange={(e) => dispatch(setCategoryFilter(e.target.value))}
              style={{ padding: '10px 15px', borderRadius: '8px', border: '1px solid var(--border-color)', cursor: 'pointer', backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {status === 'loading' ? <p style={{textAlign:'center'}}>Loading products...</p> : (
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
          {filteredProducts.map(product => {
            const qty = getProductQuantity(product.id);
            
            return (
              <div key={product.id} className="card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid var(--border-color)' }}>
                {/* Image Area */}
                <div style={{ height: '160px', background: 'var(--bg-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
                  {product.image}
                </div>
                
                {/* Details Area */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <small style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.8rem' }}>{product.category.toUpperCase()}</small>
                  <h3 style={{ margin: '5px 0 10px 0', fontSize: '1.1rem' }}>{product.name}</h3>
                  
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '40px' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>${product.price}</span>
                    
                    {/* BUTTON LOGIC: If Qty > 0 show controls, else show Add button */}
                    {qty > 0 ? (
                      <div style={{ 
                        display: 'flex', alignItems: 'center', gap: '10px', 
                        background: 'var(--bg-color)', padding: '4px 8px', borderRadius: '6px',
                        border: '1px solid var(--border-color)' 
                      }}>
                        <button 
                          onClick={() => dispatch(updateQuantity({ id: product.id, amount: -1 }))}
                          style={{ border: 'none', background: 'transparent', color: 'var(--text-color)', cursor: 'pointer', padding: '5px' }}
                        >
                          <Minus size={16} />
                        </button>
                        
                        <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>{qty}</span>
                        
                        <button 
                          onClick={() => dispatch(updateQuantity({ id: product.id, amount: 1 }))}
                          style={{ border: 'none', background: 'transparent', color: 'var(--primary)', cursor: 'pointer', padding: '5px' }}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => dispatch(addToCart(product))}
                        style={{ 
                          padding: '8px 16px', borderRadius: '8px', border: 'none', 
                          background: 'var(--text-color)', color: 'var(--bg-color)', 
                          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
                          fontWeight: '500'
                        }}
                      >
                        <ShoppingBag size={16} /> Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Shop;