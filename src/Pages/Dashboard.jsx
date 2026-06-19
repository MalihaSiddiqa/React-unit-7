import { useAuth } from '../context/AuthContext';
import { useLocation } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';

function Dashboard() {
  const auth = useAuth();
  const location=useLocation();
  console.log("Dashboard location history context:", location);

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <User size={48} className="dashboard-icon" strokeWidth={1.5} />
                <span>{"Welcome " + auth.user}</span>
      
        <button onClick={handleLogout} className='signout-btn'>
          <LogOut size={18} /> Sign Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
