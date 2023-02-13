import { AuthContainter } from "../components";
import RegisterForm from "../components/RegisterForm";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  // console.log(user)
  // const

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
