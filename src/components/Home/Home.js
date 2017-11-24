import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Home extends PureComponent {
  render() {
    return (
      <div className="container home">
        <div className="jumbotron">
          <h1 className="display-3">
            React Redux Boilerplate
          </h1>
          <p className="lead">
            Check it out at
            <a
              className="home__btn-gh"
              href="https://github.com/haipham23/react-redux-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
          <p>
            {
              [
                'React',
                'Redux',
                'React Router',
                'Docker',
                'Travis CI'
              ].map((item, idx) => (
                <span
                  className="badge badge-pill badge-primary home__badge"
                  key={idx}
                >
                  {item}
                </span>
              ))
            }
          </p>
          <hr className="my-4" />
          <p>
            Checkout the examples:
          </p>
          <p className="lead">
            <Link
              className="btn btn-primary home__btn-mr"
              to="/super-market"
            >
              Calculation
            </Link>
            <Link
              className="btn btn-secondary home__btn-disabled"
              to="/"
              disabled
            >
              Authentication
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
