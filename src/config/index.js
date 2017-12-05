const isProd = process.env.REACT_APP_BUILD_ENV === 'production';

const config = {
  authUrl: isProd
    ? process.env.REACT_APP_AUTH_PROD
    : process.env.REACT_APP_AUTH_DEV,

  contentUrl: isProd
    ? process.env.REACT_APP_CONTENT_PROD
    : process.env.REACT_APP_CONTENT_DEV
};

export default config;
