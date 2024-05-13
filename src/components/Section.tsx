import { ReactNode } from "react";
import SearchBar from "./SearchBar";

interface Props {
  title: string;
  description: string;
  searchFn?: () => void;
  children: ReactNode;
}

const Section = ({ title, description, searchFn, children }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex items-center justify-between mr-3">
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold font-montserrat dark:text-white">
              {title}
            </h1>

            <p className="flex text-lg items-center  dark:text-white font-semibold">
              {description}
            </p>
          </div>
          <SearchBar />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Section;
