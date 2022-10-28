import {
  createSelector,
  createSlice,
  PayloadAction,
  Reducer,
} from "@reduxjs/toolkit";

import { ProfileStateType, ProfileType } from "../../@types/profilesTypes";
import { profileInitialState } from "./profileInitialState";
import { AppDispatch } from "../hooks";
import type { RootState } from "../hooks";
import { fetchProfile } from "../../services/lib/profile";
import { ReposStateType } from "../../@types/reposTypes";

export const profileSlice = createSlice({
  name: "profile",
  initialState: profileInitialState,
  reducers: {
    addProfile: (state, { payload }: PayloadAction<ProfileType>) => {
      state.entitie = payload;
      return state;
    },
    updateReposList: (state, { payload }: PayloadAction<ReposStateType>) => {
      state.entitie.repos = payload;
      return state;
    },
    updateIsFavoriteStatus: (
      state,
      { payload }: PayloadAction<{ isFavorite: boolean }>
    ) => {
      state.entitie.isFavorite = payload.isFavorite;
      return state;
    },
    profileLoading: (state) => {
      state.status = "loading";
    },
    profileLoaded: {
      reducer: (state, { payload }: PayloadAction<ProfileType>) => {
        state.entitie = payload;
        state.status = "idle";
      },
      prepare: (data: ProfileType) => {
        data.isFavorite = data.isFavorite ? data.isFavorite : false;
        data.repos.items = data.repos.items ? data.repos.items : [];
        data.repos.totalCount = data.publicRepos;

        return { payload: data };
      },
    },
  },
});

const { actions, reducer } = profileSlice;

export const {
  addProfile,
  updateReposList,
  updateIsFavoriteStatus,
  profileLoading,
  profileLoaded,
} = actions;

export default reducer as Reducer<ProfileStateType>;

//Thunk function
export const fetchSearchProfile =
  (user: string) => async (dispatch: AppDispatch) => {
    dispatch(profileLoading());
    const response = await fetchProfile(user);
    dispatch(profileLoaded(response));
  };

const selectProfileEntitie = (state: RootState) => state.profile.entitie;

export const selectProfile = createSelector(
  selectProfileEntitie,
  (profile: ProfileType) => profile
);
