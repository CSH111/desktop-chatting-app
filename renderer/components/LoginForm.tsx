import { useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { register, handleSubmit, setFocus } = useForm<FormValues>();
  const { login } = useAuth();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { email, password } = data;
    try {
      await login(email, password);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setFocus("email");
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="control-box">
          <label htmlFor="email">이메일</label>
          <AuthInput type="email" id="email" {...register("email")} />
        </div>
        <div className="control-box">
          <label htmlFor="password">비밀번호</label>
          <AuthInput type="password" id="password" {...register("password", { required: "" })} />
        </div>
        <AuthButton type="submit">로그인</AuthButton>
      </form>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .control-box {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
      `}</style>
    </>
  );
};

export default LoginForm;
