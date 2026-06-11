import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, LogIn } from 'lucide-react';

function Login() {
  const [name, setName] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || '/dashboard';

  const handleLogin = () => {
    if (!name.trim()) return;
    auth.login(name);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <div className="input-group">
          <User size={18} />
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          />
        </div>
        <button onClick={handleLogin} className="signin-btn">
          <LogIn size={18} /> Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;