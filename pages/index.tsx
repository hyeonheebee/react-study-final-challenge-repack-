import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Input from "../components/input";
import List from "../components/list";
import Navigator from "../components/navigator";
import SmallButton from "../components/smallButton";

import useFetching from "../lib/client/useFetching";
import useTweetList from "../lib/client/useTweetList";
import { deleteCookie } from "../lib/client/utils";

interface ITextForm {
  text: string;
  like?: boolean;
}
export default function App() {
  const [cookie, setCookie] = useState<string | undefined>("");
  const [tokenFn, mainState] = useFetching("/api/user/main");
  const [tweetFn, userTweet] = useFetching("/api/user/tweet");
  const { data: tweets, mutate } = useTweetList();

  const router = useRouter();
  const { register, handleSubmit } = useForm<ITextForm>();

  const onValid = (data: ITextForm) => {
    tweetFn({ data, user: mainState.fetchData?.user });
  };

  useEffect(() => {
    setCookie(document.cookie);
    tokenFn(cookie);
    mutate(false);
    if (mainState.fetchData?.success && !cookie) {
      router.push("/log-in");
      setCookie("");
    }
  }, [router, mainState.fetchData?.success, userTweet]);
  const onLogoutClick = () => {
    deleteCookie();
    router.push("/log-in");
  };
  return (
    <div>
      <Navigator onClickfn={onLogoutClick} />
      {mainState.fetchData?.user ? (
        <>
          <span className="text-4xl ml-2 text-teal-700 font-bold font-span">
            {mainState.fetchData?.name}
            <span className="text-2xl ml-2 text-red-500">
              님의
              <span className="text-4xl text-teal-700"> 생각</span>을
              기록해보세요 💚
            </span>
          </span>
          <form onSubmit={handleSubmit(onValid)}>
            <div className="mt-4 flex w-full relative justify-center  font-marker text-sm">
              <Input
                register={register("text", {
                  required: false,
                })}
                label="Tweets"
                name="text"
                type="text"
                kind="text"
                placeholder="지금 무슨 생각을 하고 있나요?"
              />
              <SmallButton text="기록하기"></SmallButton>
            </div>
          </form>
        </>
      ) : (
        <span>please waiting..</span>
      )}
      {tweets ? (
        <div>
          {tweets?.tweets?.map((tweet: any) => (
            <div className="font-span text-2xl text-rose-900">
              <List id={tweet?.id} text={tweet?.tweet} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
