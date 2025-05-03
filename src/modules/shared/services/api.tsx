import axios, { InternalAxiosRequestConfig } from "axios";

import { VITE_TMDB_ACCESS_TOKEN, VITE_TMDB_BASE_URL } from "../constants";

export const API = axios.create({
  baseURL: VITE_TMDB_BASE_URL,
});

const authInterceptors = (req: InternalAxiosRequestConfig) => {
  if (VITE_TMDB_ACCESS_TOKEN) {
    const { VITE_BEARER_TOKEN_PREFIX } = import.meta.env;

    req.headers.accept = "application/json";
    req.headers.Authorization = `${VITE_BEARER_TOKEN_PREFIX} ${VITE_TMDB_ACCESS_TOKEN}`;
  }
  return req;
};

API.interceptors.request.use(authInterceptors);
