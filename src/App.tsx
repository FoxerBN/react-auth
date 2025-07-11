
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthContext';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    
      <Router>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<NotFoundPage imagePath="notfound.png" />} />
        </Routes>
        </AuthProvider>
      </Router>
    
  );
}

export default App;
