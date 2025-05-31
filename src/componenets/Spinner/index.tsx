import React from 'react';
import styles from './Spinner.module.scss';

const Spinner: React.FC = () => {
  return <div className={styles.overlay}><div className={styles.spinner} /></div>;
};

export default Spinner;
