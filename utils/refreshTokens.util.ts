import { useRefreshTokensQuery } from "@/redux/api/authApi";

const RefreshTokens = () => {
  const refresh = localStorage.getItem("refreshToken");
  const { data, error } = useRefreshTokensQuery(refresh);
  if (!refresh) return "didn`t find refresh!";
  return data;
};

export default RefreshTokens;
