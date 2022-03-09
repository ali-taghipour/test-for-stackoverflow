import { RemapTypes } from "./remap.types";

export const setActionOnTable = (actionType: string) => (
  dispatch,
  getState
) => {
  const cellsPosition = getState().RemapTables.cellsPosition;
  const tableName = getState().RemapTables.tableName;
  dispatch({
    type: RemapTypes.SET_ACTION_ON_TABLE,
    payload: { tableName, actionType, cellsPosition }
  });
};
