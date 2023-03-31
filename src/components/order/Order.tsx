import React, { useState, useEffect } from "react";
import styles from "./Order.module.scss";

const Order = ({ setActive, order, price, select, setOrders, date }) => {
  const [volume, setVolume] = useState<number>();
  const [isError, setIsError] = useState<string>("");

  const createOrder = (e: any) => {
    e.preventDefault();
    setOrders((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        order,
        price,
        select,
        volume,
        // time: `${date.toLocaleDateString() + date.toLocaleTimeString()}`,
        time:
          `${date.toLocaleDateString()}` + " " + `${date.toLocaleTimeString()}`,
      },
    ]);
  };

  return (
    <>
      <div className={styles.content__header}>
        <span>Make order</span>
        <span onClick={() => setActive(false)}>x</span>
      </div>
      <form>
        <div className={styles.content__inner}>
          <div className={styles.content__inner_order}>
            <span style={{ color: order === "BUY" ? "green" : "red" }}>
              {order}
            </span>
            <span>
              {order === "BUY" ? price : (price * 0.998).toFixed(4)} {select}
            </span>
          </div>
          <div className={styles.content__inner_volume}>
            <span>Volume</span>
            <input
              type="number"
              placeholder="Enter a value"
              value={volume}
              pattern="[1-9]"
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
          <div className={styles.content__inner_btn}>
            <button onClick={() => setActive(false)}>Cancel</button>
            <button onClick={(e) => createOrder(e)}>OK</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Order;
