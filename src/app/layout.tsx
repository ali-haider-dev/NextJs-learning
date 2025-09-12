import { Metadata } from "next";
import "./globals.css";
import ErrorWrapper from "./error-wrapper";
import { ThemeProvider } from "@/components/themeProvider";
export const metadata: Metadata = {
  title: {
    default: "Layout Meta Title ",
    template: " %s | NextJs-learning",
  },
  description: "This is the Layout metadata description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`antialiased`}>
          <ErrorWrapper>{children}</ErrorWrapper>
        </body>
      </ThemeProvider>
    </html>
  );
}
