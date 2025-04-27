export const PersonalGender = {
  male: "male",
  female: "female",
} as const;

export type PersonalGender = keyof typeof PersonalGender;

export const PersonalReligion = {
  islam: "islam",
  christian: "christian",
  hindu: "hindu",
  buddha: "buddha",
  other: "other",
} as const;

export type PersonalReligion = keyof typeof PersonalReligion;