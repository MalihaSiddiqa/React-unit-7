import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  console.log({path: location.pathname}); 

  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return children; 
}

export default RequireAuth;