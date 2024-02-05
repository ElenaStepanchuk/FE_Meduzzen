"use client";
import { useRefreshTokensQuery } from "@/redux/api/authApi";

const RefreshTokens = () => {
  const refresh = localStorage.getItem("refreshToken");
  const { data } = useRefreshTokensQuery(refresh);
  return data;
};

export default RefreshTokens;
