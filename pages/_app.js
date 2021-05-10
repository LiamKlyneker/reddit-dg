import { func, shape } from 'prop-types';
import '../styles/default.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: func,
  pageProps: shape(),
};

export default MyApp;
