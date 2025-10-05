import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/Footer";

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
            <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
