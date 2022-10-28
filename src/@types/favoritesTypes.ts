import { ProfileType } from "./profilesTypes";

export type FavoritesStateTypes = {
  status: "idle" | "pending" | "succeeded" | "failed" | "loading";
  profiles: ProfileType[];
};
