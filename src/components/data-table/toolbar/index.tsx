import React from 'react'
import { X } from "lucide-react"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { useDataTable } from '../hook'
import DataTableToolbarView from './view'

type DataTableToolbarProps = {
  search?: {
    label: string
    key: string
  }
}

export const DataTableToolbar: React.FC<React.PropsWithChildren<DataTableToolbarProps>> = ({
  search,
  children,
}) => {
  const { table } = useDataTable()
  const isFiltered = table.getState().columnFilters.length > 0
  const name = React.useMemo(() => search?.key ? search.key.replace(/\./g, "_") : null, [search])
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {!name ? null : <Input
          placeholder={search?.label ?? "Pencarian"}
          value={(table.getColumn(name)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(name)?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />}
        {children}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>
      <DataTableToolbarView />
    </div>
  )
}