import React, { PureComponent } from 'react';

class About extends PureComponent {
  render() {
    return (
      <div className="tm-about">
        <div className="tm-about__title">
          React Redux Boilerplate
        </div>
        <div className="tm-about__tag">
          <span>React</span>
          <span>Redux</span>
          <span>React Router</span>
          <span>Docker</span>
          <span>Travis CI</span>
        </div>
        <div className="tm-about__github">
          Check it out at <a href="https://github.com/haipham23/react-redux-boilerplate">Github</a>
        </div>
      </div>
    );
  }
}

export default About;
