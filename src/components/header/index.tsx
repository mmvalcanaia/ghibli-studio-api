import { IoIosHeart } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <header className="header-container">
      <div className="logo-link-container">
        <Link to="/">
          <img
            alt="Ghibli logo"
            className="header-img"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png"
          />
        </Link>
      </div>
      <div className="logo-favorites-container">
        <Link to="/favorites">
          <IoIosHeart />
        </Link>
      </div>
    </header>
  );
}

export default Header;
