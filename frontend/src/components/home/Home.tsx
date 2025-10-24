import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import SeoMeta from '../common/SeoMeta';
import SeoLink from '../common/SeoLink';
import './Home.css';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="container">
      <SeoMeta
        title="Welcome to Rupantar - Digital Transformation Solutions"
        description="Rupantar provides cutting-edge digital transformation solutions to help businesses thrive in the digital age."
        keywords="digital transformation, business solutions, technology consulting, Rupantar"
      />

      <section className="hero-section">
        <h1 className="hero-title">Welcome to Rupantar</h1>
        <p className="hero-subtitle">Your partner in digital transformation</p>
      </section>

      {user ? (
        <section className="cta-section">
          <h2 className="cta-title">Welcome back, {user.email}!</h2>
          <p>You&apos;re logged in and ready to explore our digital transformation solutions.</p>
          <SeoLink to="/dashboard" className="cta-button">
            Go to Dashboard
          </SeoLink>
        </section>
      ) : (
        <section className="cta-section">
          <h2 className="cta-title">Get Started with Rupantar</h2>
          <p>Create an account to access our digital transformation solutions.</p>
          <SeoLink to="/register" className="cta-button">
            Register Now
          </SeoLink>
        </section>
      )}

      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-laptop"></i>
            </div>
            <h3 className="feature-title">Digital Solutions</h3>
            <p className="feature-description">
              Transform your business with our cutting-edge digital solutions.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-lightbulb"></i>
            </div>
            <h3 className="feature-title">Expert Consulting</h3>
            <p className="feature-description">
              Get expert guidance for your digital transformation journey.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-headset"></i>
            </div>
            <h3 className="feature-title">24/7 Support</h3>
            <p className="feature-description">Round-the-clock support to help you succeed.</p>
          </div>
        </div>
      </section>

      <p className="text-lg text-gray-600">
        We&apos;re here to help you transform your business digitally.
      </p>
    </div>
  );
};

export default Home;
