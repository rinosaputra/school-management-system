import { DataTableAction, DataTablePagination, DataTableProvider, DataTableTemplate, DataTableToolbar } from "@/components/data-table";
import React from "react";
import { useGraduationWithStudentData } from "./hook";
import { GraduationAdminColumnHelper, GraduationAdminColumns } from "./columns";
import { GraduationWithStudentOutputSchema } from "../schema";
import { File, Pencil, Trash } from "lucide-react";

const GraduationAdmin: React.FC = () => {
  const { data } = useGraduationWithStudentData({});
  const columns = React.useMemo(() => [
    GraduationAdminColumnHelper.accessor("_action" as unknown as keyof GraduationWithStudentOutputSchema, {
      header: "#",
      size: 10,
      cell: ({ row }) => <DataTableAction items={[
        {
          label: "Dokumen",
          icon: File,
          type: "group",
          payload: [
            {
              label: "Surat Keterangan Lulus",
              icon: File,
              type: "link",
              payload: `/graduation/${row.original.studentId}/skl`,
            },
            {
              label: "Transkrip Nilai",
              icon: File,
              type: "link",
              payload: `/graduation/${row.original.studentId}/transkrip`,
            }
          ]
        },
        {
          label: "Edit",
          icon: Pencil,
          type: "action",
          payload: () => console.log("Edit", row.id),
        },
        {
          label: "Delete",
          icon: Trash,
          type: "action",
          payload: () => console.log("Delete", row.id),
        }
      ]} />
    }),
    ...GraduationAdminColumns
  ], []);


  return <DataTableProvider data={data ?? []} columns={columns}>
    <div className="space-y-4">
      <DataTableToolbar search={{ label: "Pencarian", key: "student.personal.name" }} />
      <div className="rounded-md border">
        <DataTableTemplate />
      </div>
      <DataTablePagination />
    </div>
  </DataTableProvider>;
};

export default GraduationAdmin;
