import React from 'react';

import BibliographySummary from '../../../common/sections/Bibliography/Summary';

const Summary = ({ efoId, ...rest }) => (
  <BibliographySummary keyword={efoId} {...rest} />
);

export default Summary;
