import 'promise-polyfill/src/polyfill';

if (window.fetch) {
  import('./App');
} else {
  import('react-app-polyfill/ie9').then(() => {
    import('./App').then((module) => module.default());
  });
}
