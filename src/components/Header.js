import logo from "../images/logo.svg";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} className="header__logo-container" />
    </header>
  );
}

export default Header;
