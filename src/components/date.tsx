import { format } from "date-fns";
import { id } from "date-fns/locale";
import React from "react";

interface IFormatDateProps {
  date: Date | string;
  format?: string;
}

export const formatDate = ({
  date,
  format: formatStr,
}: IFormatDateProps): string =>
  format(date, formatStr ?? "PPPP", { locale: id });

export const FormatDate: React.FC<IFormatDateProps> = React.memo((props) => (
  <span>{ formatDate(props) } </span>
));

FormatDate.displayName = "FormatDate";
