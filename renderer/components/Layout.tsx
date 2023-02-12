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

        <div className="main">{main}</div>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 300px 1fr;
        }
        .main {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default Layout;
