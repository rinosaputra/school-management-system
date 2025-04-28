import { CurriculumType } from "../const"
import { CurriculumSchema } from "../schema"
import { SubjectSchema } from "../../subject/schema"
import { CurriculumK13Subject, CurriculumK13SubjectGroup, CurriculumK13SubjectKey } from "./k13/subject"

type CurriculumRows = {
  [CurriculumType.k13]: CurriculumSchema & {
    groups: Record<CurriculumK13SubjectGroup, {
      name: string
      subjects: Partial<Record<CurriculumK13SubjectKey, SubjectSchema & {
        levels: Record<number, Record<1 | 2, number>>
      }>>
    }>
  }
}

export const CurriculumRows: CurriculumRows = {
  k13: {
    name: "Kurikulum 2013",
    groups: {
      a: {
        name: "Muatan Nasional",
        subjects: {
          agama: {
            ...CurriculumK13Subject.agama,
            levels: {
              10: { 1: 3, 2: 3 },
              11: { 1: 3, 2: 3 },
              12: { 1: 3, 2: 3 }
            }
          },
          pkn: {
            ...CurriculumK13Subject.pkn,
            levels: {
              10: { 1: 2, 2: 2 },
              11: { 1: 2, 2: 2 },
              12: { 1: 2, 2: 2 }
            }
          },
          bindo: {
            ...CurriculumK13Subject.bindo,
            levels: {
              10: { 1: 4, 2: 4 },
              11: { 1: 3, 2: 3 },
              12: { 1: 2, 2: 2 }
            }
          },
          mtk: {
            ...CurriculumK13Subject.mtk,
            levels: {
              10: { 1: 4, 2: 4 },
              11: { 1: 4, 2: 4 },
              12: { 1: 4, 2: 4 }
            }
          },
          sejarah: {
            ...CurriculumK13Subject.sejarah,
            levels: {
              10: { 1: 3, 2: 3 }
            }
          },
          bing: {
            ...CurriculumK13Subject.bing,
            levels: {
              10: { 1: 3, 2: 3 },
              11: { 1: 3, 2: 3 },
              12: { 1: 4, 2: 4 }
            }
          }
        }
      },
      b: {
        name: "Muatan Kewilayahan",
        subjects: {
          sb: {
            ...CurriculumK13Subject.sb,
            levels: {
              10: { 1: 3, 2: 3 }
            }
          },
          pjok: {
            ...CurriculumK13Subject.pjok,
            levels: {
              10: { 1: 2, 2: 2 },
              11: { 1: 2, 2: 2 }
            }
          }
        }
      },
      c1: {
        name: "Dasar Bidang Keahlian",
        subjects: {
          simdig: {
            ...CurriculumK13Subject.simdig,
            levels: {
              10: { 1: 3, 2: 3 }
            }
          },
          fisika: {
            ...CurriculumK13Subject.fisika,
            levels: {
              10: { 1: 3, 2: 3 }
            }
          },
          kimia: {
            ...CurriculumK13Subject.kimia,
            levels: {
              10: { 1: 3, 2: 3 }
            }
          },
          eb: {
            ...CurriculumK13Subject.eb,
            levels: {
              10: { 1: 2, 2: 2 }
            }
          },
          au: {
            ...CurriculumK13Subject.au,
            levels: {
              10: { 1: 2, 2: 2 }
            }
          },
          ipa: {
            ...CurriculumK13Subject.ipa,
            levels: {
              10: { 1: 2, 2: 2 }
            }
          }
        }
      },
      c2: {
        name: "Dasar Program Keahlian",
        subjects: {
          gto: {
            ...CurriculumK13Subject.gto,
            levels: {
              10: { 1: 4, 2: 4 }
            }
          },
          tdo: {
            ...CurriculumK13Subject.tdo,
            levels: {
              10: { 1: 4, 2: 4 }
            }
          },
          pdto: {
            ...CurriculumK13Subject.pdto,
            levels: {
              10: { 1: 5, 2: 5 }
            }
          },
          sk: {
            ...CurriculumK13Subject.sk,
            levels: {
              10: { 1: 2, 2: 2 }
            }
          },
          kjd: {
            ...CurriculumK13Subject.kjd,
            levels: {
              10: { 1: 5, 2: 5 }
            }
          },
          pd: {
            ...CurriculumK13Subject.pd,
            levels: {
              10: { 1: 3, 2: 3 }
            }
          },
          ddg: {
            ...CurriculumK13Subject.ddg,
            levels: {
              10: { 1: 3, 2: 3 }
            }
          },
          tp: {
            ...CurriculumK13Subject.tp,
            levels: {
              10: { 1: 4, 2: 4 }
            }
          },
          kp: {
            ...CurriculumK13Subject.kp,
            levels: {
              10: { 1: 5, 2: 5 }
            }
          },
          ka: {
            ...CurriculumK13Subject.ka,
            levels: {
              10: { 1: 4, 2: 4 }
            }
          }
        }
      },
      c3: {
        name: "Kompetensi Keahlian",
        subjects: {
          pmsm: {
            ...CurriculumK13Subject.pmsm,
            levels: {
              11: { 1: 8, 2: 8 },
              12: { 1: 8, 2: 8 }
            }
          },
          pssm: {
            ...CurriculumK13Subject.pssm,
            levels: {
              11: { 1: 8, 2: 8 },
              12: { 1: 4, 2: 4 }
            }
          },
          plsm: {
            ...CurriculumK13Subject.plsm,
            levels: {
              11: { 1: 8, 2: 8 },
              12: { 1: 7, 2: 7 }
            }
          },
          pbsm: {
            ...CurriculumK13Subject.pbsm,
            levels: {
              12: { 1: 6, 2: 6 }
            }
          },
          tjbl: {
            ...CurriculumK13Subject.tjbl,
            levels: {
              11: { 1: 6, 2: 6 }
            }
          },
          aij: {
            ...CurriculumK13Subject.aij,
            levels: {
              11: { 1: 6, 2: 6 },
              12: { 1: 9, 2: 9 }
            }
          },
          asj: {
            ...CurriculumK13Subject.asj,
            levels: {
              11: { 1: 6, 2: 6 },
              12: { 1: 8, 2: 8 }
            }
          },
          tlj: {
            ...CurriculumK13Subject.tlj,
            levels: {
              11: { 1: 6, 2: 6 },
              12: { 1: 8, 2: 8 }
            }
          },
          otkkp: {
            ...CurriculumK13Subject.otkkp,
            levels: {
              11: { 1: 6, 2: 6 },
              12: { 1: 7, 2: 7 }
            }
          },
          otkpu: {
            ...CurriculumK13Subject.otkpu,
            levels: {
              11: { 1: 6, 2: 6 },
              12: { 1: 6, 2: 6 }
            }
          },
          otkpsp: {
            ...CurriculumK13Subject.otkpsp,
            levels: {
              11: { 1: 6, 2: 6 },
              12: { 1: 6, 2: 6 }
            }
          },
          otkhp: {
            ...CurriculumK13Subject.otkhp,
            levels: {
              11: { 1: 6, 2: 6 },
              12: { 1: 6, 2: 6 }
            }
          },
          pkwu: {
            ...CurriculumK13Subject.pkwu,
            levels: {
              11: { 1: 7, 2: 7 },
              12: { 1: 8, 2: 8 }
            }
          }
        }
      }
    }
  }
};
