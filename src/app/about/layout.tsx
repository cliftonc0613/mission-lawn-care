import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Mission Lawn Care - Veteran-Owned Lawn Service",
  description: "Learn about Mission Lawn Care, a veteran-owned lawn care service in Anderson, SC. We bring military precision and dedication to every yard we service.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
