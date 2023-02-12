import Link from "next/link";
import { ReactNode } from "react";

type AuthContainterProps = {
  children: ReactNode;
  link?: LinkData;
  title?: string;
};

type LinkData = {
  to: string;
  text: string;
};
const AuthContainter = ({ children, title, link }: AuthContainterProps) => {
  return (
    <>
      <div className="container">
        <h2>{title}</h2>
        {children}
        <Link href={link.to}>
          <a>{link.text}</a>
        </Link>
      </div>
      <style jsx>{`
        .container {
          background-color: #e9ebec;
          width: 400px;
          display: flex;
          flex-direction: column;
          padding: 20px;
          gap: 10px;
          h2 {
            font-size: 25px;
            font-weight: bold;
          }
          a {
            margin: 10px auto;
          }
        }
      `}</style>
    </>
  );
};

export default AuthContainter;
