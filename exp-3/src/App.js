import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";

function NavBar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <header className="nav-shell">
      <div className="nav-brand">
        <div className="logo-mark">SPA</div>
        <div>
          <div className="brand-title">Unit 3 Lab Manual</div>
          <div className="brand-sub">React Router Experiments</div>
        </div>
      </div>
      <nav className="nav-links">
        <Link className={isActive("/") && location.pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={isActive("/exp1") ? "active" : ""} to="/exp1">Exp 1</Link>
        <Link className={isActive("/exp2") ? "active" : ""} to="/exp2">Exp 2</Link>
        <Link className={isActive("/exp3") ? "active" : ""} to="/exp3">Exp 3</Link>
        <Link className={isActive("/exp4") ? "active" : ""} to="/exp4">Exp 4</Link>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Single Page Applications</p>
          <h1>Implementing Routing with React Router</h1>
          <p className="lead">
            This unit demonstrates how a SPA navigates between views without full page reloads. Explore
            each experiment to see BrowserRouter, Routes, Route, Link, and fallback handling in action.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" to="/exp1">Start Experiment 1</Link>
            <Link className="btn ghost" to="/exp4">See Fallback Route</Link>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card-header">Lab Snapshot</div>
          <ul className="hero-list">
            <li>Experiment 1: Basic client-side routing</li>
            <li>Experiment 2: Navigation with Link</li>
            <li>Experiment 3: Multi-page SPA routing</li>
            <li>Experiment 4: Default and fallback routes</li>
          </ul>
          <div className="hero-metrics">
            <div>
              <span className="metric">4</span>
              <span className="metric-label">Experiments</span>
            </div>
            <div>
              <span className="metric">SPA</span>
              <span className="metric-label">No reloads</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <h3>Aim</h3>
          <p>Implement routing in a SPA using React Router DOM.</p>
        </div>
        <div className="card">
          <h3>Software</h3>
          <p>Node.js, React, React Router DOM, modern web browser.</p>
        </div>
        <div className="card">
          <h3>Outcome</h3>
          <p>Dynamic page views render instantly without refreshing the page.</p>
        </div>
      </section>
    </main>
  );
}

function Exp1() {
  return (
    <main className="page">
      <section className="section">
        <div className="section-title">Experiment 1: Basic Client-Side Routing</div>
        <p className="section-sub">
          Configure BrowserRouter and map basic routes to components.
        </p>
        <div className="code-card">
          <pre>
            <code>{`import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`}</code>
          </pre>
        </div>
        <div className="pill-row">
          <span className="pill">BrowserRouter</span>
          <span className="pill">Routes</span>
          <span className="pill">Route</span>
        </div>
      </section>
    </main>
  );
}

function Exp2Layout() {
  return (
    <main className="page">
      <section className="section">
        <div className="section-title">Experiment 2: Navigation Using Link</div>
        <p className="section-sub">
          Use Link components to navigate without refreshing the browser.
        </p>
        <div className="tab-bar">
          <Link className="tab" to="/exp2">Home</Link>
          <Link className="tab" to="/exp2/contact">Contact</Link>
        </div>
        <div className="nested-shell">
          <Routes>
            <Route index element={<Exp2Home />} />
            <Route path="contact" element={<Exp2Contact />} />
          </Routes>
        </div>
      </section>
    </main>
  );
}

function Exp2Home() {
  return (
    <div className="mini-card">
      <h3>Home Page</h3>
      <p>Links switch views instantly while preserving the SPA experience.</p>
    </div>
  );
}

function Exp2Contact() {
  return (
    <div className="mini-card accent">
      <h3>Contact Page</h3>
      <p>Navigation happens client-side; there is no full page reload.</p>
    </div>
  );
}

function Exp3Layout() {
  return (
    <main className="page">
      <section className="section">
        <div className="section-title">Experiment 3: Multi-Page SPA</div>
        <p className="section-sub">Map multiple components to their own routes.</p>
        <div className="tab-bar">
          <Link className="tab" to="/exp3">Overview</Link>
          <Link className="tab" to="/exp3/dashboard">Dashboard</Link>
          <Link className="tab" to="/exp3/profile">Profile</Link>
        </div>
        <div className="nested-shell">
          <Routes>
            <Route index element={<Exp3Overview />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
      </section>
    </main>
  );
}

function Exp3Overview() {
  return (
    <div className="grid">
      <div className="card">
        <h3>Dashboard Route</h3>
        <p>Example: <span className="mono">/exp3/dashboard</span></p>
      </div>
      <div className="card">
        <h3>Profile Route</h3>
        <p>Example: <span className="mono">/exp3/profile</span></p>
      </div>
      <div className="card">
        <h3>Why It Works</h3>
        <p>React Router swaps components, keeping the app loaded.</p>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="mini-card">
      <h3>Dashboard</h3>
      <p>Reports, stats, and activity summaries appear here.</p>
      <div className="stat-row">
        <div>
          <span className="stat">24</span>
          <span className="stat-label">Tasks</span>
        </div>
        <div>
          <span className="stat">08</span>
          <span className="stat-label">Routes</span>
        </div>
        <div>
          <span className="stat">99%</span>
          <span className="stat-label">SPA Speed</span>
        </div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="mini-card accent">
      <h3>Profile</h3>
      <p>User details and preferences can be surfaced on a dedicated route.</p>
      <button className="btn primary">Update Profile</button>
    </div>
  );
}

function Exp4() {
  return (
    <main className="page">
      <section className="section">
        <div className="section-title">Experiment 4: Default and Fallback Route</div>
        <p className="section-sub">
          A fallback route renders a friendly page for undefined URLs.
        </p>
        <div className="grid">
          <div className="card">
            <h3>Default Route</h3>
            <p>Maps the root URL to the Home page.</p>
          </div>
          <div className="card">
            <h3>Fallback Route</h3>
            <p>Use <span className="mono">path="*"</span> to handle unknown URLs.</p>
          </div>
          <div className="card">
            <h3>Try It</h3>
            <p>Type any random path in the address bar to see the fallback page.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function NotFound() {
  return (
    <main className="page center">
      <div className="notfound">
        <h2>Page Not Found</h2>
        <p>The route you requested does not exist. Use the navigation to get back.</p>
        <Link className="btn ghost" to="/">Return Home</Link>
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app-bg" />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exp1" element={<Exp1 />} />
        <Route path="/exp2/*" element={<Exp2Layout />} />
        <Route path="/exp3/*" element={<Exp3Layout />} />
        <Route path="/exp4" element={<Exp4 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
