import logo from "../assets/img/dc-logo.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="header-menu">
        <li>
          <a href="#">Characters</a>
        </li>
        <li>
          <a href="#">Comics</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Tv</a>
        </li>
        <li>
          <a href="#">Games</a>
        </li>
        <li>
          <a href="#">Collectibles</a>
        </li>
        <li>
          <a href="#">Videos</a>
        </li>
        <li>
          <a href="#">Fans</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
