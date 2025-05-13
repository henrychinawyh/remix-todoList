/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from "@prisma/client";
import { LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import FormContent from "../formContent";

const prisma = new PrismaClient();

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params || {};
  if (id) {
    const res = await prisma["todo_list"]?.findMany({
      where: {
        id: Number(id),
      },
    });

    return {
      data: res,
    };
  }

  return null;
};

export const action = async ({ request, params }: any) => {
  const formData = await request.formData();
  const { id } = params || {};

  if (id) {
    await prisma["todo_list"]?.update({
      where: {
        id: Number(id),
      },
      data: {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        creator: formData.get("creator") as string,
      },
    });
  }

  return null;
};

export default function EditById() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <Form
      key={data[0]?.id}
      method="post"
      action={`/edit/${data?.[0]?.id}`}
      className="w-full max-w-2xl mx-auto p-6 space-y-6"
    >
      <FormContent submitType="edit" initialValue={data[0]} />
    </Form>
  );
}
