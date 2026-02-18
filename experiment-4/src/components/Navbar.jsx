import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSelector } from 'react-redux';
import { ShoppingCart, User, Sun, Moon, LayoutGrid, Home, Package } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const cartCount = useSelector((state) => state.cart.items.reduce((acc, item) => acc + item.quantity, 0));
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'var(--primary)' : 'var(--text-color)';

  return (
    <nav style={{ 
      position: 'sticky', top: 0, zIndex: 100,
      backgroundColor: 'var(--card-bg)', borderBottom: '1px solid var(--border-color)', 
      padding: '0.8rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ background: 'var(--primary)', color: 'white', padding: '8px', borderRadius: '8px' }}>
          <LayoutGrid size={24} />
        </div>
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-1px' }}>TechKart</h2>
      </div>

      <div style={{ display: 'flex', gap: '30px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: isActive('/'), fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Home size={18} /> Home
        </Link>
        <Link to="/shop" style={{ textDecoration: 'none', color: isActive('/shop'), fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Package size={18} /> Shop
        </Link>
        <Link to="/profile" style={{ textDecoration: 'none', color: isActive('/profile'), fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <User size={18} /> Account
        </Link>
      </div>

      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <button onClick={toggleTheme} style={{ padding: '8px', borderRadius: '50%' }}>
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        
        <Link to="/cart" style={{ position: 'relative', color: 'var(--text-color)', padding: '8px' }}>
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span style={{
              position: 'absolute', top: '0', right: '0',
              background: 'var(--danger)', color: 'white',
              borderRadius: '50%', width: '20px', height: '20px',
              fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 'bold', boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }}>
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;