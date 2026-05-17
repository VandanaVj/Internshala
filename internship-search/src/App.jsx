import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer'; // ✅ Successfully Linked

// Sample data with restored logo lines
const internshipData = [
  {
    id: 1,
    title: "Fundraising",
    company: "InAmigos Foundation",
    location: "Work from home",
    stipend: "₹ 4,500 - 6,500 /month",
    duration: "2 Weeks",
    posted: "2 days ago",
    tags: ["Creative Writing", "English Proficiency (Written)"],
    logo: "https://via.placeholder.com/50", 
  },
  {
    id: 2,
    title: "Business Development (Sales)",
    company: "Ensar Solutions",
    location: "Work from home",
    stipend: "₹ 5,000 - 7,500 /month",
    duration: "2 Months",
    posted: "3 days ago",
    tags: ["Client Interaction", "Sales Management", "Business Development"],
    logo: "https://via.placeholder.com/50",
  }
];

function App() {
  const [stipend, setStipend] = useState(0);

  return (
    <div className="internshala-clone">
      {/* 1. NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">INTERNSHALA</div>
          <ul className="nav-links">
            <li>Internships <span className="arrow">▼</span></li>
            <li>Courses <span className="offer-badge">OFFER</span> <span className="arrow">▼</span></li>
            <li>Jobs <span className="arrow">▼</span></li>
            <li className="login-btn">Login / Register <span className="arrow">▼</span></li>
          </ul>
        </div>
      </nav>

      <div className="main-wrapper">
        {/* 2. BREADCRUMBS & TITLE */}
        <div className="page-header">
          <p className="breadcrumbs">Home &gt; Internships &gt; WFH Internships</p>
          <h1 className="main-title">2143 Work From Home Internships</h1>
          <p className="subtitle">Latest Work From Home Internships for Students</p>
        </div>

        <div className="content-layout">
          {/* 3. LEFT FILTER SIDEBAR */}
          <aside className="filter-sidebar">
            <div className="alert-box">
              <span className="bell-icon">🔔</span>
              Save this search as alert
            </div>
            
            <div className="filter-card">
              <div className="filter-title">🔍 Filters</div>
              <div className="input-field">
                <label>Profile</label>
                <input type="text" placeholder="e.g. Marketing" />
              </div>
              <div className="input-field">
                <label>Location</label>
                <input type="text" placeholder="e.g. Delhi" />
              </div>
              <div className="checkbox-group">
                <label><input type="checkbox" /> Work from home</label>
                <label><input type="checkbox" /> Part-time</label>
              </div>
              <div className="stipend-filter">
                <label>Desired minimum monthly stipend (₹)</label>
                <input 
                  type="range" 
                  min="0" max="10" step="2" 
                  value={stipend} 
                  onChange={(e) => setStipend(e.target.value)} 
                />
                <div className="range-labels">
                  <span>0</span><span>2K</span><span>4K</span><span>6K</span><span>8K</span><span>10K</span>
                </div>
              </div>
              <div className="view-more">View more filters ▼</div>
            </div>
          </aside>

          {/* 4. INTERNSHIP CARDS LIST */}
          <section className="cards-list">
            {internshipData.map((item) => (
              <div key={item.id} className="internship-card">
                <div className="card-header">
                  <div className="title-area">
                    <h3>{item.title}</h3>
                    <p className="company-name">{item.company}</p>
                  </div>
                  <img src={item.logo} alt="logo" className="company-logo" />
                </div>
                
                <div className="status-tag">Actively hiring</div>
                
                <div className="card-details">
                  <p>🏠 {item.location}</p>
                  <p>💰 {item.stipend}</p>
                  <p>📅 {item.duration}</p>
                </div>

                <div className="card-footer">
                  <div className="tags">
                    {item.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="posted-on">
                    <span className="clock">🕒</span> {item.posted}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      {/* ✅ STEP 2: FOOTER PLACED HERE */}
      <Footer /> 

    </div>
  );
}

export default App;