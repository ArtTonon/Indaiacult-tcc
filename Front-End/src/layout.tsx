import { ReactNode } from "react";
import NavBar from "./components/NavBar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex dark:text-white  overflow-hidden h-screen">
      <NavBar />

      <main className="flex w-full lg:my-8 flex-col overflow-y-scroll">
        {children}
      </main>
    </div>
  );
};

export default Layout;
