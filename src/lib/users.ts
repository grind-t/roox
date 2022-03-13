export enum SortBy {
  Name,
  City,
  Company,
}

const apiUrl = "https://jsonplaceholder.typicode.com";

export function getUsers(): Promise<any[]> {
  return fetch(`${apiUrl}/users`).then((res) => res.json());
}
