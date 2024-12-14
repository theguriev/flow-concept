"use client";

import { ComponentProps } from "react";
import ToolSidebar from "./tool-sidebar";
import NodesSidebar from "./nodes-sidebar";
import { Sidebar } from "./ui/sidebar";

const AppSidebar = ({ ...props }: ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
      {...props}
    >
      <ToolSidebar />
      <NodesSidebar />
    </Sidebar>
  );
};

AppSidebar.displayName = "AppSidebar";

export default AppSidebar;
