import React, { useMemo } from "react";
import styles from "./user-list.module.scss";
import UserListItem from "./user-list-item";
import Loader from "../../common/loader";
import { compareStrings } from "../../../utils/strings";
import { useSortBy, useUsers } from "../../../hooks/users";
import { SortBy } from "../../../lib/users";

export default function UserList() {
  const { data: users, error } = useUsers();
  const [sortBy] = useSortBy();

  const sortedUsers = useMemo(() => {
    if (!users) return;
    let compareFn: (a: any, b: any) => number;
    if (sortBy === SortBy.City)
      compareFn = (a, b) => compareStrings(a.address.city, b.address.city);
    else if (sortBy === SortBy.Company)
      compareFn = (a, b) => compareStrings(a.company.name, b.company.name);
    else compareFn = (a, b) => compareStrings(a.name, b.name);
    return users.sort(compareFn);
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
