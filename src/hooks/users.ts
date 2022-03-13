import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import useSWR from "swr";
import { getUsers, SortBy } from "../lib/users";

export function useSortBy(): [SortBy, (v: SortBy) => void] {
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get("sort-by");
  const sortBy: SortBy = Number.parseInt(param) || 0;
  const setSortBy = useCallback(
    (value: SortBy) => setSearchParams({ "sort-by": value.toString() }),
    [setSearchParams]
  );
  return [sortBy, setSortBy];
}

export function useUsers() {
  return useSWR("users", getUsers);
}
