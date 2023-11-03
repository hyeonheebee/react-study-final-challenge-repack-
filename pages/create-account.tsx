import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/button";
import Error from "../components/error";
import Input from "../components/input";
import Tab from "../components/Tab";
import useFetching from "../lib/client/useFetching";

interface IAccountForm {
  email?: string;
  phone?: string;
  username: string;
}
export default function App() {
  const AccountURL = "/api/user/account";
  const [postAccount, state] = useFetching(AccountURL);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IAccountForm>();
  const [method, setMethod] = useState<"email" | "phone">("phone");
  const router = useRouter();
  const [alert, setAlert] = useState(false);
  const onEmailClick = () => {
    reset(), setMethod("email");
  };
  const onPhoneClick = () => {
    reset(), setMethod("phone");
  };
  const onValid = (formData: IAccountForm) => {
    if (state.loading) return;
    postAccount(formData);
  };

  useEffect(() => {
    if (state.fetchData?.success && !state.fetchData.user) {
      router.push("/log-in");
    }
    if (state.fetchData?.user) {
      setAlert(true);
    }
  }, [state.fetchData?.success, state.fetchData?.user]);
  return (
    <div className="bg-rose-100">
      {alert && <Error text="please use another Phone or Email"></Error>}
      {errors.phone && <Error text="phone Number is requred"></Error>}
      {errors.email && <Error text="Email is required"></Error>}
      <Tab
        method={method}
        onClickFn={method === "email" ? onPhoneClick : onEmailClick}
      ></Tab>

      <form onSubmit={handleSubmit(onValid)}>
        <Input
          register={register("username", {
            required: false,
          })}
          label="User Name"
          name="username"
          type="text"
          kind="username"
          placeholder="User Name"
        />
        {method === "phone" ? (
          <Input
            register={register("phone", {
              required: "please write down phone number",
            })}
            label="Phone Number"
            name="phone"
            type="number"
            kind="phone"
            placeholder="phone"
            required
          />
        ) : null}

        {method === "email" ? (
          <Input
            register={register("email", {
              required: "please write down email address",
            })}
            label="Email Address"
            name="email"
            type="email"
            kind="email"
            placeholder="email"
            required
          />
        ) : null}
        <Button
          text={
            method === "email" ? "Join with Email " : "Join with Phone-Number"
          }
        ></Button>
      </form>
    </div>
  );
}
