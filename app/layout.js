import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata = {
  title: "iCode Space",
  description: "Modern & Minimalist iCode Space Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
