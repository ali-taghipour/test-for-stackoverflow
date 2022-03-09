import { RemapTypes } from "./remap.types";
import { setActionOnTable } from "./remap.utiles";
import { info } from "./info";

interface ACTION {
  type: string;
  payload: any;
}

interface INITIAL_STATE_Interface {
  info: any[];
}

const INITIAL_STATE: INITIAL_STATE_Interface = {
  info: info
};

const RemapReducer = (state = INITIAL_STATE, action: ACTION) => {
  switch (action.type) {
    case RemapTypes.SET_ACTION_ON_TABLE:
      return {
        ...state,
        info: setActionOnTable(
          action.payload.tableName,
          action.payload.actionType,
          state.info,
          action.payload.cellsPosition
        )
      };
    default:
      return state;
  }
};

export { RemapReducer };
