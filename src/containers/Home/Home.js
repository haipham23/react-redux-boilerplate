import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { setLanguage } from 'redux-i18n';
import classNames from 'classnames';

const tags = [
  'React',
  'Redux',
  'React Router',
  'redux-i18n',
  'Docker',
  'Travis CI'
];

class Home extends Component {
  render() {
    const { t } = this.context;
    const { lang, rSetLanguage } = this.props;

    const enBtnClass = classNames('btn btn-primary', { active: lang === 'en' });
    const viBtnClass = classNames('btn btn-primary', { active: lang === 'vi' });

    return (
      <div className="container home">
        <div className="jumbotron">
          <h1 className="display-3">
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
              onClick={() => rSetLanguage('en')}
            >
              {t('english')}
            </button>
            <button
              type="button"
              className={viBtnClass}
              onClick={() => rSetLanguage('vi')}
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

Home.propTypes = {
  lang: PropTypes.string.isRequired,
  rSetLanguage: PropTypes.func.isRequired
};

Home.contextTypes = {
  t: PropTypes.func
};

const mapStateToProps = state => ({
  lang: state.i18nState.lang
});

const mapDispatchToProps = dispatch => ({
  rSetLanguage: bindActionCreators(setLanguage, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
