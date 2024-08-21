import React from "react";
import styles from "./home.module.css"; // Importē CSS moduli
import MultiCardCarousel from "../card-carousel/MultiCardCarousel";
import discountImage from "../../img/emp-discounts.png";
// import buyPc from "../../img/buyPC.png";
// import buyLaptop from "../../img/buyLaptop.png";
// import buyTablet from "../../img/buyTablet.png";
import andGetVRam from "../../img/andGetVRAM.png"





const Home: React.FC = () => {
  return (
    <div className={styles["scrollable-container"]}>
      <div className={styles["content-container"]}>
        <MultiCardCarousel />
        <img className={styles["discount_icon"]} src={discountImage} alt="Discount" />
      </div>
      <div className={styles["second-content-container"]}>
        {/* <img className={styles["pc"]} src={buyPc} alt="PC" />
        <img className={styles["laptop"]} src={buyLaptop} alt="LAPTOP" />
        <img className={styles["tablet"]} src={buyTablet} alt="TABLET" /> */}
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
