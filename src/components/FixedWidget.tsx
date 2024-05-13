import React from "react";
import { artists } from "../mock";
import ArtistCard from "./ArtistCard";

const FixedWidget = () => {
  return (
    <aside className="bg-solid dark:black p-3 overflow-hidden sticky border-4 border-highlight dark:border-highlightDark dark:bg-highlightDark rounded-2xl">
      <div className="flex flex-col items-center gap-5">
        <img className="bg-main w-[512px] h-32" />
        <img className="bg-main w-[512px] h-32" />
        <img className="bg-main w-[512px] h-32" />
        <img className="bg-main w-[512px] h-32" />
        <img className="bg-main w-[512px] h-32" />
        <img className="bg-main w-[512px] h-32" />
        <img className="bg-main w-[512px] h-32" />
        <img className="bg-main w-[512px] h-32" />
        <img className="bg-main w-[512px] h-32" />
      </div>
    </aside>
  );
};

export default FixedWidget;
