import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";

type FormValues = {
  email: string;
  name: string;
  password: string;
  pwConfirm: string;
};

const RegisterFrom = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
  } = useForm<FormValues>({ mode: "onChange" });
  const { user, register: signUp } = useAuth();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { email, password, name } = data;
    try {
      await signUp(email, password);
    } catch (err) {
      console.log(err);
    }
    console.log(data);
    console.log(errors);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="control-box">
          <label>이메일</label>
          <AuthInput
            type="email"
            {...register("email", {
              required: "이메일을 입력하세요",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "올바른 형식의 이메일을 입력하세요",
              },
            })}
          />
          <p className="error-msg">{errors.email?.message} </p>
        </div>
        <div className="control-box">
          <label>이름</label>
          <AuthInput
            type="text"
            {...register("name", {
              required: "사용자 이름을 입력하세요",
              minLength: { value: 2, message: "2글자 이상 입력하세요" },
            })}
          />
          <p className="error-msg">{errors.name?.message} </p>
        </div>
        <div className="control-box">
          <label>비밀번호</label>
          <AuthInput
            type="password"
            {...register("password", {
              required: "비밀번호를 입력하세요",
              pattern: {
                value: /(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,}).*$/,
                message: "8자 이상의 영문+숫자 조합을 입력하세요",
              },
            })}
          />

          <p className="error-msg">{errors.password?.message} </p>
        </div>
        <div className="control-box">
          <label>비밀번호 확인</label>
          <AuthInput
            type="pwConfirm"
            {...register("pwConfirm", {
              required: "비밀번호를 다시 입력하세요",
              validate: {
                check: (val) => {
                  if (getValues("password") !== val) {
                    return "비밀번호가 일치하지 않습니다.";
                  }
                },
              },
            })}
          />
          <p className="error-msg">{errors.pwConfirm?.message} </p>
        </div>
        <AuthButton type="submit">회원가입</AuthButton>
      </form>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .control-box {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        p {
          align-self: flex-end;
          margin-right: 5px;
          font-size: 14px;
          font-weight: bold;
          color: red;
          min-height: 20px;
        }
      `}</style>
    </>
  );
};

export default RegisterFrom;
