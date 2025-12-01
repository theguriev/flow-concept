"use client";

import { ComponentProps, useCallback, useState } from "react";
import ToolSidebar from "./tool-sidebar";
import NodesSidebar from "./nodes-sidebar";
import { Sidebar } from "./ui/sidebar";
import MessageNodeSidebar from "./message-node-sidebar";
import isMessageNode from "@/lib/isMessageNode";
import { MessageNode } from "@/types/message-node";
import {
  OnSelectionChangeFunc,
  useOnSelectionChange,
  useReactFlow,
} from "@xyflow/react";

const AppSidebar = ({ ...props }: ComponentProps<typeof Sidebar>) => {
  const { updateNode } = useReactFlow();

  const [selectedNodes, setSelectedNodes] = useState<Array<Node>>([]);

  const onChange: OnSelectionChangeFunc = useCallback(({ nodes }) => {
    setSelectedNodes(nodes);
  }, []);

  useOnSelectionChange({
    onChange,
  });

  const handleMessageChange = useCallback(
    (node: MessageNode) => {
      updateNode(node.id, node);
    },
    [updateNode]
  );

  console.log("log: selectedNode", selectedNodes);

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
      {...props}
    >
      <ToolSidebar />
      {selectedNodes.length === 0 && <NodesSidebar />}
      {selectedNodes.map((node) =>
        !isMessageNode(node) ? (
          <div key={node.id} className="p-4">
            <pre className="whitespace-pre-wrap break-words text-sm">
              {JSON.stringify(node, null, 2)}
            </pre>
          </div>
        ) : (
          <MessageNodeSidebar key={node.id} {...node} />
        )
      )}
    </Sidebar>
  );
};

AppSidebar.displayName = "AppSidebar";

export default AppSidebar;
