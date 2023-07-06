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

  const getHandleCount = () => {
    const totalCounts = todos.reduce((total, todos) => {
      return total + todos.count;
    }, 0);
    return totalCounts;
  };

  return (
    <div>
      <div className="overflow-y-auto h-[400px]">
        {todos.length > 0 ? (
          <div>
            {todos.map((todo, index) => (
              <div
                className="text-white flex items-center justify-between"
                key={index}
              >
                <div className="flex items-center">
                  <button onClick={() => handleDelete(todo.key)}>
                    <RiDeleteBin2Line
                      size={24}
                      className="hover:text-red-500"
                    />
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
                    {todo.count < 2 ? (
                      <button
                        className="m-4"
                        onClick={() => handleDecrement(todo.key)}
                        disabled
                      >
                        <AiOutlineMinusCircle
                          size={24}
                          className="text-gray-400"
                        />
                      </button>
                    ) : (
                      <button
                        className="m-4"
                        onClick={() => handleDecrement(todo.key)}
                      >
                        <AiOutlineMinusCircle
                          size={24}
                          className="hover:text-red-500"
                        />
                      </button>
                    )}
                    <button onClick={() => handleIncrement(todo.key)}>
                      <IoMdAddCircle
                        size={24}
                        className="hover:text-green-500"
                      />
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

      <div className="flex justify-between">
        <p className="text-white border border-white rounded-md p-2 w-fit">
          Total Items : {todos.length}
        </p>
        <p className="text-white border border-white rounded-md p-2 w-fit">
          Total Count : {getHandleCount()}
        </p>
      </div>
    </div>
  );
};

export default List;
