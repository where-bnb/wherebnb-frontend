"use client";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="웨어비앤비에 오신 것을 환영합니다." subtitle="" />
      <Input
        id="email"
        label="Email"
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
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="구글로 로그인하기"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="깃허브로 로그인하기"
        icon={AiFillGithub}
        onClick={() => {}}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="로그인"
      actionLabel="계속"
      onClose={loginModal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
