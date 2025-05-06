import React from "react";
import {
  Book,
  Building,
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
import { links } from "@/routers/links";

type Item = {
  name: string;
  url: string;
  icon: LucideIcon;
  disabled?: boolean;
};

type Row = {
  label: string;
  items: Item[];
};

const rows: Row[] = [
  {
    label: "Dashboard",
    items: [
      {
        name: "Ringkasan",
        url: links.admin.$path(),
        icon: ChartSpline,
      },
    ],
  },
  {
    label: "Master",
    items: [
      {
        name: "Peserta Didik",
        url: "#", //"/admin/student",
        icon: Users,
        disabled: true,
      },
      {
        name: "Kelas",
        url: "#", //"/admin/class",
        icon: Building,
        disabled: true,
      },
      {
        name: "Mata Pelajaran",
        url: "#", //"/admin/subject",
        icon: Book,
        disabled: true,
      },
    ],
  },
  {
    label: "Fitur",
    items: [
      {
        name: "Kelulusan",
        url: links.admin.graduation.list.$path(),
        icon: Megaphone,
      },
    ],
  },
];

const AdminSidebarContent: React.FC = () => {
  return rows.map((row, i) => (
    <SidebarGroup key={i}>
      <SidebarGroupLabel>{row.label}</SidebarGroupLabel>
      <SidebarMenu>
        {row.items.map((item, i) => (
          <SidebarMenuItem key={i}>
            {item.disabled ? (<SidebarMenuButton tooltip={item.name} disabled>
              <item.icon />
              <span>{item.name}</span>
            </SidebarMenuButton>) : (<SidebarMenuButton tooltip={item.name} asChild>
              <Link to={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>)}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  ));
};

export default AdminSidebarContent;
