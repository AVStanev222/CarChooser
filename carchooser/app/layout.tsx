// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "CarChooser",
  description: "Find the best car for your needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-page text-text antialiased transition-colors">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
