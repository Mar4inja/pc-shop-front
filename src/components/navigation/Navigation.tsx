import React from 'react';
import styles from './navigation.module.css'; // Importē CSS moduli

const Navigation: React.FC = () => {
  return (
    <div className={styles['navigation-container']}>
      {/* Kreisā puse - "Home" */}
      <div className={styles['nav-left']}>
        <a href="#home" className={styles['nav-link']}>Home</a>
      </div>
      
      {/* Labā puse - "Menu" ar dropdown */}
      <div className={styles['nav-right']}>
        <div className={styles['dropdown']}>
          <a href="#menu" className={styles['nav-link']}>Menu</a>
          <div className={styles['dropdown-content']}>
            <a href="#action1">Login</a>
            <a href="#action2">Contact</a>
            <a href="#action3">Settings</a>
            <a href="#action4">Logout</a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Navigation;
