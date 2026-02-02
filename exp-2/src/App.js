import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Material UI Components
import { Button, TextField, Card as MuiCard, CardContent, Typography, Switch, FormControlLabel } from '@mui/material';

// ======================= COMPONENT: NAVBAR =======================
function NavigationBar() {
  const location = useLocation(); // Gets current URL to highlight active tab
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">UI Design Lab</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/exp1' ? 'active' : ''}`} to="/exp1">Exp 1 (Form)</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/exp2' ? 'active' : ''}`} to="/exp2">Exp 2 (Cards)</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/exp3' ? 'active' : ''}`} to="/exp3">Exp 3 (MUI)</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// ======================= PAGE: HOME =======================
function Home() {
  return (
    <div className="container text-center mt-5">
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border">
        <h1 className="display-5 fw-bold text-primary">Unit 2: UI Design Lab</h1>
        <p className="col-md-8 fs-4 mx-auto">
          Welcome to the Unit-2 Lab experiments. Use the Navigation Bar above to switch between different UI implementations.
        </p>
        <Link to="/exp1">
          <button className="btn btn-primary btn-lg" type="button">Start Experiment 1</button>
        </Link>
      </div>
    </div>
  );
}

// ======================= PAGE: EXP 1 (Bootstrap Form) =======================
function Exp1() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully! (This is a demo)");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 border-bottom pb-2">Experiment 1: Bootstrap Form UI</h2>
      <div className="card p-4 shadow-sm" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Email address</label>
            <input type="email" className="form-control" placeholder="name@example.com" required />
            <div className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Your Feedback</label>
            <textarea className="form-control" rows="4" placeholder="Write something..." required></textarea>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-success">Submit Feedback</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ======================= PAGE: EXP 2 (Bootstrap Cards) =======================
function Exp2() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 border-bottom pb-2">Experiment 2: Card-Based Layout</h2>
      <div className="row g-4">
        
        {/* Card 1 */}
        <div className="col-md-6">
          <div className="card h-100 shadow hover-effect">
            <div className="card-header bg-primary text-white fw-bold">Component Library</div>
            <div className="card-body">
              <h5 className="card-title">Bootstrap 5</h5>
              <p className="card-text">
                Bootstrap is the world’s most popular framework for building responsive, mobile-first sites.
              </p>
              <button className="btn btn-outline-primary mt-2">Read Docs</button>
            </div>
            <div className="card-footer text-muted">Last updated 3 mins ago</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-6">
          <div className="card h-100 shadow hover-effect">
            <div className="card-header bg-danger text-white fw-bold">Design Principles</div>
            <div className="card-body">
              <h5 className="card-title">Responsive Grid</h5>
              <p className="card-text">
                The grid system uses a series of containers, rows, and columns to layout and align content.
              </p>
              <button className="btn btn-outline-danger mt-2">View Examples</button>
            </div>
            <div className="card-footer text-muted">Last updated 5 mins ago</div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ======================= PAGE: EXP 3 (Material UI) =======================
function Exp3() {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 border-bottom pb-2">Experiment 3: Material UI Components</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MuiCard sx={{ minWidth: 350, boxShadow: 3, padding: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
              Material Design Login
            </Typography>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
              <TextField label="Username" variant="outlined" fullWidth />
              <TextField label="Password" type="password" variant="outlined" fullWidth />
              
              <FormControlLabel 
                control={<Switch checked={toggled} onChange={() => setToggled(!toggled)} />} 
                label="Remember Me" 
              />
              
              <Button variant="contained" size="large" fullWidth>
                SIGN IN
              </Button>
            </div>
          </CardContent>
        </MuiCard>
      </div>
    </div>
  );
}

// ======================= MAIN APP COMPONENT =======================
function App() {
  return (
    <Router>
      <NavigationBar />
      
      {/* This section decides which component to show based on the URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exp1" element={<Exp1 />} />
        <Route path="/exp2" element={<Exp2 />} />
        <Route path="/exp3" element={<Exp3 />} />
      </Routes>
    </Router>
  );
}

export default App;