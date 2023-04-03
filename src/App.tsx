import styles from "./App.module.scss";
import React from "react";
import Home from "./components/home/Home.tsx";

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__inner}>
          <div className={styles.container__inner_info}>
            <p>Тестовое задание для JS разработчика</p>
          </div>
          <Home />
        </div>
      </div>
    </>
  );
};

export default App;
