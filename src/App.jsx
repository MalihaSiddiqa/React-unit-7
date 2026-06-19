
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';
import { AuthProvider } from './context/AuthContext';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <AuthProvider> 
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/dashboard" element={
          <RequireAuth> 
            <Dashboard />
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
