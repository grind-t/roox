import React from "react";
import styles from "./app.module.scss";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className={styles.hello}>
      <Outlet />
    </div>
  );
}
