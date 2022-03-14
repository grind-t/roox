import { compareStrings } from "./strings";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
  };
  phone: string;
  website: string;
}

export enum SortBy {
  Name,
  City,
  Company,
}

const apiUrl = "https://jsonplaceholder.typicode.com";

export function getUsers(): Promise<User[]> {
  return fetch(`${apiUrl}/users`).then((res) => res.json());
}

export function getSortingProperty(user: User, sortBy: SortBy): string {
  switch (sortBy) {
    case SortBy.City:
      return user.address.city;
    case SortBy.Company:
      return user.company.name;
    default:
      return user.name;
  }
}

export function sortUsers(users: User[], by: SortBy) {
  return users.sort((a, b) => {
    const p1 = getSortingProperty(a, by);
    const p2 = getSortingProperty(b, by);
    return compareStrings(p1, p2);
  });
}
