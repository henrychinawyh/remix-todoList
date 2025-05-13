/**
 * @name home
 */

import { useNavigate } from "@remix-run/react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-4">欢迎来到TodoList</h1>
      <a
        href="/add"
        className="text-blue-500 py-1 px-2 border-[1px] border-blue-500 rounded-md"
        onClick={(e) => {
          e.preventDefault();
          navigate("/add");
        }}
      >
        点击添加
      </a>
    </div>
  );
};

export default Home;
