import React, { useState } from "react";
import styles from "./Home.module.scss";
import Trading from "../trading/Trading.tsx";
import Archive from "../archive/Archive.tsx";

const Home = () => {
  const [type, setType] = useState<"trading" | "archive">("trading");
  const [orders, setOrders] = useState([]);

  return (
    <>
      <div className={styles.window}>
        <div className={styles.window__hat}>
          <div
            className={`${styles.window__hat_trading} ${
              type === "trading" ? styles.activeTrading : null
            }`}
            onClick={() => {
              setType("trading");
            }}
          >
            <span>Trading</span>
          </div>
          <div
            className={`${styles.window__hat_archive} ${
              type === "archive" ? styles.activeArchive : null
            }`}
            onClick={() => {
              setType("archive");
            }}
          >
            <span>Archive</span>
          </div>
          <div className={styles.window__hat_blank}></div>
        </div>
        {type === "trading" && (
          <Trading orders={orders} setOrders={setOrders} />
        )}
        {type === "archive" && <Archive orders={orders} />}
      </div>
    </>
  );
};

export default Home;
