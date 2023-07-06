import { BiSortAlt2 } from "react-icons/bi";
import { MdOutlineClear } from "react-icons/md";

const Menu = ({ todos }) => {
  const handleSort = () => {};

  return (
    <>
      {todos.length > 1 ? (
        <div className="flex justify-between">
          <button className="flex items-center text-white hover:text-green-500">
            <BiSortAlt2 /> Sort
          </button>
          <button className="flex items-center text-red-400">
            <MdOutlineClear className="mr-2" /> Clear All
          </button>
        </div>
      ) : (
        <div className="flex justify-between">
          <button className="flex items-center text-gray-700">
            <BiSortAlt2 /> Sort
          </button>
          <button className="flex items-center text-gray-700">
            <MdOutlineClear className="mr-2" /> Clear All
          </button>
        </div>
      )}
    </>
  );
};

export default Menu;
