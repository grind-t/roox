import React from "react";
import { Link } from "react-router-dom";
import styles from "./user-card.module.scss";

interface UserCardEntryProps {
  name: string;
  value: string;
}

function UserCardEntry({ name, value }: UserCardEntryProps) {
  return (
    <div>
      <dt className={styles.entryName}>{name}</dt>
      <dd className={styles.entryValue}>{value}</dd>
    </div>
  );
}

export interface UserCardProps {
  id: number;
  name: string;
  city: string;
  company: string;
}

export default function UserCard({ id, name, city, company }: UserCardProps) {
  return (
    <div className={styles.container}>
      <dl className={styles.entryList}>
        <UserCardEntry name="ФИО" value={name} />
        <UserCardEntry name="город" value={city} />
        <UserCardEntry name="компания" value={company} />
      </dl>
      <Link to={`/${id}`} className={styles.profileLink}>
        Подробнее
      </Link>
    </div>
  );
}
