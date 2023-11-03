import { useRouter } from "next/router";
import useFetching, { IFetchingState } from "./useFetching";

export default function useTweetLike(): [(fn: any) => void, IFetchingState] {
  const router = useRouter();
  const id = router.query.id;
  const [fn, data] = useFetching(`/api/user/tweet/${id}/like`);

  return [fn, data];
}
