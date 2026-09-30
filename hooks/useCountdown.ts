"use client";

import { useEffect, useState } from "react";
import { getCountdown, type CountdownParts } from "@/lib/countdown";

export function useCountdown(targetIso: string): CountdownParts {
  const [parts, setParts] = useState(() => getCountdown(targetIso));

  useEffect(() => {
    const id = setInterval(() => setParts(getCountdown(targetIso)), 1000);
    return () => clearInterval(id);
  }, [targetIso]);

  return parts;
}
