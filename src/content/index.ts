import type { ServiceContent } from "./types";
import { tea } from "./services/tea";
import { tdah } from "./services/tdah";
import { canabidiol } from "./services/canabidiol";
import { medicinaDoSono } from "./services/medicina-do-sono";
import { psiquiatriaInfantil } from "./services/psiquiatria-infantil";
import { ansiedadeEBurnout } from "./services/ansiedade-e-burnout";
import { depressao } from "./services/depressao";
import { transtornoBipolar } from "./services/transtorno-bipolar";
import { saudeMentalDaMulher } from "./services/saude-mental-da-mulher";
import { periciaMedica } from "./services/pericia-medica";

const contents: Record<string, ServiceContent> = {
  "tea": tea,
  "tdah": tdah,
  "canabidiol": canabidiol,
  "medicina-do-sono": medicinaDoSono,
  "psiquiatria-infantil": psiquiatriaInfantil,
  "ansiedade-e-burnout": ansiedadeEBurnout,
  "depressao": depressao,
  "transtorno-bipolar": transtornoBipolar,
  "saude-mental-da-mulher": saudeMentalDaMulher,
  "pericia-medica": periciaMedica,
};

export function getServiceContent(slug: string): ServiceContent | undefined {
  return contents[slug];
}

export const allServiceContent: ServiceContent[] = Object.values(contents);
