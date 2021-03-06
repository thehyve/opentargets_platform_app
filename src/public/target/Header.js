import React from 'react';

import Header from '../common/Header';
import TargetIcon from '../../icons/TargetIcon';
import GeneticsLink from './GeneticsLink';
import Ensembl from './externalLinks/Ensembl';
import UniProt from './externalLinks/UniProt';
import GeneCards from './externalLinks/GeneCards';
import HGNC from './externalLinks/HGNC';
import TEP from './externalLinks/TEP';
import CRISPRdepmap from './externalLinks/CRISPRdepmap';

const TargetHeader = ({ ensgId, uniprotId, symbol, name }) => (
  <Header
    title={symbol}
    subtitle={name}
    Icon={TargetIcon}
    externalLinks={
      <React.Fragment>
        <Ensembl ensgId={ensgId} first />
        <UniProt uniprotId={uniprotId} />
        <GeneCards symbol={symbol} />
        <HGNC symbol={symbol} />
        <CRISPRdepmap symbol={symbol} />
        <TEP ensgId={ensgId} symbol={symbol} />
      </React.Fragment>
    }
    rightContent={<GeneticsLink ensgId={ensgId} symbol={symbol} />}
  />
);

export default TargetHeader;
