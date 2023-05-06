'use client';
import { useContext } from 'react';

import TitleContext from './TitleContext';

const Title = () => {
  const { title } = useContext(TitleContext);

  return <h1>{title}</h1>;
};

export default Title;
