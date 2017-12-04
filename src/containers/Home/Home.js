import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Model from './HomeModel';
import tags from '../../constants/tags';

class Home extends Component {
  render() {
    const { t } = this.context;
    const { lang, setLanguage } = this.props;

    const enBtnClass = classNames(
      'btn',
      { 'btn-primary': lang === 'en', 'btn-outline-primary': lang !== 'en' }
    );

    const viBtnClass = classNames(
      'btn',
      { 'btn-primary': lang === 'vi', 'btn-outline-primary': lang !== 'vi' }
    );

    return (
      <div className="container home">
        <div className="jumbotron">
          <h1 className="display-4">
            {t('header')}
          </h1>
          <p className="lead">
            {t('check_it_out')}
            <a
              className="home__btn-gh"
              href="https://github.com/haipham23/react-redux-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('github')}
            </a>
          </p>
          <p>
            {
              tags.map((item, idx) => (
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
            {t('multi_lang_example')}
          </p>
          <div className="lead btn-group home__btn-lang" role="group">
            <button
              type="button"
              className={enBtnClass}
              onClick={() => setLanguage('en')}
            >
              {t('english')}
            </button>
            <button
              type="button"
              className={viBtnClass}
              onClick={() => setLanguage('vi')}
            >
              {t('vietnamese')}
            </button>
          </div>
          <p className="home__other-examples">
            {t('check_out_example')}
          </p>
          <p className="lead">
            <Link
              className="btn btn-primary home__btn-mr"
              to="/super-market"
            >
              {t('calculation')}
            </Link>
            <Link
              className="btn btn-primary"
              to="/login"
              disabled
            >
              {t('auth')}
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

Home.propTypes = Model.propTypes;
Home.contextTypes = Model.contextTypes;

export default compose(
  connect(
    Model.mapStateToProps,
    Model.mapDispatchToProps
  )
)(Home);
