import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "UberRide - Your Ride, On Demand",
  description: "Get a ride in minutes with UberRide. Safe, reliable, and convenient transportation at your fingertips. Available 24/7 in your city.",
  keywords: "ride sharing, transportation, taxi, uber, on-demand, city transport",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}