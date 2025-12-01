"use client";

import isMessageNode from "@/lib/isMessageNode";
import { OnSelectionChangeFunc, useOnSelectionChange } from "@xyflow/react";
import { ComponentProps, useCallback, useState } from "react";
import MessageNodeSidebar from "./message-node-sidebar";
import NodesSidebar from "./nodes-sidebar";
import ToolSidebar from "./tool-sidebar";
import { Sidebar } from "./ui/sidebar";

const AppSidebar = ({ ...props }: ComponentProps<typeof Sidebar>) => {
  const [selectedNodes, setSelectedNodes] = useState<Array<Node>>([]);

  const onChange: OnSelectionChangeFunc = useCallback(({ nodes }) => {
    setSelectedNodes(nodes);
  }, []);

  useOnSelectionChange({
    onChange,
  });

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
