import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const Navbar = ({ handleViewChange }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={() => handleViewChange('user-management')}>
          User Management
        </Button>
        <Button color="inherit" onClick={() => handleViewChange('role-management')}>
          Role Management
        </Button>
        <Button color="inherit" onClick={() => handleViewChange('permission-management')}>
          Permission Management
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
