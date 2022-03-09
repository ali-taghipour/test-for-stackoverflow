import { RemapTablesTypes } from "./remap-tables.types";

export const setCellsPosition = (cellsPosition: number[][]) => ({
  type: RemapTablesTypes.SET_CELLS_POSITIONS,
  payload: cellsPosition
});
