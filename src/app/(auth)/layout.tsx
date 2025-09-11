"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { name: "Login", href: "/login" },
    { name: "register", href: "/register" },
    { name: "forgot-password", href: "/forgot-password" },
  ];

  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}

        {navLinks.map((link, index) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              key={index}
              className={isActive ? "font-bold mr-4" : "mr-4"}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}

        <h1 className="bg-amber-200 text-6xl text-red-700">
          this is the Auth layout
        </h1>
      </body>
    </html>
  );
}
