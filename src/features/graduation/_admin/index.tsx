import { DataTableAction, DataTablePagination, DataTableProvider, DataTableTemplate, DataTableToolbar } from "@/components/data-table";
import React from "react";
import { useGraduationWithStudentData } from "./hook";
import { GraduationAdminColumnHelper, GraduationAdminColumns } from "./columns";
import { GraduationWithStudentOutputSchema } from "../schema";
import { File, Pencil, Trash } from "lucide-react";
import GraduationAdminDocDescription from "./components/doc/description";
import { toast } from "sonner";

const GraduationAdmin: React.FC = () => {
  const { data } = useGraduationWithStudentData({});
  const [docDescription, setDocDescription] = React.useState(false);
  const [result, setResult] = React.useState<null | GraduationWithStudentOutputSchema>(null);
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
              type: "action",
              payload: () => {
                setResult(row.original);
                setDocDescription(true);
              },
            },
            {
              label: "Transkrip Nilai",
              icon: File,
              disabled: true,
              type: "action",
              payload: () => {
                toast.error("Fitur ini belum tersedia");
              },
            }
          ]
        },
        {
          label: "Edit",
          icon: Pencil,
          disabled: true,
          type: "action",
          payload: () => {
            toast.error("Fitur ini belum tersedia");
          },
        },
        {
          label: "Delete",
          icon: Trash,
          disabled: true,
          type: "action",
          payload: () => {
            toast.error("Fitur ini belum tersedia");
          },
        }
      ]} />
    }),
    ...GraduationAdminColumns
  ], []);


  return <>
    <DataTableProvider data={data ?? []} columns={columns}>
      <div className="space-y-4">
        <DataTableToolbar search={{ label: "Pencarian", key: "student.personal.name" }} />
        <div className="rounded-md border">
          <DataTableTemplate />
        </div>
        <DataTablePagination />
      </div>
    </DataTableProvider>
    <GraduationAdminDocDescription open={docDescription} onOpenChange={setDocDescription} result={result} />
  </>;
};

export default GraduationAdmin;
