"use client";
import RefreshTokens from "@/utils/refreshTokens.util";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  RefreshTokens();
}
