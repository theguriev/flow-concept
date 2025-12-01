import { Node } from "@xyflow/react";
import { MessageNode } from "@/types/message-node";

const isMessageNode = (node?: Node): node is MessageNode => {
  if (!node) {
    return false;
  }
  return node.type === "FLOW_OBJECT_TYPE_SEND_CONNECTLY_TEMPLATE_MESSAGE";
};

export default isMessageNode;
