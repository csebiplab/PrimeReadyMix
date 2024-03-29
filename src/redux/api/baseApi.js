import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base } from "./apiEndpoints";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: base + "/api" }),
    tagTypes: [],
    endpoints: (builder) => ({}),
});
