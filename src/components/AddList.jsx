import { BiCartAdd } from "react-icons/bi";
import { useState } from "react";

const AddList = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      key: Math.random().toString(),
      title: value,
      count: 1,
    };
    addTodo(newTodo);
    setValue("");
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="py-4">
      <form
        className="flex gap-x-4 p-2 bg-white rounded-md justify-between"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="bg-none ml-2 focus:outline-none"
          placeholder="Add New Item"
          value={value}
          onChange={handleInputChange}
          required
        />
        <button className="bg-orange-400 rounded-md p-2 hover:bg-orange-600 flex items-center">
          <span className="mx-3">
            <BiCartAdd />
          </span>
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddList;
