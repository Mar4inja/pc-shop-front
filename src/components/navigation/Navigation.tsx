import React from 'react';
import styles from './navigation.module.css'; // Importē CSS moduli

const Navigation: React.FC = () => {
  return (
    <div className={styles['navigation-container']}>
      <div className={styles['nav-links']}>
        <a href="#home" className={styles['nav-link']}>Home</a>
        <a href="#contact" className={styles['nav-link']}>Contact</a>
        <div className={styles['dropdown']}>
          <a href="#menu" className={styles['nav-link']}>Menu</a>
          <div className={styles['dropdown-content']}>
            <a href="#action1">Action 1</a>
            <a href="#action2">Action 2</a>
            <a href="#action3">Action 3</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
