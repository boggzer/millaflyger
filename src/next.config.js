const path = require('path');


module.exports = {
  env: {
    PUBLIC_URL: '',
  },
  // Remove this to leverage Next.js' static image handling
  // read more here: https://nextjs.org/docs/api-reference/next/image
  images: {
    disableStaticImages: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./_variables.scss";`,
  },
  webpack(config) {
    config.resolve = {
      ...config.resolve,
      extensions: ['...', '.tsx', '.ts', '.module.scss'],
      alias: {
        ...config.resolve.alias,
        '@components': path.resolve(__dirname, 'components/'),
        '@styles': path.resolve(__dirname, 'styles/'),
        '@types': path.resolve(__dirname, 'types/'),
        '@utils': path.resolve(__dirname, 'utils/'),
      },
      modules: [
        path.resolve(__dirname),
        path.resolve(__dirname, './components/'),
        path.resolve(__dirname, './styles/'),
        'node_modules',
      ],
    };
    return config;
  },
};
