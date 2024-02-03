"use client";
import { useRefreshTokensQuery } from "@/redux/api/authApi";
import { permanentRedirect } from "next/navigation";
import { useEffect } from "react";

const RefreshTokens = () => {
  const refresh = localStorage.getItem("refreshToken");
  const { data, error } = useRefreshTokensQuery(refresh);

  useEffect(() => {
    if (error && "status" in error && error?.status === 400) {
      permanentRedirect("/authorization");
    }
  }, [error]);

  return data;
};

export default RefreshTokens;
