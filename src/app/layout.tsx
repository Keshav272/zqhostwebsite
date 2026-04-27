import type { Metadata } from "next";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import InteractiveBackground from "@/components/InteractiveBackground";

export const metadata: Metadata = {
  title: "ZQ Hosting — High-Performance VPS & Game Hosting",
  description:
    "Premium VPS, Minecraft, and Dedicated Server hosting with white-glove deployment. Experience blazing-fast NVMe storage and 24/7 community support.",
  keywords: ["VPS hosting", "game hosting", "Minecraft server", "dedicated server", "NVMe hosting", "India hosting"],
  openGraph: {
    title: "ZQ Hosting — High-Performance VPS & Game Hosting",
    description: "Premium hosting with white-glove deployment and community-driven support.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <InteractiveBackground />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
