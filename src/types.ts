export type Member = {
  id: number;
  name: string;
  brutto: number;
  szja: boolean;
  hazassag_datuma: Date | undefined;
  szemelyi_kedvezmeny: boolean;
  csaladi_kedvezmeny:
    | { eltartottak: number; kedvezmenyezett: number }
    | undefined;
  netto: number;
};
