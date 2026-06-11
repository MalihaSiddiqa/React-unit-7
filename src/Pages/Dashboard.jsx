import { useAuth } from '../context/AuthContext';
import { User, LogOut } from 'lucide-react';

function Dashboard() {
  const auth = useAuth();

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <User size={48} className="dashboard-icon" strokeWidth={1.5} />
        <h2>Welcome, {auth.user} !</h2>
        <button onClick={() => auth.logout()} className="signout-btn">
          <LogOut size={18} /> Sign Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;