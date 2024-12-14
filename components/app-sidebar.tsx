"use client";

import { ComponentProps, FormEventHandler, useMemo, useState } from "react";
import {
  Inbox,
  House,
  SendHorizonal,
  ChartNoAxesColumn,
  RotateCcw,
  User,
  Sparkles,
  PencilRuler,
  MessageSquareText,
  GalleryHorizontal,
  StretchHorizontal,
  Clock,
  AlarmClock,
  AudioLines,
  SquareMinus,
  Grip,
  XIcon,
} from "lucide-react";

import NavUser from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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
import ConnectlyLogo from "@/components/icons/connectly-logo";
import { Button } from "./ui/button";

const data = {
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: House,
      isActive: true,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
      isActive: true,
    },
    {
      title: "Campaigns",
      url: "#",
      icon: SendHorizonal,
      isActive: false,
    },
    {
      title: "Analytics",
      url: "#",
      icon: ChartNoAxesColumn,
      isActive: false,
    },
    {
      title: "Automations",
      url: "#",
      icon: RotateCcw,
      isActive: false,
    },
    {
      title: "Audiences",
      url: "#",
      icon: User,
      isActive: false,
    },
    {
      title: "Sofia AI",
      url: "#",
      icon: Sparkles,
      isActive: false,
    },
    {
      title: "Sign up units",
      url: "#",
      icon: PencilRuler,
      isActive: false,
    },
  ],
  groups: [
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
  ],
};

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = useState(data.navMain[0]);
  const { setOpen } = useSidebar();
  const [searchValue, setSearchValue] = useState("");

  const handleInput: FormEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.currentTarget.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const groups = useMemo(
    () =>
      data.groups.reduce<
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
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
      {...props}
    >
      <Sidebar
        collapsible="none"
        className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <a href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                    <ConnectlyLogo className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      Connectly Inc
                    </span>
                    <span className="truncate text-xs">Enterprise</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => {
                        setActiveItem(item);
                        setOpen(true);
                      }}
                      isActive={activeItem.title === item.title}
                      className="px-2.5 md:px-2"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-0">
          <NavUser
            user={{
              name: "shadcn",
              email: "m@example.com",
              avatar: "/avatars/eugenguriev.jpeg",
            }}
          />
        </SidebarFooter>
      </Sidebar>

      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4 flex flex-row space-between">
          <SidebarInput
            placeholder="Type to search..."
            value={searchValue}
            onInput={handleInput}
          />
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
          {groups.map((group) => (
            <SidebarGroup key={group.label} className="px-0">
              <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton draggable className="px-2.5">
                        <item.icon />
                        <span>{item.title}</span>
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
    </Sidebar>
  );
}
