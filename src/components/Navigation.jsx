import { AiFillShop } from "react-icons/ai";

function Navigation() {
  return (
    <nav className="rounded-md p-4">
      <h1 className="items-center flex justify-center gap-x-6">
        <AiFillShop className="text-white" />{" "}
        <span className="text-md font-bold text-white">Shopping List</span>
      </h1>
    </nav>
  );
}

export default Navigation;
