import { createSelector } from "reselect";
import { getTable } from "./remap-tables.utils";

const selectTableName = (state) => state.RemapTables.tableName;
const selectRemapInfo = (state) => state.remap.info;

export const selectDecimalTable = createSelector(
  selectTableName,
  selectRemapInfo,
  (tableName, info) => getTable(tableName, info)
);
