import { func, shape } from 'prop-types';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: func,
  pageProps: shape(),
};

export default MyApp;
