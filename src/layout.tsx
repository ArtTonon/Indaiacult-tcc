import React from "react";
import { ReactNode } from "react";
import NavBar from "./components/NavBar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-screen max-h-max bg-whiteModeBg dark:bg-darkModeBg min-h-screen">
      <NavBar />

      <main className="overflow-x-hidden flex flex-col w-full py-5 px-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
