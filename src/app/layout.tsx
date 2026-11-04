import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://blog.shiftuplab.com"), title: { default: "Blog | ShiftUp Lab", template: "%s | ShiftUp Lab" }, description: "Ideas, articles and perspectives from ShiftUp Lab." };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
