// app/components/SectionTitle.tsx
import type { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mt-12 mb-4 text-white">
      {children}
    </h2>
  );
}
