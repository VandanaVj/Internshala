import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";

const internshipData = [
  {
    id: 1,
    title: "Fundraising",
    company: "InAmigos Foundation",
    location: "Work from home",
    stipend: "₹ 4,500 /month",
    duration: "2 Weeks",
    posted: "2 days ago",
    tags: ["Creative Writing", "English Proficiency"],
    logo: "https://via.placeholder.com/60",
  },

  {
    id: 2,
    title: "Business Development",
    company: "Ensar Solutions",
    location: "Delhi",
    stipend: "₹ 6,000 /month",
    duration: "2 Months",
    posted: "3 days ago",
    tags: ["Sales", "Marketing"],
    logo: "https://via.placeholder.com/60",
  },

  {
    id: 3,
    title: "React Developer",
    company: "Tech World",
    location: "Work from home",
    stipend: "₹ 10,000 /month",
    duration: "6 Months",
    posted: "1 day ago",
    tags: ["React", "JavaScript", "Frontend"],
    logo: "https://via.placeholder.com/60",
  },

  {
    id: 4,
    title: "UI UX Designer",
    company: "Creative Studio",
    location: "Mumbai",
    stipend: "₹ 8,000 /month",
    duration: "3 Months",
    posted: "5 days ago",
    tags: ["Figma", "UI Design"],
    logo: "https://via.placeholder.com/60",
  },
];

function App() {
  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [stipend, setStipend] = useState(0);
  const [workFromHome, setWorkFromHome] = useState(false);

  // FILTER LOGIC
  const filteredData = internshipData.filter((item) => {
    const matchesProfile = item.title
      .toLowerCase()
      .includes(profile.toLowerCase());

    const matchesLocation = item.location
      .toLowerCase()
      .includes(location.toLowerCase());

    const matchesWFH =
      !workFromHome || item.location === "Work from home";

    const stipendValue = parseInt(
      item.stipend.replace(/[₹,]/g, "")
    );

    const matchesStipend =
      stipendValue >= stipend * 1000;

    return (
      matchesProfile &&
      matchesLocation &&
      matchesWFH &&
      matchesStipend
    );
  });

  // CLEAR FILTERS
  const clearFilters = () => {
    setProfile("");
    setLocation("");
    setStipend(0);
    setWorkFromHome(false);
  };

  return (
    <div className="internshala-clone">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">

          <div className="logo">
            INTERNSHALA
          </div>

          <ul className="nav-links">
            <li>Internships ▼</li>

            <li>
              Courses
              <span className="offer-badge">
                OFFER
              </span>
              ▼
            </li>

            <li>Jobs ▼</li>

            <li className="login-btn">
              Login / Register ▼
            </li>
          </ul>
        </div>
      </nav>

      <div className="main-wrapper">

        {/* HEADER */}
        <div className="page-header">

          <p className="breadcrumbs">
            Home &gt; Internships &gt; Work From Home
          </p>

          <h1 className="main-title">
            {filteredData.length} Work From Home Internships
          </h1>

          <p className="subtitle">
            Latest internships for students
          </p>
        </div>

        <div className="content-layout">

          {/* FILTER SIDEBAR */}
          <aside className="filter-sidebar">

            <div className="alert-box">
              🔔 Save this search as alert
            </div>

            <div className="filter-card">

              <div className="filter-title">
                🔍 Filters
              </div>

              {/* PROFILE */}
              <div className="input-field">
                <label>Profile</label>

                <input
                  type="text"
                  placeholder="e.g. React"
                  value={profile}
                  onChange={(e) =>
                    setProfile(e.target.value)
                  }
                />
              </div>

              {/* LOCATION */}
              <div className="input-field">
                <label>Location</label>

                <input
                  type="text"
                  placeholder="e.g. Delhi"
                  value={location}
                  onChange={(e) =>
                    setLocation(e.target.value)
                  }
                />
              </div>

              {/* CHECKBOX */}
              <div className="checkbox-group">

                <label>
                  <input
                    type="checkbox"
                    checked={workFromHome}
                    onChange={(e) =>
                      setWorkFromHome(
                        e.target.checked
                      )
                    }
                  />

                  Work from home
                </label>

              </div>

              {/* STIPEND */}
              <div className="stipend-filter">

                <label>
                  Desired minimum monthly stipend
                </label>

                <input
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  value={stipend}
                  onChange={(e) =>
                    setStipend(e.target.value)
                  }
                />

                <div className="range-labels">
                  <span>0</span>
                  <span>2K</span>
                  <span>4K</span>
                  <span>6K</span>
                  <span>8K</span>
                  <span>10K</span>
                </div>

                <p>
                  Selected: ₹ {stipend}K
                </p>

              </div>

              {/* CLEAR BUTTON */}
              <button
                className="clear-btn"
                onClick={clearFilters}
              >
                Clear All
              </button>

            </div>
          </aside>

          {/* INTERNSHIP LIST */}
          <section className="cards-list">

            {filteredData.length > 0 ? (

              filteredData.map((item) => (

                <div
                  key={item.id}
                  className="internship-card"
                >

                  <div className="card-header">

                    <div className="title-area">

                      <h3>{item.title}</h3>

                      <p className="company-name">
                        {item.company}
                      </p>

                    </div>

                    <img
                      src={item.logo}
                      alt="logo"
                      className="company-logo"
                    />

                  </div>

                  <div className="status-tag">
                    Actively hiring
                  </div>

                  <div className="card-details">

                    <p>🏠 {item.location}</p>

                    <p>💰 {item.stipend}</p>

                    <p>📅 {item.duration}</p>

                  </div>

                  <div className="tags">

                    {item.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                  <div className="posted-on">
                    🕒 {item.posted}
                  </div>

                </div>
              ))

            ) : (

              <div className="no-results">
                No internships found.
              </div>

            )}

          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;