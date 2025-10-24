import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import SeoMeta from '../common/SeoMeta';
import { LoginCredentials, AuthError } from '../../types/auth';
import './Login.css';

/**
 * Location state interface for handling tab state in the login/register form
 */
interface LocationState {
  activeTab?: 'login' | 'register';
}

/**
 * Login component that handles user authentication
 * @component
 */
const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<AuthError | null>(null);
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  useEffect(() => {
    const state = location.state as LocationState;
    if (state?.activeTab) {
      setActiveTab(state.activeTab);
    }
  }, [location]);

  /**
   * Handles input changes for form fields
   * @param e - Change event from input field
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) {
      setError(null);
    }
  };

  /**
   * Handles form submission
   * @param e - Form submission event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await login(credentials.email, credentials.password);
      navigate('/');
    } catch (err) {
      setError({
        code: 'AUTH_ERROR',
        message: 'Invalid email or password',
        field: 'password',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <SeoMeta
        title="Login - Rupantar"
        description="Login to your Rupantar account to access digital transformation solutions."
        keywords="login, authentication, Rupantar, digital transformation"
      />

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="login-container">
            <h2 className="login-title">Welcome Back</h2>
            <ul className="nav nav-tabs mb-4">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                  onClick={() => setActiveTab('login')}
                  type="button"
                  disabled={isLoading}
                >
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
                  onClick={() => setActiveTab('register')}
                  type="button"
                  disabled={isLoading}
                >
                  Register
                </button>
              </li>
            </ul>

            {activeTab === 'login' ? (
              <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-input ${error?.field === 'email' ? 'error' : ''}`}
                    id="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                  {error?.field === 'email' && <div className="error-message">{error.message}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-input ${error?.field === 'password' ? 'error' : ''}`}
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                  {error?.field === 'password' && (
                    <div className="error-message">{error.message}</div>
                  )}
                </div>
                <button type="submit" className="login-button" disabled={isLoading}>
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </form>
            ) : (
              <div className="text-center">
                <p>Don&apos;t have an account? Register now!</p>
                <button className="btn btn-outline-primary" onClick={() => navigate('/register')}>
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
