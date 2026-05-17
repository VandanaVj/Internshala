import "../style/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">internshala</div>

        <nav className="nav">
          <div className="nav-item">Internships ▾</div>
          <div className="nav-item">Courses ▾</div>
          <div className="nav-item offer">OFFER</div>
          <div className="nav-item">Jobs ▾</div>
        </nav>
      </div>

      <div className="header-right">
        <div className="nav-item">Login</div>
        <div className="nav-item register">Register</div>
      </div>
    </header>
  );
}

export default Header;