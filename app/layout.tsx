import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coco Bakery",
  description: "Wholesome bakes, every week",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}