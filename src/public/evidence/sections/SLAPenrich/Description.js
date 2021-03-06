import React from 'react';

const Description = ({ target, disease }) => (
  <React.Fragment>
    Associated pathways between <strong>{target.symbol}</strong> and{' '}
    <strong>{disease.name}</strong>.
  </React.Fragment>
);

export default Description;
