import { IUser } from "@/types/api/users";
import { baseApi } from "./baseApi";

const usersApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query<IUser[], void>({
			query: () => "/users",
			providesTags: ["Users"],
		}),
	}),
});

export const { useGetUsersQuery } = usersApi;
