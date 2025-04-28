export const SchoolLevel = {
  sd: "sd",
  smp: "smp",
  sma: "sma",
  smk: "smk",
} as const;

export type SchoolLevel = keyof typeof SchoolLevel;

export const SchoolLevelRoman = {
  i: "i",
  ii: "ii",
  iii: "iii",
  iv: "iv",
  v: "v",
  vi: "vi",
  vii: "vii",
  viii: "viii",
  ix: "ix",
  x: "x",
  xi: "xi",
  xii: "xii",
  xiii: "xiii"
} as const;

export type SchoolLevelRoman = keyof typeof SchoolLevelRoman;

export const SchoolLevelRomanToNumber: Record<SchoolLevelRoman, number> = {
  i: 1,
  ii: 2,
  iii: 3,
  iv: 4,
  v: 5,
  vi: 6,
  vii: 7,
  viii: 8,
  ix: 9,
  x: 10,
  xi: 11,
  xii: 12,
  xiii: 13
};