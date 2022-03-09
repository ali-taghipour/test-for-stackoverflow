import { persistStore } from "redux-persist";
import { createStore, applyMiddleware, Middleware } from "redux";
import { persistedReducer } from "./root-reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
