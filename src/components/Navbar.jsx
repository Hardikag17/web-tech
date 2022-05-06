import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { useContext } from 'react';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  let account = user ? (
    <div>
      <button
        className='btn btn-outline-dark btn-nav'
        onClick={() => setUser(null)}>
        Logout
      </button>
    </div>
  ) : (
    <div className='btn-group'>
      <Link to='/SignIn' className='btn btn-outline-dark btn-nav'>
        Sign In
      </Link>
      <Link to='/SignUp' className='btn btn-outline-dark btn-nav'>
        Sign Up
      </Link>
    </div>
  );

  return (
    <div className='navbar navbar-expand-lg fixed-top transparent'>
      <div className='container-fluid d-flex justify-content-between'>
        <div>
          <Link to='/Donate'>
            <a href='/' className='btn btn-outline-dark btn-nav'>
              Donate
            </a>
          </Link>
        </div>
        <div className='d-flex'>
          <div>
            <a href='#footer' className='nav-link pd-1'>
              ABOUT US
            </a>
          </div>
          <div>
            <a href='/' className='nav-link pd-1'>
              |
            </a>
          </div>
          <div>
            <a href='#footer' className='pd-1 nav-link'>
              CONTACTS
            </a>
          </div>

          <div>
            <a href='/' className='nav-link pd-1'>
              |
            </a>
          </div>
          <div>
            <Link to='/Vet' className='pd-1 nav-link'>
              VET
            </Link>
          </div>
        </div>
        {account}
      </div>
    </div>
  );
};

export default Navbar;
