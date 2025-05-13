/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @name Layout
 */

import { Outlet, useLoaderData } from "@remix-run/react";
import Sidebar from "./Sidebar";

import { PrismaClient } from "@prisma/client";
import { LoaderFunction } from "@remix-run/node";

const prisma = new PrismaClient();

export const loader: LoaderFunction = async () => {
  const res = await prisma["todo_list"]?.findMany();
  return {
    data: res,
  };
};

const Layout = () => {
  const { data } = useLoaderData<any>();

  return (
    <div className="flex w-screen">
      <Sidebar data={data} />

      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
