import React from 'react';
import styles from './home.module.css'; // Importē CSS moduli

// Importē attēlus
import image1 from '../../img/pcs/img_0010_8_3.png';
import image2 from '../../img/pcs/2.png';
import image3 from '../../img/pcs/3.png';
import image4 from '../../img/pcs/img_0016_14.png';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.card_container}>
        <div className={`${styles.card} ${styles.tooltip_container}`}>
          <img src={image1} alt="Image 1" />
          <div className={styles.tooltip}>
            <h3>PC Modelis 1</h3>
            <ul>
              <li><strong>RAM:</strong> 16 GB DDR4</li>
              <li><strong>VRAM:</strong> 6 GB GDDR6</li>
              <li><strong>CPU:</strong> Intel Core i7-9700K</li>
              <li><strong>HDD:</strong> 1 TB HDD</li>
              <li><strong>Motherboard:</strong> ASUS ROG Strix Z390-E</li>
              <li><strong>Power Supply:</strong> 750W</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.card} ${styles.tooltip_container}`}>
          <img src={image2} alt="Image 2" />
          <div className={styles.tooltip}>
            <h3>PC Modelis 2</h3>
            <ul>
              <li><strong>RAM:</strong> 32 GB DDR4</li>
              <li><strong>VRAM:</strong> 8 GB GDDR6</li>
              <li><strong>CPU:</strong> AMD Ryzen 7 5800X</li>
              <li><strong>HDD:</strong> 2 TB HDD</li>
              <li><strong>Motherboard:</strong> MSI MAG B550 TOMAHAWK</li>
              <li><strong>Power Supply:</strong> 850W</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.card} ${styles.tooltip_container}`}>
          <img src={image3} alt="Image 3" />
          <div className={styles.tooltip}>
            <h3>PC Modelis 3</h3>
            <ul>
              <li><strong>RAM:</strong> 16 GB DDR4</li>
              <li><strong>VRAM:</strong> 4 GB GDDR5</li>
              <li><strong>CPU:</strong> Intel Core i5-10400</li>
              <li><strong>HDD:</strong> 500 GB SSD</li>
              <li><strong>Motherboard:</strong> Gigabyte B460M DS3H</li>
              <li><strong>Power Supply:</strong> 600W</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.card} ${styles.tooltip_container}`}>
          <img src={image4} alt="Image 4" />
          <div className={styles.tooltip}>
            <h3>PC Modelis 4</h3>
            <ul>
              <li><strong>RAM:</strong> 64 GB DDR4</li>
              <li><strong>VRAM:</strong> 12 GB GDDR6</li>
              <li><strong>CPU:</strong> AMD Ryzen 9 5950X</li>
              <li><strong>HDD:</strong> 1 TB NVMe SSD</li>
              <li><strong>Motherboard:</strong> ASUS ROG Crosshair VIII Hero</li>
              <li><strong>Power Supply:</strong> 1000W</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
