"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";
import * as actions from "@/actions";

function showMessage(messasge) {
  if (messasge === "no_id") {
    return "아이디를 입력하세요.";
  }
  if (messasge === "no_name") {
    return "닉네임을 입력하세요.";
  }
  if (messasge === "no_password") {
    return "비밀번호를 입력하세요.";
  }
  if (messasge === "user_exists") {
    return "이미 사용 중인 아이디입니다.";
  }
  return "에러가 발생하였습니다.";
}

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const action = handleSubmit(async (data) => {
    setIsLoading(true);

    const response = await actions.createUser(data);
    console.log("response!", response);

    if (response.status === 200) {
      registerModal.onClose();
      toast.success("성공적으로 회원가입이 되었습니다.");
    } else {
      setMessage(showMessage(response.data));
    }

    setIsLoading(false);
  });

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to WhereBnb" subtitle="Create an account!" />
      <Input
        id="email"
        label="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {message && <p className="text-sm text-error">{message}</p>}
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className=" justify-center flex flex-row items-center gap-2">
          <div>Already have an account?</div>
          <div
            onClick={registerModal.onClose}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <form action={action}>
      <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Register"
        actionLabel="Continue"
        onClose={registerModal.onClose}
        // onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </form>
  );
};

export default RegisterModal;
