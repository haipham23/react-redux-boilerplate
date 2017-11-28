import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends PureComponent {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">You are logged in!</h1>
        <p className="text-center">
          <Link
            className="btn btn-outline-primary"
            to="/"
          >
            Home
          </Link>
        </p>
      </div>
    );
  }
}

export default Dashboard;
