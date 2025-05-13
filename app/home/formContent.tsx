/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { useState } from "react";

const FormContent = (props: any) => {
  const { initialValue, submitType = "add" } = props || {};

  const [title, setTitle] = useState<string>(initialValue?.title || "");
  const [description, setDescription] = useState<string>(
    initialValue?.description || ""
  );
  const [creator, setCreator] = useState<string>(initialValue?.creator || "");

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="title">事项名称</Label>
        <Input
          id="title"
          name="title"
          placeholder="请输入事项名称"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">事项描述</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="请输入事项描述"
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="creator">发起人</Label>
        <Input
          id="creator"
          name="creator"
          placeholder="请输入发起人姓名"
          required
          onChange={(e) => setCreator(e.target.value)}
          value={creator}
        />
      </div>

      <Button type="submit" className="w-full">
        {submitType === "add" ? "提交" : "更新"}
      </Button>
    </>
  );
};

export default FormContent;
