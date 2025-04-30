import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Check, ChevronsUpDown, School } from "lucide-react";
import {
  useFirebaseAuth,
  useFirebaseAuthRequired,
} from "@/lib/firebase/auth/context";

const AdminSidebarHeader: React.FC = () => {
  const { isMobile } = useSidebar();
  const { year: active } = useFirebaseAuthRequired();
  const { dispatch } = useFirebaseAuth();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <School className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {import.meta.env.VITE_APP_NAME}
                </span>
                <span className="truncate text-xs">
                  TP. {active}/{active + 1}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Tahun Pelajaran
            </DropdownMenuLabel>
            {[active].map((year) => (
              <DropdownMenuItem
                key={year}
                onClick={() => dispatch({ type: "year", payload: year })}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  {year === active ? (
                    <Check className="size-4 shrink-0" />
                  ) : null}
                </div>
                {year}/{year + 1}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default AdminSidebarHeader;
