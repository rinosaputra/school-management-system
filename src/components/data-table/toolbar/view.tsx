import React from 'react'
import { useDataTable } from '../hook'
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { GalleryVerticalEnd } from "lucide-react"
import { Button } from "../../ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../../ui/dropdown-menu"

const DataTableToolbarView: React.FC = () => {
  const { table } = useDataTable()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={'sm'}>
          <GalleryVerticalEnd />
          <span className="hidden lg:block">Tampil</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuLabel>Daftar Kolom</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter((column) => column.getCanHide())
          .map((column) => {
            if (column.columns?.length)
              return column.columns
                .filter((column) => column.getCanHide())
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                    {/* {labels[column.id] ?? column.id} */}
                  </DropdownMenuCheckboxItem>
                ));
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
                {/* {labels[column.id] ?? column.id} */}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DataTableToolbarView
