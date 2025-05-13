/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Link, useLocation, useNavigate } from "@remix-run/react";
import { useState } from "react";

export default function Sidebar(props: any) {
  const { data } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`bg-gray-800 text-white min-h-screen transition-all duration-300 ${
        collapsed ? "w-20" : "w-[200px]"
      }`}
    >
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h1
          className={`font-bold truncate ${
            collapsed ? "hidden" : "block"
          } cursor-pointer`}
          onClick={() => {
            // 返回首页
            navigate("/");
          }}
        >
          导航菜单
        </h1>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white flex-shrink-0"
        >
          {collapsed ? ">" : "<"}
        </button>
      </div>
      <nav className="mt-4">
        {data.map((item: any) => (
          <Link
            replace
            key={item.id}
            to={`/edit/${item.id}`}
            className={`
              block px-4 py-2 mx-2 mb-2 rounded-lg
              ${
                location.pathname.split("/").slice(-1)[0] === `${item.id}`
                  ? "bg-blue-600"
                  : "hover:bg-gray-700"
              }
              transition-colors duration-200
              ${collapsed ? "text-center" : ""}
            `}
          >
            <div className="flex items-center">
              {!collapsed && (
                <span className="truncate overflow-hidden">{item.title}</span>
              )}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
