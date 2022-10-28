import axios from "axios";
import { normalizeSearch } from "../../utils/normalizeSearch";
import { axiosClient } from "../apiClient";

async function fetchSearch(user: string, page = 1) {
  try {
    const res = await axiosClient.get(`/search/users`, {
      params: {
        q: user,
        per_page: 12,
        page: page,
      },
    });

    const normalizedSearch = normalizeSearch(res.data, page, user);

    return normalizedSearch;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error(
        "Unexpected error, access the console for more information"
      );
    }
  }
}

export { fetchSearch };
