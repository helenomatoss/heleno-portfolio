import { ReactNode } from "react";

export function TechStrip({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="no-x-scroll flex gap-2 overflow-x-auto px-2 py-2 md:justify-center md:overflow-visible">
        {children}
      </div>
    </div>
  );
}

