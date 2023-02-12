import React from "react";

const AuthButton = ({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <>
      <button {...props}></button>
      <style jsx>{`
        button {
          height: 35px;
        }
      `}</style>
    </>
  );
};

export default AuthButton;
