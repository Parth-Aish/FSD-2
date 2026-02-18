import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { User, Settings, FileText, LogOut } from 'lucide-react';

const Profile = () => {
  const { user, login, logout } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) return (
    <div className="card" style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <div style={{ background: 'var(--bg-color)', width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User size={40} /></div>
      <h2>Welcome Back</h2>
      <button className="primary" style={{ width: '100%' }} onClick={() => login('Parth')}>Sign In</button>
    </div>
  );

  return (
    <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
      <div className="card" style={{ flex: '1 1 250px', padding: '0' }}>
        <div style={{ padding: '30px', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ width: '100px', height: '100px', background: 'var(--primary)', borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2rem' }}>{user.name.charAt(0)}</div>
          <h3 style={{ margin: 0 }}>{user.name}</h3><p style={{ margin: '5px 0 0 0', opacity: 0.6 }}>{user.uid}</p>
        </div>
        <div style={{ padding: '10px' }}>
          {['overview', 'orders', 'settings'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{ width: '100%', textAlign: 'left', padding: '12px 15px', background: activeTab === tab ? 'var(--bg-color)' : 'transparent', border: 'none', color: activeTab === tab ? 'var(--primary)' : 'var(--text-color)', borderRadius: '8px', textTransform: 'capitalize' }}>{tab}</button>
          ))}
          <button onClick={logout} style={{ width: '100%', textAlign: 'left', padding: '12px 15px', background: 'transparent', border: 'none', color: 'var(--danger)', marginTop: '10px' }}><LogOut size={14} style={{marginRight: '5px'}}/> Logout</button>
        </div>
      </div>
      <div className="card" style={{ flex: '3 1 400px', minHeight: '500px' }}>
        {activeTab === 'overview' && <div><h2>Overview</h2><p>Welcome to your student dashboard.</p></div>}
        {activeTab === 'orders' && <div><h2>Order History</h2><p>No orders yet.</p></div>}
        {activeTab === 'settings' && <div><h2>Settings</h2><p>Account settings here.</p></div>}
      </div>
    </div>
  );
};
export default Profile;