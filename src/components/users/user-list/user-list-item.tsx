import React from "react";
import { Link } from "react-router-dom";
import styles from "./user-list-item.module.scss";

interface EntryProps {
  name: string;
  value: string;
}

function Entry({ name, value }: EntryProps) {
  return (
    <div>
      <dt className={styles.entryName}>{name}</dt>
      <dd className={styles.entryValue}>{value}</dd>
    </div>
  );
}

export interface UserListItemProps {
  id: number;
  name: string;
  city: string;
  company: string;
}

export default function UserListItem({
  id,
  name,
  city,
  company,
}: UserListItemProps) {
  return (
    <li className={styles.container}>
      <dl className={styles.entryList}>
        <Entry name="ФИО" value={name} />
        <Entry name="город" value={city} />
        <Entry name="компания" value={company} />
      </dl>
      <Link to={`/${id}`} className={styles.profileLink}>
        Подробнее
      </Link>
    </li>
  );
}
