import { useTheme } from '../context/ThemeContext';
import { User, Sun, Moon, LogOut } from 'lucide-react';

const ContextDemo = () => {
  const { theme, toggleTheme, user, login, logout } = useTheme();

  return (
    <div className="card">
      <div className="flex-between">
        <h2>Auth & Theme (Context API)</h2>
        <button onClick={toggleTheme} title="Toggle Theme">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
      
      <p style={{ opacity: 0.7 }}>
        Demonstrating global state management using React Context. 
        Updates here affect the entire application style.
      </p>

      <hr />

      <div style={{ marginTop: '20px' }}>
        {user ? (
          <div className="flex-between" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '15px', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ background: '#3b82f6', color: 'white', padding: '8px', borderRadius: '50%' }}>
                <User size={24} />
              </div>
              <div>
                <h4 style={{ margin: 0 }}>{user.name}</h4>
                <small style={{ opacity: 0.8 }}>{user.uid}</small>
              </div>
            </div>
            <button className="danger" onClick={logout}>
              <LogOut size={16} style={{ marginRight: '5px' }} />
              Logout
            </button>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <p>You are currently logged out.</p>
            <button className="primary" onClick={() => login('Parth')}>
              Login as Student
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContextDemo;