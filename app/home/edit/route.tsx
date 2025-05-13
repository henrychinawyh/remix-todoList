import { Outlet } from "@remix-run/react";

export default function EditById() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">编辑代办</h1>
      <Outlet />
    </div>
  );
}
