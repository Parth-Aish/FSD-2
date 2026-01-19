import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [darkMode, setDarkMode] = useState(true);

  // States for experiments
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(null);

  const menu = [
    { id: 1, label: "Counter", icon: "🔢" },
    { id: 2, label: "To-Do List", icon: "📝" },
    { id: 3, label: "Appearance", icon: "🌓" },
    { id: 4, label: "User Form", icon: "📋" }
  ];

  return (
    <div className={`app-canvas ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="main-glass-card">
        
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="brand">FSD-2<span>Lab</span></div>
          <nav>
            {menu.map(item => (
              <button 
                key={item.id} 
                className={activeTab === item.id ? 'nav-btn active' : 'nav-btn'}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="nav-icon">{item.icon}</span> {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="content">
          <header className="header">
            <div className="title-section">
              <span className="breadcrumb">Unit-1 / Experiment {activeTab}</span>
              <h1>{menu.find(m => m.id === activeTab).label}</h1>
            </div>
            <div className="badge">Single Page Application</div>
          </header>

          <section className="exp-viewport">
            {activeTab === 1 && (
              <div className="view fade-in">
                <div className="counter-container">
                  <span className="label">Current Value</span>
                  <h1 className="big-number">{count}</h1>
                  <div className="action-row">
                    <button className="btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
                    <button className="btn-secondary" onClick={() => setCount(count - 1)}>Decrement</button>
                    <button className="btn-danger-outline" onClick={() => setCount(0)}>Reset</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="view fade-in">
                <div className="input-box">
                  <input value={taskInput} onChange={e => setTaskInput(e.target.value)} placeholder="What's on your mind?" />
                  <button className="btn-primary" onClick={() => {if(taskInput){setTasks([...tasks, taskInput]); setTaskInput("");}}}>Add Task</button>
                </div>
                <div className="task-grid">
                  {tasks.map((t, i) => (
                    <div key={i} className="task-item">
                      <p>{t}</p>
                      <button className="del-btn" onClick={() => setTasks(tasks.filter((_, idx) => idx !== i))}>✕</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="view fade-in theme-center">
                <div className="theme-card">
                  <h3>Toggle UI Theme</h3>
                  <p>Experience instant dynamic style switching without page reload.</p>
                  <button className="btn-primary" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "☀️ Switch to Light" : "🌙 Switch to Dark"}
                  </button>
                </div>
              </div>
            )}

            {activeTab === 4 && (
              <div className="view fade-in">
                <div className="form-card">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input onChange={e => setFormData({...formData, email: e.target.value})} placeholder="Enter your email" />
                  </div>
                  <button className="btn-primary full-width" onClick={() => setSubmitted(formData)}>Submit Details</button>
                </div>
                {submitted && (
                  <div className="result-toast fade-in">
                    <p>✅ Data stored in state: <b>{submitted.name}</b> ({submitted.email})</p>
                  </div>
                )}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;