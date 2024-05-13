import { ReactNode } from "react";
import NavBar from "./components/NavBar";
import FixedWidget from "./components/FixedWidget";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex dark:text-white gap-12 overflow-hidden h-screen">
      <NavBar />

      <main className="flex w-full flex-grow lg:my-8 p-6 lg:p-0 flex-col overflow-y-scroll">
        {children}
      </main>

      <div className="hidden lg:block overflow-y-scroll mr-12 my-8">
        <FixedWidget />
      </div>
    </div>
  );
};

export default Layout;
