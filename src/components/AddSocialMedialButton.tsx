import { FaPlus } from "react-icons/fa6";

const AddSocialMedialButton = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <button className=" rounded-full py-3 px-3  bg-darkblue dark:bg-lightblue">
        <FaPlus className="text-white" />
      </button>
      <h1 className="dark:text-white">Adicionar outros Links</h1>
    </div>
  );
};

export default AddSocialMedialButton;
