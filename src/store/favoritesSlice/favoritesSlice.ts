import {
  createSelector,
  createSlice,
  PayloadAction,
  Reducer,
} from "@reduxjs/toolkit";

import { RootState } from "../hooks";
import { FavoritesStateTypes } from "../../@types/favoritesTypes";
import { favoritesInitialState } from "./favoritesInitialState";
import { ProfileType } from "../../@types/profilesTypes";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesInitialState,
  reducers: {
    addProfileToFavorites: {
      reducer: (state, { payload }: PayloadAction<ProfileType>) => {
        const profileAlreadyExisted = state.profiles.find(
          (profile) => profile.id === payload.id
        );

        if (profileAlreadyExisted) return;

        state.profiles.push(payload);
        return state;
      },
      prepare: (profile: ProfileType) => {
        const { ...rest } = profile;

        return { payload: { ...rest, isFavorite: true } };
      },
    },
    removeProfileFromFavorites: (
      state,
      { payload }: PayloadAction<{ id: number }>
    ) => {
      state.profiles = state.profiles.filter(
        (profile) => profile.id !== payload.id
      );

      return state;
    },
  },
});

const { actions, reducer } = favoritesSlice;

export const { addProfileToFavorites, removeProfileFromFavorites } = actions;

export default reducer as Reducer<FavoritesStateTypes>;

const selectFavoritesProfiles = (state: RootState) => state.favorites.profiles;

export const selectProfiles = createSelector(
  selectFavoritesProfiles,
  (profiles) => Object.values(profiles)
);
