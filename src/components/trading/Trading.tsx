import React, { useEffect, useState } from "react";
import ModalMenu from "../modalMenu/ModalMenu.tsx";
import Order from "../order/Order.tsx";
import styles from "./Trading.module.scss";

const options = [
  { id: 1, value: "USD/CAD" },
  { id: 2, value: "USD/RUB" },
  { id: 3, value: "USD/EUR" },
];

const Trading = ({ orders, setOrders }): JSX.Element => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [order, setOrder] = useState("");
  const [select, setSelect] = useState<string>("USD/CAD");
  const [price, setPrice] = useState<number>(1.5766);

  const [date, setDate] = useState(new Date());
  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    let newPrice = setInterval(
      () => setPrice(Math.random().toFixed(4) * 2),
      3000
    );
    return function cleanup() {
      clearInterval(newPrice);
    };
  }, []);

  useEffect(() => {
    console.log(orders, "orders");
  }, [orders]);

  return (
    <>
      <div className={styles.content}>
        <div className={styles.content__time}>
          <p>{date.toLocaleTimeString()}</p>
        </div>
        <div className={styles.content__select}>
          <select onChange={(e) => setSelect(e.target.value)}>
            {options.map((item) => (
              <option key={item.id} value={item.value}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.content__buttons}>
          <div
            className={styles.content__buttons_buy}
            onClick={() => {
              setIsShowModal(true);
              setOrder("BUY");
            }}
          >
            <span>BUY</span>
            <span>{price}</span>
          </div>
          <div
            className={styles.content__buttons_sell}
            onClick={() => {
              setIsShowModal(true);
              setOrder("SELL");
            }}
          >
            <span>SELL</span>
            <span>{(price * 0.998).toFixed(4)}</span>
          </div>
        </div>
      </div>
      {isShowModal && (
        <ModalMenu active={isShowModal} setActive={() => setIsShowModal(false)}>
          <Order
            setActive={() => setIsShowModal(false)}
            order={order}
            price={price}
            select={select}
            date={date}
            setOrders={setOrders}
          />
        </ModalMenu>
      )}
    </>
  );
};

export default Trading;
