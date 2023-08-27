import React from 'react';
import quotesData from './quotes.json';
import { GlassWrapperWithAnimation } from '../styled/GlassStyled';

export const RQGComponent: React.FC = () => {

  const quoteChooser = Math.floor(Math.random() * (quotesData.length));
  const selectQuote = quotesData[quoteChooser]

  return (
    <GlassWrapperWithAnimation>
      <p>Latin: {selectQuote.latin}</p>
      <p>English: {selectQuote.english}</p>
    </GlassWrapperWithAnimation>
  )
}