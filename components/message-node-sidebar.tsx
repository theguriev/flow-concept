"use client";

import { XIcon, ChevronRight } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { MessageNode } from "@/types/message-node";
import { FormEventHandler, memo, useCallback, useState } from "react";
import { useReactFlow } from "@xyflow/react";

const MessageNodeSidebar = memo((initialNode: MessageNode) => {
  const [node, setNode] = useState<MessageNode>(initialNode);
  const { data } = node;
  const { setOpen } = useSidebar();
  const { updateNode } = useReactFlow();

  console.log("log: node in sidebar", node);

  const handleClose = () => {
    setOpen(false);
  };

  const handleBodyInput: FormEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => {
      const newValue = event.currentTarget.value;
      const newNode = {
        ...node,
        data: { ...data, body: { text: { text: newValue } } },
        selected: true,
      };
      updateNode(node.id, newNode);
      setNode(newNode);
    },
    [updateNode, node, data]
  );

  return (
    <Sidebar collapsible="none" className="hidden flex-1 md:flex">
      <SidebarHeader className="gap-3.5 border-b p-4 flex flex-row space-between">
        <div className="flex w-full items-center justify-between">
          <div className="text-base font-medium text-foreground">
            Edit simple message
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="px-2"
          onClick={handleClose}
        >
          <XIcon />
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <Collapsible title="Media" className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel
              asChild
              className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger>
                Media
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>Hello world</SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible title="Message" defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel
              asChild
              className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger>
                Message
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent className="p-2">
                <Textarea
                  placeholder="Enter text"
                  rows={5}
                  maxLength={1024}
                  value={data.body?.text.text}
                  onInput={handleBodyInput}
                />
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible title="Footer" className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel
              asChild
              className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger>
                Footer
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent className="p-2">
                <Input
                  placeholder="Enter text"
                  maxLength={1024}
                  value={data.footer?.text.text}
                />
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  );
});

MessageNodeSidebar.displayName = "NodesSidebar";

export default MessageNodeSidebar;
