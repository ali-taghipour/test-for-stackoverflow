import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "localforage";

import { RemapReducer } from "./remap/remap.reducer";
import { RemapTablesReducer } from "./remap-tables/remap-tables.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["remap"]
};

const rootReducer = combineReducers({
  remap: RemapReducer,
  RemapTables: RemapTablesReducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
