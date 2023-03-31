import React from "react";
import styles from "./ModalMenu.module.scss";

interface ModalMenuProps {
  children: React.ReactNode;
  active: any;
  setActive: any;
}

const ModalMenu = ({ active, setActive, children }: ModalMenuProps) => {
  return (
    <div
      className={`${active ? styles.modal__active : styles.modal}`}
      onClick={() => setActive(false)}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalMenu;
