import React from 'react';
import BibliographySection from '../../../common/sections/Bibliography/Section';

const Section = ({ ensgId, symbol, ...rest }) => (
  <BibliographySection
    keyword={ensgId}
    label={symbol}
    {...{ ensgId, symbol, ...rest }}
  />
);

export default Section;
