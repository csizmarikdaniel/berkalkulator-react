export type Member = {
  id: number;
  name: string;
  brutto: number;
  szja: boolean;
  friss_hazas: boolean;
  szemelyi_kedvezmeny: boolean;
  csaladi_kedvezmeny: boolean;
};

export type CalculatedMember = {
  id: number;
  name: string;
  netto: number;
};
