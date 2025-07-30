import { Inter } from "next/font/google"
import "../../styles/globals.css"  // Fixed path

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "RunThatUp - Run on your own time",
  description: "Join the fitness revolution! Connect with friends, track your progress, and compete in challenges that fit your schedule.",
  keywords: ["fitness", "running", "health", "ios", "app", "challenges", "social"],
  authors: [{ name: "RunThatUp Team" }],
  openGraph: {
    title: "RunThatUp - Run on your own time",
    description: "Join the fitness revolution! Connect with friends, track your progress, and compete in challenges that fit your schedule.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RunThatUp - Run on your own time",
    description: "Join the fitness revolution! Connect with friends, track your progress, and compete in challenges that fit your schedule.",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}