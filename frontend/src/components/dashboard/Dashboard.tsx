import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import SeoMeta from '../common/SeoMeta';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="container mt-5">
      <SeoMeta
        title="Dashboard - Rupantar"
        description="Manage your Rupantar account and view your data."
        keywords="dashboard, account management, Rupantar, digital transformation"
      />

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title display-4">Dashboard</h1>
              <h2 className="card-subtitle mb-3">Welcome back, {user?.username}!</h2>
              <p className="card-text">
                This is your personal dashboard where you can manage your account and view your
                data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
