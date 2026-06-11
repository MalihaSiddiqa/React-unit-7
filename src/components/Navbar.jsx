
import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutDashboard, LogOut, User,LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const auth = useAuth();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-brand">
          <Home size={20} />
          Auth<br />Demo
        </Link>
        
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <Home size={18} /> Home
          </Link>
          {auth.user && (
            <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
              <LayoutDashboard size={18} /> Dashboard
            </Link>
          )}
        </div>
      </div>

      <div className="nav-right">
        {auth.user ? (
          <>
            <div className="user-badge">
              <User size={16} />
              <span>{auth.user}</span>
            </div>
            <button onClick={() => auth.logout()} className="logout-btn">
              <LogOut size={18} /> Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="logout-btn">
            <LogIn size={18} /> Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;