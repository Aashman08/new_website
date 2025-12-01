// import "@/app/globals.css"
// import { Inter as FontSans } from "next/font/google"

// import { cn } from "@/lib/utils"

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

// // Add this at the top of the file
// type RootLayoutProps = {
//   children: React.ReactNode;
// };

// export default function RootLayout({ children }: RootLayoutProps) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head />
//       <body
//         className={cn(
//           "min-h-screen bg-background font-sans antialiased",
//           fontSans.variable
//         )}
//       >
//         {children}
//       </body>
//     </html>
//   )
// }

import "@/app/globals.css"
import { Inter } from "next/font/google"

import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // Faster font loading - shows fallback immediately
})

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources for faster loading */}
        <link rel="preload" href="/video/space.mp4" as="video" type="video/mp4" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}

// src/app/layout.tsx


