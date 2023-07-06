import { IoMdAddCircle } from "react-icons/io";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";

const List = ({ todos, setTodos }) => {
  const handleIncrement = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.key === key) {
          return {
            ...todo,
            count: todo.count + 1,
          };
        }
        return todo;
      });
    });
  };

  const handleDecrement = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.key === key) {
          return {
            ...todo,
            count: todo.count - 1,
          };
        }
        return todo;
      });
    });
  };

  const handleDelete = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  return (
    <div>
      {todos.length > 0 ? (
        <div>
          {todos.map((todo) => (
            <div
              className="text-white flex items-center justify-between"
              key={todo.id}
            >
              <div className="flex items-center">
                <button onClick={() => handleDelete(todo.key)}>
                  <RiDeleteBin2Line size={24} className="hover:text-red-500" />
                </button>
                <p className="ml-4">{todo.title}</p>
              </div>
              <div className="flex items-center">
                <div className="bg-white p-1 text-center place-items-center rounded-sm mr-6 opacity-90">
                  {/* Totals */}
                  <span className="text-gray-900 font-bold p-2">
                    {todo.count}
                  </span>
                </div>
                <div>
                  {/* Add and remove */}
                  <button
                    className="m-4"
                    onClick={() => handleDecrement(todo.key)}
                  >
                    <AiOutlineMinusCircle
                      size={24}
                      className="hover:text-red-500"
                    />
                  </button>
                  <button onClick={() => handleIncrement(todo.key)}>
                    <IoMdAddCircle size={24} className="hover:text-green-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-white my-3">Data Kosong</div>
      )}
    </div>
  );
};

export default List;
