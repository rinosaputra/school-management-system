import React from "react";
import {
  ChartSpline,
  Folder,
  Forward,
  Megaphone,
  MoreHorizontal,
  Trash2,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

type Item = {
  name: string;
  url: string;
  icon: LucideIcon;
};

type Row = {
  label: string;
  items: Item[];
};

const rows: Row[] = [
  {
    label: "Master",
    items: [
      {
        name: "Peserta Didik",
        url: "#", //"/admin/student",
        icon: Users,
      },
      {
        name: "Kelas",
        url: "#", //"/admin/class",
        icon: ChartSpline,
      },
      {
        name: "Mata Pelajaran",
        url: "#", //"/admin/subject",
        icon: ChartSpline,
      },
      {
        name: "Jadwal",
        url: "#", //"/admin/schedule",
        icon: ChartSpline,
      },
    ],
  },
  {
    label: "Fitur",
    items: [
      {
        name: "Kelulusan",
        url: "admin/graduation",
        icon: Megaphone,
      },
    ],
  },
];

const AdminSidebarContent: React.FC = () => {
  const { isMobile } = useSidebar();
  return rows.map((row, i) => (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden" key={i}>
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        {row.items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <Folder className="text-muted-foreground" />
                  <span>View Project</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Forward className="text-muted-foreground" />
                  <span>Share Project</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 className="text-muted-foreground" />
                  <span>Delete Project</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  ));
};

export default AdminSidebarContent;
