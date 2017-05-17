// npm packages
import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../components/footer';

export default function app({children}) {
  return (
    <div className="container">
      {children}
      <Footer />
    </div>
  );
}

app.propTypes = {
  children: PropTypes.object,
};
app.defaultProps = {
  children: {},
};
