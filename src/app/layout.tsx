import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexora — AI-Powered Revenue & Workflow Intelligence",
  description:
    "Nexora gives B2B revenue teams an AI-powered command center for predicting churn, analyzing pipeline health, and turning customer data into predictable growth.",
  keywords: [
    "AI revenue intelligence",
    "B2B pipeline analytics",
    "churn prediction software",
    "workflow automation",
    "revenue forecasting",
  ],
  openGraph: {
    title: "Nexora — AI-Powered Revenue & Workflow Intelligence",
    description:
      "Predict churn, focus your pipeline, and grow revenue with one intelligent workspace built for modern B2B teams.",
    type: "website",
    siteName: "Nexora",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body
        className={`${inter.className} min-h-full bg-white text-[#060E1F] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
