import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionManagement from './components/PermissionManagement';

const App = () => {
  const [currentView, setCurrentView] = useState('user-management');

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
      <Navbar handleViewChange={handleViewChange} />
      <div style={{ padding: '20px' }}>
        {currentView === 'user-management' && <UserManagement />}
        {currentView === 'role-management' && <RoleManagement />}
        {currentView === 'permission-management' && <PermissionManagement />}
      </div>
    </div>
  );
};

export default App;
