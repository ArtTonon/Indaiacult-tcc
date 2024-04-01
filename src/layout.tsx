import React from "react";
import { ReactNode } from "react";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen ">
      <NavBar />

      <div className="overflow-x-hidden flex flex-col w-full">{children}</div>
    </div>
  );
};

export default Layout;
