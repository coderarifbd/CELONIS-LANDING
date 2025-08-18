import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "AOT - Celonis Business Process Mining Implementation & Consultancy",
  description:
    "Transform your business with Celonis Process Mining. Certified partner in Saudi Arabia offering implementation, consulting, and optimization services.",
  keywords: "Celonis, Process Mining, Business Process Optimization, Saudi Arabia, Implementation, Consulting",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
