import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handle, NodeProps, Position } from "@xyflow/react";
import { MessageSquareText } from "lucide-react";
import Message from "./message";
import MessageHeader from "./message-header";
import MessageBody from "./message-body";
import MessageFooter from "./message-footer";
import { cn } from "@/lib/utils";

const MessageNode = ({
  id,
  selected,
  data,
}: NodeProps & {
  data: {
    body?: {
      text: {
        text: string;
      };
    };
    header?: {
      media: {
        example: string[];
        type: "TYPE_IMAGE";
      };
    };
    footer?: {
      text: {
        text: string;
      };
    };
  };
}) => {
  return (
    <Card
      className={cn(
        "w-[278px]",
        selected ? "border-2 border-primary" : "border-2 border-transparent"
      )}
    >
      <Handle type="target" position={Position.Left} id={id} />
      <CardHeader className="flex flex-row gap-2 p-3">
        <MessageSquareText />
        <CardTitle>Simple message</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 pl-3 pr-3 pb-3">
        <Message>
          <MessageHeader
            header={data.header}
            alt={data.body?.text.text || ""}
          />
          <MessageBody>{data.body?.text.text}</MessageBody>
          <MessageFooter>{data.footer?.text.text}</MessageFooter>
        </Message>
      </CardContent>
    </Card>
  );
};

export default MessageNode;
