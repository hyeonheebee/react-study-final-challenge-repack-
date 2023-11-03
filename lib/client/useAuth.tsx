import { useState } from "react";
interface IFetchingState {
  loading: boolean;
  fetchData?: {
    success?: boolean;
    user?: object;
    id?: number;
    token?: string;
    authorization?: string;
  };
  fetchError?: object;
}
export default function useAuth(
  url: string
): [(formData: any) => void, IFetchingState] {
  const [state, setState] = useState<IFetchingState>({
    loading: false,
    fetchData: undefined,
    fetchError: undefined,
  });

  function auth(token: any) {
    setState({ ...state, loading: true });
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `${token}`,
      },
      body: JSON.stringify(token),
    })
      .then((response) => response.json().catch(() => {}))
      .then((fetchData) => setState({ ...state, fetchData, loading: false }))
      .catch((fetchError) =>
        setState({ ...state, fetchError, loading: false })
      );
  }

  return [auth, state];
}
