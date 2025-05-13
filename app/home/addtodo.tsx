import { Form, redirect } from "@remix-run/react";
import prisma from "~/lib/db.server";
import FormContent from "./formContent";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();

  const res = await prisma["todo_list"].create({
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      creator: formData.get("creator") as string,
    },
  });

  if (res?.id) {
    prisma.$disconnect();
    return redirect("/edit/" + res?.id);
  }

  return {
    status: 500,
    message: "新增失败",
  };
};

const Add = () => {
  return (
    <Form
      method="post"
      action="/add"
      className="w-full max-w-2xl mx-auto p-6 space-y-6"
    >
      <h1 className="text-xl font-bold mb-4">新增代办</h1>
      <FormContent />
    </Form>
  );
};

export default Add;
