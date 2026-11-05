import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Filipino Homes | Philippines Property Marketplace",
  description: "Discover verified homes, condominiums, land, and commercial properties from trusted agents across the Philippines.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
