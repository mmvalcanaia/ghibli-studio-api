import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <header className="header-container">
      <Link to="/">
        <img
          alt="Ghibli logo"
          className="header-img"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png"
        />
      </Link>
    </header>
  );
}

export default Header;
