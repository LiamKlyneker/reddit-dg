import { node } from 'prop-types';

export default function Layout({ children }) {
  return <div>{children}</div>;
}

Layout.propTypes = {
  children: node,
};
