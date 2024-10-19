import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import '../sass/Users.scss';

const Users = () => {
  return (
    <div className="container--users">
      <div className="margin-bottom">
        <Button
          component={Link}
          to="/users/user-search"
          className="button"
          variant="contained"
        >
          User Search
        </Button>
      </div>
      <div>
        <Button
          component={Link}
          to="/users/permission-search"
          className="button"
          variant="contained"
        >
          User Permission Search
        </Button>
      </div>
    </div>
  );
};

export default Users;
