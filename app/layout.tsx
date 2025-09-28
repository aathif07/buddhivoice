import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "@/components/navigation"
import { montserrat, openSans } from "@/lib/fonts"

export const metadata: Metadata = {
  title: "Buddhi Voice - AI Voice Agents for Call Operations",
  description:
    "Supercharge your call operations with production-ready AI voice agents. Build, test, deploy, and monitor at scale.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} dark`}>
      <body className="dark bg-background text-foreground">
        <div className="min-h-screen w-full relative">
          {/* Pearl Mist Background with Top Glow */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(59, 130, 246, 0.12), transparent 60%), #000000",
            }}
          />

          <Navigation />

          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  )
}