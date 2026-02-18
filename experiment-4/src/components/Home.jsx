import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div style={{ paddingBottom: '50px' }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, var(--primary) 0%, #2563eb 100%)', 
        color: 'white', padding: '80px 40px', borderRadius: '20px', 
        textAlign: 'center', marginBottom: '40px', boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
      }}>
        <h1 style={{ fontSize: '3.5rem', margin: '0 0 20px 0', fontWeight: '800' }}>Next Gen Tech is Here.</h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto 30px auto' }}>
          Explore the latest in audio, computing, and gaming gear. 
          Premium quality, unbeatable prices, and lightning-fast shipping.
        </p>
        <Link to="/shop">
          <button style={{ 
            backgroundColor: 'white', color: 'var(--primary)', 
            padding: '15px 35px', fontSize: '1.1rem', fontWeight: 'bold',
            border: 'none', borderRadius: '50px', cursor: 'pointer',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            Shop Now
          </button>
        </Link>
      </div>

      {/* Features Grid */}
      <div className="grid" style={{ marginBottom: '60px' }}>
        {[
          { icon: <Truck size={32} />, title: "Free Shipping", desc: "On all orders over $500" },
          { icon: <ShieldCheck size={32} />, title: "2 Year Warranty", desc: "Full coverage on electronics" },
          { icon: <Clock size={32} />, title: "24/7 Support", desc: "Expert tech support anytime" },
        ].map((feature, idx) => (
          <div key={idx} className="card" style={{ textAlign: 'center', padding: '40px' }}>
            <div style={{ color: 'var(--primary)', marginBottom: '15px' }}>{feature.icon}</div>
            <h3 style={{ margin: '0 0 10px 0' }}>{feature.title}</h3>
            <p style={{ margin: 0, opacity: 0.6 }}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;