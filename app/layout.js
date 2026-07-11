import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rassel A Sadat | AI/ML & Software Developer Portfolio",
  description: "Explore the professional engineering portfolio of Rassel A Sadat, an Integrated M.Tech Computer Science graduate specializing in AI/ML models, data intelligence pipelines, and full-stack modular backend architectures.",
  keywords: ["Rassel A Sadat", "Software Developer", "AI Developer", "Machine Learning", "Digital Twin", "VIT-AP University", "Portfolio"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
