import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import { NavigationProvider } from "@/lib/navigation-context";
import NotesContent from "@/components/content/NotesContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Thesis Documentation",
  description: "A place to document progress, findings, and research throughout my thesis journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-white dark:bg-black/95 text-black dark:text-white transition-colors duration-200`}>
        <ThemeProvider>
          <NavigationProvider>
            {/* Notes Component - Absolutely positioned overlay */}
            {/* <div className="absolute top-0 left-0 w-1/3 h-full pointer-events-none z-10">
              <NotesContent showBackButton={false} isMainPage={true} />
            </div> */}
            
            {/* Main content */}
            {children}
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
