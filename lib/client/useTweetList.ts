import useSWR from "swr";

export default function useTweetList() {
  const { data, mutate } = useSWR("/api/user/tweet");

  return { data, mutate };
}
