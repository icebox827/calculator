import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navContainer">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </div>
    </nav>
  )
};

export default Navbar;