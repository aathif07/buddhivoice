"use client"

import { montserrat, openSans } from "@/lib/fonts"

export default function TestFonts() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className={`${montserrat.className} text-4xl font-bold mb-4`}>
        Montserrat Font Test
      </h1>
      <p className={`${openSans.className} text-lg mb-4`}>
        This text should be in Open Sans font.
      </p>
      <p className="text-lg">
        This text should be in the default font (Montserrat).
      </p>
    </div>
  )
}