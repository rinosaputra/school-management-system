import { readFile, set_fs } from 'xlsx';
import * as fs from 'fs';
set_fs(fs);


const wb = readFile("dapodik.xlsx", { cellDates: true });
const [sheet] = wb.SheetNames;
console.log(sheet);