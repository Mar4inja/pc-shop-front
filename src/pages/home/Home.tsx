import React from "react";
import styles from "./home.module.css"; // Importē CSS moduli
import MultiCardCarousel from "../../components/card-carousel/MultiCardCarousel";
import discountImage from "../../img/quality.png";
import pc from "../../img/buyPC.png";
import laptop from "../../img/buyLaptop.png";
import tablets from "../../img/buyTablet.png";
import headphones from "../../img/headphone.png";






const Home: React.FC = () => {
  return (
    <div className={styles["scrollable-container"]}>
      <div className={styles["content-container"]}>
        <MultiCardCarousel />
        <img className={styles["discount_icon"]} src={discountImage} alt="Discount" />
      </div>
      <div className={styles["second-content-container"]}>
        <div className={styles["card_container"]}>
          
          <div className={styles["card_one"]}>
            <h3>Tablets</h3>
            <img className={styles["tablets"]} src={tablets} alt="Tablets" />
          </div>
          <div className={styles["card_two"]}>
          <h3>Laptops</h3>
            <img className={styles["laptop"]} src={laptop} alt="Laptop" />
          </div>
          <div className={styles["card_three"]}>

          </div>
          <div className={styles["card_four"]}>
          <h3>Pc's</h3>
            <img className={styles["pc"]} src={pc} alt="Pc" />
          </div>
          <div className={styles["card_five"]}>
            <h3>Headphones</h3>
            <img className={styles["headphones"]} src={headphones} alt="" />
          </div>
          <div className={styles["card_six"]}>

          </div>
        </div>
      
      </div>
      <div className={styles["third-content-container"]}>
        <h3>THIRD</h3>
      </div>
      <div className={styles["fourth-content-container"]}>
        <h3>FOURTH</h3>
      </div>
    </div>
  );
};

export default Home;
