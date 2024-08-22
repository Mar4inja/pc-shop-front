import React from "react";
import styles from "./home.module.css"; // Importē CSS moduli
import MultiCardCarousel from "../card-carousel/MultiCardCarousel";
import discountImage from "../../img/quality.png";
import pc from "../../img/buyPC.png";
import laptop from "../../img/buyLaptop.png";
import tablets from "../../img/buyTablet.png";
import andGetVRam from "../../img/andGetVRAM.png"





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
            <img className={styles["laptop"]} src={laptop} alt="Laptop" />
          </div>
          <div className={styles["card_three"]}>

          </div>
          <div className={styles["card_four"]}>
            <img className={styles["pc"]} src={pc} alt="Pc" />
          </div>
          <div className={styles["card_five"]}>

          </div>
          <div className={styles["card_six"]}>

          </div>
        </div>
        <img className={styles["vram"]} src={andGetVRam} alt="VRAM" />
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
