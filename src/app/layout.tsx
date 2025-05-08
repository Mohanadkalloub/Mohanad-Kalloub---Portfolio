import "./globals.css";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mohanad Kalloub",
  description:
    "Front End Developer with ReactJS & NextJS , Content Creation & Content Writer",
};

export const navLinks = [
  {
    path: "about",
    display: "About",
  },
  {
    path: "projects",
    display: "Projects",
  },
  {
    path: "services",
    display: "Services",
  },
  {
    path: "skills",
    display: "Skills",
  },
  {
    path: "contact",
    display: "Contact",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="md:flex justify-between mx-5 mt-3">
          <h1 className="text-3xl text-blue-500">Mohanad Kalloub</h1>
          <div className="md:flex">
            {navLinks.map((link) => (
              <Link
                href={link.path}
                className="mx-2 text-blue-500 hover:text-blue-900 text-2xl"
              >
                {link.display}
              </Link>
            ))}
            <div>
              <button className="bg-blue-500 text-white px-5 py-1 mx-2 rounded-md hover:bg-blue-900">
                Download CV
              </button>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
