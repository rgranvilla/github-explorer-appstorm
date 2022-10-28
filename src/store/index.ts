import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import profileReducer from "./profileSlice/profileSlice";
import favoritesReducer from "./favoritesSlice/favoritesSlice";
import searchReducer from "./searchSlice/searchSlice";

const rootReducer = combineReducers({
  profile: profileReducer,
  favorites: favoritesReducer,
  search: searchReducer,
});

const persistConfig = {
  key: "@github-explorer",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
