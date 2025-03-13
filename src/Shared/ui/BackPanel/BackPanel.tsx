import React from "react";
import styles from "./BackPanel.module.scss";

interface BackPanelProps {
  onClickFunction: () => void;
}
const BackPanel: React.FC<BackPanelProps> = ({ onClickFunction }) => {
  return (
    <menu className={styles["profile-back-panel"]}>
      <button
        type="button"
        className={styles["profile-back-panel__button"]}
        onClick={onClickFunction}
      >
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="13"
            y="6.80005"
            width="11"
            height="1.6"
            transform="rotate(-180 13 6.80005)"
            fill="white"
          />
          <path d="M6 11L2 6L6 1" stroke="white" strokeWidth="1.6" />
        </svg>
      </button>
    </menu>
  );
};

export default BackPanel;
