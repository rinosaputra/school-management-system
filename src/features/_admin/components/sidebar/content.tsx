import React from "react";
import {
  ChartSpline,
  Megaphone,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

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
  return rows.map((row, i) => (
    <SidebarGroup key={i}>
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        {row.items.map((item, i) => (
          <SidebarMenuItem key={i}>
            <SidebarMenuButton asChild tooltip={item.name}>
              <Link to={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  ));
};

export default AdminSidebarContent;
