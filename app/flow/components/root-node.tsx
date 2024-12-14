import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Handle, NodeProps, Position } from "@xyflow/react";
import { SendHorizonal } from "lucide-react";

const RootNode = ({ id }: NodeProps) => {
  return (
    <Card className="w-[250px]">
      <CardHeader className="flex flex-row gap-2 p-3">
        <SendHorizonal />
        <CardTitle>Campaign Starts</CardTitle>
      </CardHeader>
      <Handle type="source" position={Position.Right} id={id} />
    </Card>
  );
};

export default RootNode;
