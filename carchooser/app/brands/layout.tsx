import React from "react";
import Navbar from "../components/Navbar";

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-page text-text transition-colors">
      <Navbar />
      {children}
    </div>
  );
}

