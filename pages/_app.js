import { func, shape } from 'prop-types';
import { Provider } from 'react-redux';
import '../styles/default.css';

import createReduxStore from '../modules/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={createReduxStore()}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.propTypes = {
  Component: func,
  pageProps: shape(),
};

export default MyApp;
