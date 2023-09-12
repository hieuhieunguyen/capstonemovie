import axios, { CreateAxiosDefaults, AxiosRequestHeaders } from "axios";

const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NiIsIkhldEhhblN0cmluZyI6IjMxLzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNjY1OTIwMDAwMCIsIm5iZiI6MTY3ODI5NDgwMCwiZXhwIjoxNzA2ODA2ODAwfQ.RmFBx9ElL7VuYNzZnzMoGUHyC3iXKRpw7Yvq2LsXk0Q";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicGhvbmd2dSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InBob25ndnVAbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiS2hhY2hIYW5nIiwicGhvbmd2dUBtYWlsLmNvbSIsIkdQMDAiXSwibmJmIjoxNjkzODkyNTUwLCJleHAiOjE2OTM4OTYxNTB9.PxlAIXB5UbzHNE_h9ejgCk16z8nXbKe7n2nK9zQ7fmY";

export const apiInstance = (config?: CreateAxiosDefaults) => {
  const api = axios.create(config);

  api.interceptors.request.use((config) => {
    return {
      ...config,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        authorization: "bearer" + " " + accessToken,
      } as unknown as AxiosRequestHeaders,
    };
  });

  return api;
};
