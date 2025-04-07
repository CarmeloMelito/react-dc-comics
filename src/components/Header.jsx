import logo from "../assets/img/dc-logo.png";

function Header({ links }) {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="header-menu">
        {/* MAP */}
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
