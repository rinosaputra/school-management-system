import React from 'react'
import { MoreHorizontal, type LucideIcon } from "lucide-react"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Link } from 'react-router-dom'

type ItemCore = {
  label: string
  icon?: LucideIcon
  disabled?: boolean
  separator?: boolean
}

type ItemAction = ItemCore & {
  type: "action"
  payload: () => void
}

type ItemLink = ItemCore & {
  type: "link"
  payload: string
}

type ItemGroup = ItemCore & {
  type: "group"
  payload: Item[]
}

type Item =
  | ItemAction
  | ItemLink
  | ItemGroup

type DataTableActionProps = {
  items: Item[]
}

const Item: React.FC<Item> = ({ label, type, payload, disabled, icon: Icon }) => {
  if (type === "action") {
    return <DropdownMenuItem onClick={payload} disabled={disabled}>
      {Icon && <Icon />}
      {label}
    </DropdownMenuItem>
  }
  if (type === "link") {
    if (disabled) return <DropdownMenuItem disabled>
      {Icon && <Icon />}
      {label}
    </DropdownMenuItem>
    return <DropdownMenuItem asChild>
      <Link to={payload}>
        {Icon && <Icon />}
        {label}
      </Link>
    </DropdownMenuItem>
  }
  if (type === "group") {
    return <DropdownMenuSub key={label}>
      <DropdownMenuSubTrigger disabled={disabled}>
        {Icon && <Icon className='size-4' />}
        <span className='ml-1.5'>{label}</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        {payload.map((item, i) => (
          <React.Fragment key={i}>
            <Item {...item} />
            {item.separator && <DropdownMenuSeparator />}
          </React.Fragment>
        ))}
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  }
  return null
}

export const DataTableAction: React.FC<DataTableActionProps> = ({ items }) => {
  return <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="outline"
        className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
      >
        <MoreHorizontal />
        <span className="sr-only">Open menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-[160px]">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <Item {...item} />
          {item.separator && <DropdownMenuSeparator />}
        </React.Fragment>
      ))}

    </DropdownMenuContent>
  </DropdownMenu>
}