import React, { useRef, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Header = ({ darkMode, setDarkMode, getTodos, setTodo }) => {
  const inputRef = useRef();
  const [inputText, setInputText] = useState("");

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleTodos = () => {
    setTodo(inputText);
    inputRef.current.value = "";
  };

  return (
    <main>
      <nav className="flex justify-around items-center pb-3 dark:bg-[#028b19] bg-gray-900 mb-5 pt-5">
        <h1 className="text-center text-white text-2xl m-0">To Do dApp</h1>
        {darkMode ? (
          <MdDarkMode
            className="text-white text-4xl cursor-pointer "
            onClick={toggleDarkMode}
          />
        ) : (
          <MdOutlineLightMode
            className="text-white text-4xl cursor-pointer"
            onClick={toggleDarkMode}
          />
        )}
      </nav>

      <div className="m-auto w-10/12 flex dark:bg-gray-600 flex-wrap flex-col mt-10 items-center justify-center p-12 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50 ">
        <input
          className="py-3.5 w-10/12 pl-4 text-xl text-black outline-none sm:w-6/12 border rounded-xl"
          placeholder="Add Task..."
          onChange={handleChange}
          ref={inputRef}
        />

        <div className="flex items-center justify-center m-6 flex-wrap">
          <button
            className="text-white  bg-gradient-to-r from-[#005353] to-[#016119] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xl m-4 px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleTodos}
          >
            Add Task
          </button>
          <button
            className="text-white  bg-gradient-to-r from-[#005353] to-[#016119] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xl m-4 px-5 py-2.5 text-center mr-2 mb-2"
            onClick={getTodos}
          >
            Get Todos
          </button>
        </div>
      </div>
    </main>
  );
};

export default Header;
