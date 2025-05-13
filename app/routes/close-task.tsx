import { ActionFunction, redirect } from "@remix-run/node";
import prisma from "~/lib/db.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const id = formData.get("id");
  const status = formData.get("status");

  if (id && status) {
    await prisma["todo_list"].delete({
      where: {
        id: Number(id),
      },
    });
  }

  // 重定向回首页
  return redirect("/");
};
