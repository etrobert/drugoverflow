import React from 'react';

import styles from './List.module.css';

type Props = {
  children: React.ReactNode;
};

const List = ({ children }: Props) => (
  <ul className={styles.list}>
    {React.Children.map(children, (child) => (
      <li className={styles.item}>{child}</li>
    ))}
  </ul>
);

export default List;
