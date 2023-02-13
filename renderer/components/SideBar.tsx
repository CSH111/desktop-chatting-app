import { useAuth } from "../context/AuthContext";
// import AuthButton from './AuthButton';

const SideBar = () => {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <div className="container">{user && <button onClick={handleLogout}>로그아웃</button>}</div>
      <style jsx>{`
        .container {
          height: 100vh;
          background-color: #e9ebec;
        }
      `}</style>
    </>
  );
};

export default SideBar;
