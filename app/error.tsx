"use client";
import RefreshTokens from "@/utils/refreshTokens.util";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return RefreshTokens();
};

export default Error;
