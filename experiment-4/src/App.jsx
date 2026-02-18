import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Profile from './components/Profile';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1, maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '30px 20px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
            <footer style={{ textAlign: 'center', padding: '40px', background: 'var(--card-bg)', borderTop: '1px solid var(--border-color)', marginTop: 'auto' }}>
              <p style={{ opacity: 0.6 }}>© 2026 TechKart Inc. Developed for Exp-4</p>
            </footer>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;