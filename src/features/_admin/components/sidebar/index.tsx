import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import AdminSidebarHeader from "./header";
import AdminSidebarContent from "./content";
import AdminSidebarFooter from "./footer";

const AdminSidebar: React.FC<React.ComponentProps<typeof Sidebar>> = (
  props
) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AdminSidebarHeader />
      </SidebarHeader>
      <SidebarContent>
        <AdminSidebarContent />
      </SidebarContent>
      <SidebarFooter>
        <AdminSidebarFooter />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AdminSidebar;
