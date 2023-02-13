import Link from "next/link";
import { useAuth } from "../context/AuthContext";

const home = () => {
  // useAuth
  return (
    <div>
      <Link href="/login">로그인</Link>
    </div>
  );
};

export default home;
