import { Link } from 'react-router'


export const Menu = () =>
	<nav className="menu">
		<Link to="/" activeClassName="selected">
      <p>Home</p>
		</Link>
		<Link to="/about" activeClassName="selected">
      <p>About</p>
		</Link>
		<Link to="/speakers" activeClassName="selected">
      <p>Speakers</p>
		</Link>
    <Link to="/gallery" activeClassName="selected">
      <p>Gallery</p>
    </Link>
    <Link to="/contact" activeClassName="selected">
      <p>Contact</p>
    </Link>
    <Link to="/register" activeClassName="selected">
      <p>Register</p>
    </Link>
	</nav>
