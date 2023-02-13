import { useRouter } from "next/router";
import { useEffect } from "react";
import { AuthContainter, LoginForm } from "../components";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  // const { user } = useAuth();
  // const { push } = useRouter();
  // useEffect(() => {
  //   if (user) {
  //     push("/users");
  //     return;
  //   }
  // }, [user]);

  return (
    <div>
      <AuthContainter title="로그인" link={{ to: "/register", text: "go to register" }}>
        <LoginForm />
      </AuthContainter>
    </div>
  );
};

export default Login;
