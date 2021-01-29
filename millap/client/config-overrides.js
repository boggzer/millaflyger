/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable quotes */
const { override } = require('customize-cra');
const cspHtmlWebpackPlugin = require('csp-html-webpack-plugin');

const cspConfigPolicy = {
  'default-src': "'self'",
  'base-uri': "'self'",
  'object-src': "'none'",
  'script-src': ["'self'"],
  'style-src': ['*', "'unsafe-inline'"],
  'style-src-elem': ['*', "'unsafe-inline'"],
  'img-src': ["'self'", 'https://firebasestorage.googleapis.com'],
  'connect-src': [
    "'self'",
    'https://cognito-identity.eu-central-1.amazonaws.com',
    'https://of655rwde0.execute-api.eu-central-1.amazonaws.com',
  ],
  'manifest-src': ["'self'"],
};

function addCspHtmlWebpackPlugin(config) {
  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new cspHtmlWebpackPlugin(cspConfigPolicy));
  }

  return config;
}

module.exports = {
  webpack: override(addCspHtmlWebpackPlugin),
};
