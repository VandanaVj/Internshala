import React from 'react';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      {/* SECTION 1: Career & Certification Links */}
      <section className="courses-links-section">
        <div className="course-row">
          <h4>Career Launchpads</h4>
          <div className="link-items">
            <span>Web Developer Launchpad</span>
            <span>Data Science Launchpad</span>
            <span>Digital Marketing Launchpad</span>
            <span>HR Management Launchpad</span>
            <span className="view-all">View all courses ❯</span>
          </div>
        </div>

        <div className="course-row">
          <h4>Certification Courses <span className="offer-tag">OFFER</span></h4>
          <div className="link-items">
            <span>Full Stack Web Development with AI</span>
            <span>Programming with Python with AI</span>
            <span>Complete Digital Marketing with AI</span>
            <span>Machine Learning with AI</span>
            <span>Advanced Excel with AI</span>
            <span>AutoCAD with AI</span>
            <span>Data Science with AI</span>
            <span>Programming with C and C++ with AI</span>
            <span>Financial Modeling and Valuation with AI</span>
            <span className="view-all">View all courses ❯</span>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: Main Dark Footer */}
      <footer className="dark-footer">
        <div className="footer-grid">
          <div className="footer-col">
            <a href="#">About us</a>
            <a href="#">We're hiring</a>
            <a href="#">Hire interns for your company</a>
            <a href="#">Post a Job</a>
            <a href="#">Competitions</a>
          </div>
          <div className="footer-col">
            <a href="#">Team Diary</a>
            <a href="#">Blog</a>
            <a href="#">Our Services</a>
            <a href="#">Free Job Alerts</a>
          </div>
          <div className="footer-col">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy</a>
            <a href="#">Contact us</a>
            <a href="#">Annual Returns</a>
            <a href="#">Grievance Redressal</a>
            <a href="#">Resume Maker</a>
          </div>
          <div className="footer-col">
            <a href="#">Sitemap</a>
            <a href="#">College TPO registration</a>
            <a href="#">List of Companies</a>
            <a href="#">Jobs for Women</a>
          </div>
        </div>

        {/* SECTION 4: App Stores, Socials & Copyright */}
        <div className="footer-bottom-bar">
          <div className="bottom-left-group">
            <div className="app-download-btns">
              <button className="store-btn">GET IT ON Google Play</button>
              <button className="store-btn">Download on the App Store</button>
            </div>
            <div className="social-media-icons">
               <span>Instagram</span> <span>Twitter</span> <span>YouTube</span> <span>LinkedIn</span>
            </div>
          </div>

          <div className="copyright-text">
            © Copyright 2026 Internshala (Scholiverse Educare Private Limited)
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;