import { BiSortAlt2 } from "react-icons/bi";
import { MdOutlineClear } from "react-icons/md";

const Menu = ({ todos }) => {
  const handleSort = () => {};

  return (
    <>
      {todos.length > 0 ? (
        <div className="flex justify-between">
          <button className="flex items-center text-white border border-white p-2 rounded-md hover:bg-white hover:text-slate-900">
            <BiSortAlt2 /> Sort
          </button>
          <button className="flex items-center text-red-400">
            <MdOutlineClear className="mr-2" /> Clear All
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Menu;
