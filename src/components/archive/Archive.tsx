import React, { useEffect, useState } from "react";
import styles from "./Archive.module.scss";
import { orders } from "../orders.data";

const Archive = ({ orders }): JSX.Element => {
  return (
    <div className={styles.content}>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.table__head__row}>
            <th className={styles.table__head__row__text}>Side</th>
            <th className={styles.table__head__row__text}>Price</th>
            <th className={styles.table__head__row__text}>Instrument</th>
            <th className={styles.table__head__row__text}>Volume</th>
            <th className={styles.table__head__row__text}>Timestamp</th>
          </tr>
        </tbody>
        {orders.length ? (
          orders.map((item) => (
            <tr className={styles.table__inner} key={item.id}>
              <td
                className={styles.table__body__text}
                style={{ color: item.order === "BUY" ? "green" : "red" }}
              >
                {item.order}
              </td>
              <td className={styles.table__body__text}>{item.price}</td>
              <td className={styles.table__body__text}>{item.select}</td>
              <td className={styles.table__body__text}>{item.volume}</td>
              <td className={styles.table__body__text}>{item.time}</td>
            </tr>
          ))
        ) : (
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "15px",
            }}
          >
            Здесь пока ничего нет
          </span>
        )}
      </table>
    </div>
  );
};

export default Archive;
