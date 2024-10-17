import React from 'react';
import { Button } from '@mui/material';

import '../sass/Users.scss';

const Users = () => {
  return (
    <div className="container--users">
      <div className="margin-bottom">
        <Button
          className="button"
          variant="contained"
          onClick={() => console.log('clicked')}
        >
          User Search
        </Button>
      </div>
      <div>
        <Button className="button" variant="contained">
          User Permission Search
        </Button>
      </div>
    </div>
  );
};

export default Users;
