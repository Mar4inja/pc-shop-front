import React from 'react';
import styles from './home.module.css'; // Importē CSS moduli
import MultiCardCarousel from '../card-carousel/MultiCardCarousel';


const Home: React.FC = () => {
  return (
    <>
    <div className={styles['content-container']}>
    <MultiCardCarousel/>
    </div>
    <div className={styles['second-content-container']}>
<h3>SECOND</h3>
    </div>
    </>
  );
};

export default Home;
