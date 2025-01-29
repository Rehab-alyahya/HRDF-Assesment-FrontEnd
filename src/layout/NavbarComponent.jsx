


import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Function to update login status
  const updateLoginStatus = () => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  };

  useEffect(() => {
    // Check login status on mount
    updateLoginStatus();

    // Event listener for storage changes
    const handleStorageChange = (event) => {
      if (event.key === 'isLoggedIn') {
        updateLoginStatus();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.setItem('isLoggedIn', 'false'); 
    updateLoginStatus();
    navigate('/signin'); // Redirect to login page after logout
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Riyadh Ristaurants
        </Typography>
        {isLoggedIn ? (
          <>
            <Button color="inherit" onClick={() => navigate('/restaurants')}>
              Restaurants
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" onClick={() => navigate('/signin')}>
              Sign In
            </Button>
            <Button color="inherit" onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;

