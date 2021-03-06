import React from 'react';
import Typography from '@material-ui/core/Typography';

const BibliographyHtmlText = ({ text }) => {
  return (
    <Typography variant="body2" dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export default BibliographyHtmlText;
