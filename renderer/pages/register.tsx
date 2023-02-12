import Link from "next/link";
import { AuthContainter } from "../components";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <>
      <AuthContainter title="회원가입" link={{ to: "/login", text: "go to login" }}>
        <RegisterForm />
      </AuthContainter>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default Register;
