import { useState } from "react";
export interface IFetchingState {
  loading: boolean;
  fetchData?: {
    success?: boolean;
    user?: object;
    token?: string;
    authorization?: string;
    name?: string;
    userTweet?: object;
    isLike?: boolean;
  };
  fetchError?: object;
}
export default function useFetching(
  url: string,
): [(formData: any) => void, IFetchingState] {
  const [state, setState] = useState<IFetchingState>({
    loading: false,
    fetchData: undefined,
    fetchError: undefined,
  });

  function fetching(formData: any) {
    setState({ ...state, loading: true });
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json().catch(() => {}))
      .then((fetchData) => setState({ ...state, fetchData, loading: false }))
      .catch((fetchError) =>
        setState({ ...state, fetchError, loading: false }),
      );
  }
  return [fetching, state];
}
