import { RemapTablesTypes } from "./remap-tables.types";

interface ACTION {
  type: string;
  payload: any;
}

interface INITIAL_STATE_Interface {
  tableName: string;
  cellsPosition: number[][];
}

const INITIAL_STATE: INITIAL_STATE_Interface = {
  tableName: "optimum ignition angle 1 (11*16)",
  cellsPosition: []
};

const RemapTablesReducer = (state = INITIAL_STATE, action: ACTION) => {
  switch (action.type) {
    case RemapTablesTypes.SET_CELLS_POSITIONS:
      return {
        ...state,
        cellsPosition: action.payload
      };
    default:
      return state;
  }
};

export { RemapTablesReducer };
