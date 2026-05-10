import "~/styles/globals.css";
import { type Metadata } from "next";
import { Cinzel, Crimson_Text, Inter } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});
const crimson = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
});
export const metadata: Metadata = {
  title: "Wrathfinder",
  description:
    "A character build planner for Pathfinder: Wrath of the Righteous",
  icons: [{ rel: "icon", url: "/images/logo-icon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${crimson.variable} ${inter.variable}`}
    >
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
