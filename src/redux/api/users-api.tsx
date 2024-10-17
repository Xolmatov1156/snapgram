import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (body) => ({
        url: "/api/auth/register",
        method: "POST",
        body,
      }),
    }),
    loginUser: build.mutation({
      query: (body) => ({
        url: "/api/auth/login",
        method: "POST",
        body,
      }),
    }),
    getUserByUsername: build.query({
      query: (name) => ({
        url: `/api/user/profile/${name}`,
      }),
    }),
    getUsers: build.query({
      query: () => "/api/user/all",
    }),
  }),
});

export const { useCreateUserMutation, useGetUserByUsernameQuery, useLoginUserMutation, useGetUsersQuery } =
  productApi;
