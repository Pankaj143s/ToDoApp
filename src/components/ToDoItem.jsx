import React from "react";

const ToDoItem = ({ task, removeTask }) => {
  const deleteItem = () => {
    removeTask(task.id);
  };

  return (
    <div className="flex justify-between gap-4 items-center bg-[#012f47] mb-3 px-4 py-2 rounded w-full max-w-md">
      <span className="text-white font-semibold break-words flex-1 min-w-0">
        {task.text}
      </span>
      <button
        onClick={deleteItem}
        className="bg-red-700 text-white font-bold text-sm p-2 rounded cursor-pointer hover:bg-red-900"
      >
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;
