import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RK SOLAR | Solar Energy Solutions",
  description:
    "RK SOLAR provides reliable solar panel installation and clean energy solutions for homes, businesses, and industries.",
  openGraph: {
    title: "RK SOLAR | Solar Energy Solutions",
    description:
      "Reliable solar panel installation and clean energy solutions for homes, businesses, and industries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
