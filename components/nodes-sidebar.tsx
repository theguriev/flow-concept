"use client";

import { FormEventHandler, useMemo, useState } from "react";
import {
  House,
  MessageSquareText,
  GalleryHorizontal,
  StretchHorizontal,
  Clock,
  AlarmClock,
  AudioLines,
  SquareMinus,
  Grip,
  XIcon,
  SendHorizonal,
  Search,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import highlightTextSafely from "@/lib/highlightTextSafely";
import { Label } from "./ui/label";

const groups = [
  {
    label: "Messages",
    items: [
      {
        title: "Simple message",
        icon: MessageSquareText,
      },
      {
        title: "Carousel message",
        icon: GalleryHorizontal,
      },
      {
        title: "Button message",
        icon: StretchHorizontal,
      },
      {
        title: "Limit time offer",
        icon: Clock,
      },
    ],
  },
  {
    label: "Events",
    items: [
      {
        title: "Customer replies",
        icon: SendHorizonal,
      },
    ],
  },
  {
    label: "Timing",
    items: [
      {
        title: "Time delay",
        icon: AlarmClock,
      },
    ],
  },
  {
    label: "Actions",
    items: [
      {
        title: "Sofia AI takeover",
        icon: AudioLines,
      },
      {
        title: "Opt out customer",
        icon: SquareMinus,
      },
    ],
  },
];

const NodesSidebar = () => {
  const { setOpen } = useSidebar();
  const [searchValue, setSearchValue] = useState("");

  const handleInput: FormEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.currentTarget.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filteredGroups = useMemo(
    () =>
      groups.reduce<
        { label: string; items: { title: string; icon: typeof House }[] }[]
      >((acc, group) => {
        const items = group.items.filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        if (items.length) {
          return [...acc, { ...group, items }];
        }
        return acc;
      }, []),
    [searchValue]
  );

  return (
    <Sidebar collapsible="none" className="hidden flex-1 md:flex">
      <SidebarHeader className="gap-3.5 border-b p-4 flex flex-row space-between">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search the nodes..."
            value={searchValue}
            onInput={handleInput}
            className="pl-8"
          />
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </SidebarGroupContent>
        <Button
          variant="ghost"
          size="sm"
          className="px-2"
          onClick={handleClose}
        >
          <XIcon />
        </Button>
      </SidebarHeader>
      <SidebarContent className="px-3">
        {filteredGroups.map((group) => (
          <SidebarGroup key={group.label} className="px-0">
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton draggable className="px-2.5">
                      <item.icon />
                      {highlightTextSafely(item.title, searchValue)}
                      <Grip className="ml-auto" />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};

NodesSidebar.displayName = "NodesSidebar";

export default NodesSidebar;
