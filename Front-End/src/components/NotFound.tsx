import { useTheme } from "../context";
import LandingNav from "./LandingNav";

export default function NotFound() {

  const { darkMode } = useTheme();

  return (
    <>
    <LandingNav />
    <div className="mt-20 items-center justify-center flex flex-col gap-2 ">
      <img
        src={darkMode 
          ? "../../public/assets/undraw_landing_dark.svg" 
          : "../../public/assets/undraw_landing_light.svg"}
        className="object-cover w-full lg:w-[450px]"
      />
      <h1 className="font-prompt text-xl ml-8 dark:text-white">
        A página requisitada não foi encontrada.
      </h1>
      <button className="py-4 px-8 font-bold rounded-lg bg-lightblue dark:bg-main text-white  hover:bg-darkblue dark:hover:bg-darkblue" >
        <a href="/">Voltar ao início</a>
      </button>
    </div>
    </>
  );
}
