import React from "react";
import styles from "./app.module.scss";
import { Outlet } from "react-router-dom";
import PrimaryButton from "./components/primary-button";

export default function App() {
  return (
    <div className={styles.container}>
      <aside className={styles.sidePanel}>
        <h2 className={styles.sidePanelHeading}>Сортировка</h2>
        <PrimaryButton>по городу</PrimaryButton>
        <PrimaryButton>по компании</PrimaryButton>
      </aside>
      <Outlet />
    </div>
  );
}
