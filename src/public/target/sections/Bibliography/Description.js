import React from 'react';

const Description = ({ symbol }) => (
  <React.Fragment>
    Scientific literature on <strong>{symbol}</strong>. The list of publications
    is generated by text mining PubMed abstracts with Natural Language
    Processing (NLP).
  </React.Fragment>
);

export default Description;
