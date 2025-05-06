import { FontStyle } from "@react-pdf/font";

type FontWeight =
  | number
  | 'thin'
  | 'ultralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'ultrabold'
  | 'heavy';

interface BulkLoad {
  family: string;
  fonts: {
    src: string;
    fontStyle?: FontStyle;
    fontWeight?: FontWeight;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }[];
}

export const pdfFontsRoboto: BulkLoad = {
  family: 'Roboto',
  fonts: [
    {
      src: '/fonts/roboto/Roboto-Regular.ttf',
      fontStyle: 'normal',
      fontWeight: 'normal'
    },
    {
      src: '/fonts/roboto/Roboto-Bold.ttf',
      fontWeight: 'bold',
      fontStyle: 'normal'
    },
    {
      src: '/fonts/roboto/Roboto-Italic.ttf',
      fontWeight: 'normal',
      fontStyle: 'italic'
    },
    {
      src: '/fonts/roboto/Roboto-BoldItalic.ttf',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  ],
};