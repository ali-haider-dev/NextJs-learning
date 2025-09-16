import { Metadata } from "next";
import "./globals.css";
import ErrorWrapper from "./error-wrapper";
import { ThemeProvider } from "@/components/themeProvider";
import {
  ClerkProvider,
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
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
    <html>
      <ClerkProvider>
        <ThemeProvider>
          <body className={`antialiased`}>
            <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton mode="modal"/>
              <SignUpButton mode="modal">
                <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              {/* <UserButton /> */}
              <Link href={'/user-profile'} className="border border-black px-4 py-1 bg-blue-500 rounded-xl">Profile</Link>
              <SignOutButton />
            </SignedIn>
          </header>
            <ErrorWrapper>{children}</ErrorWrapper>
          </body>
        </ThemeProvider>
      </ClerkProvider>
    </html>
  );
}
