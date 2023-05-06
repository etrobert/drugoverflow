'use client';

import { createContext, useState } from 'react';

type TitleContextType = {
  title: string | null;
  setTitle: (title: string | null) => void;
};

const TitleContext = createContext<TitleContextType>({
  get title(): string | null {
    throw new Error('No title context provider');
  },
  get setTitle(): (title: string | null) => void {
    throw new Error('No title context provider');
  },
});

type Props = {
  children: React.ReactNode;
};

const TitleContextProvider = ({ children }: Props) => {
  const [title, setTitle] = useState<string | null>(null);

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export { TitleContextProvider };
export default TitleContext;
