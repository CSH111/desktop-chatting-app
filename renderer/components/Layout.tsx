import { ReactNode } from "react";

interface LayoutProps {
  side: ReactNode;
  main: ReactNode;
}
const Layout = ({ side, main }: LayoutProps) => {
  return (
    <>
      <div className="container">
        {side}
        {main}
      </div>
      <style jsx>{`
        .container {
          display: flex;
        }
      `}</style>
    </>
  );
};

export default Layout;
