import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { createTw } from "react-pdf-tailwind";

const ctw = createTw({
  theme: {
    fontFamily: {
      sans: ['Roboto']
    },
    fontWeight: {
      bold: 'bold',
    }
  },
}, {
  ptPerRem: 12
})

export const pdfTw = (...inputs: ClassValue[]) => cn(...inputs) ? ctw(cn(...inputs)) : undefined;

export const pdfTwStyle = (...inputs: ClassValue[]) => cn(...inputs) ? ctw(cn(...inputs)) as React.CSSProperties : undefined;