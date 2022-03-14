import React, { useMemo } from "react";
import styles from "./user-list.module.scss";
import UserListItem from "./user-list-item";
import Loader from "../../common/loader";
import { useSortBy, useUsers } from "../../../hooks/users";
import { sortUsers } from "../../../lib/users";

export default function UserList() {
  const { data: users, error } = useUsers();
  const [sortBy] = useSortBy();

  const sortedUsers = useMemo(() => {
    if (!users) return;
    return sortUsers(users, sortBy);
  }, [users, sortBy]);

  if (error) return <div>Ошибка 😢</div>;

  if (!users) return <Loader />;

  return (
    <ul className={styles.container}>
      {sortedUsers.map((user: any) => (
        <UserListItem
          key={user.id}
          id={user.id}
          name={user.name}
          city={user.address.city}
          company={user.company.name}
        />
      ))}
    </ul>
  );
}
