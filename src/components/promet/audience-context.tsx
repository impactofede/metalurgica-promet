import { createContext, useContext, useState, type ReactNode } from "react";

export type Audience = "particular" | "mayorista";

interface Ctx {
  audience: Audience;
  setAudience: (a: Audience) => void;
}

const AudienceContext = createContext<Ctx | null>(null);

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudience] = useState<Audience>("particular");
  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience() {
  const ctx = useContext(AudienceContext);
  if (!ctx) throw new Error("useAudience must be used within AudienceProvider");
  return ctx;
}
