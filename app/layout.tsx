import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Devesh Maheshwari - CS & EE Student | AI Enthusiast",
  description:
    "Passionate Computer Science & Engineering student at Purdue University, specializing in AI, Full-Stack, and Core Systems. Experienced in Python, React, AI/ML, and more.",
  keywords:
    "Devesh Maheshwari, Computer Science, Electrical Engineering, Purdue University, AI, Machine Learning, Full Stack Developer, Python, React, JavaScript",
  authors: [{ name: "Devesh Maheshwari" }],
  creator: "Devesh Maheshwari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devesh-maheshwari.vercel.app",
    title: "Devesh Maheshwari - CS & EE Student | AI Enthusiast",
    description:
      "Passionate Computer Science & Engineering student at Purdue University, specializing in AI, Full-Stack, and Core Systems.",
    siteName: "Devesh Maheshwari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devesh Maheshwari - CS & EE Student | AI Enthusiast",
    description:
      "Passionate Computer Science & Engineering student at Purdue University, specializing in AI, Full-Stack, and Core Systems.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
