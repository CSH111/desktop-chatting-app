import { AuthContainter, LoginForm } from "../components";

const Login = () => {
  return (
    <div>
      <AuthContainter title="로그인" link={{ to: "/register", text: "go to register" }}>
        <LoginForm />
      </AuthContainter>
    </div>
  );
};

export default Login;
