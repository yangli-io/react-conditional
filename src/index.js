import React from 'react';

const Conditional = ({ test, children }) => {
  if (test) return children;
  return null;
};

export default Conditional