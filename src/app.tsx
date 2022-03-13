import React from "react";
import styles from "./app.module.scss";
import { Outlet } from "react-router-dom";
import PrimaryButton from "./components/primary-button";
import { useSortBy } from "./hooks/users";

export default function App() {
  const [sortBy, setSortBy] = useSortBy();
  const sortOptions = ["по имени", "по городу", "по компании"];

  return (
    <div className={styles.container}>
      <aside className={styles.sidePanel}>
        <h2 className={styles.sidePanelHeading}>Сортировка</h2>
        {sortOptions.map(
          (option, i) =>
            i !== sortBy && (
              <PrimaryButton key={i} type="button" onClick={() => setSortBy(i)}>
                {option}
              </PrimaryButton>
            )
        )}
      </aside>
      <Outlet />
    </div>
  );
}
