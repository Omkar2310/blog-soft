import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import themeReducer from "./theme/themeSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducers = combineReducers({
  user: userReducer,
  theme: themeReducer
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistentReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistentReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
