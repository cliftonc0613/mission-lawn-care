import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Mission Lawn Care - Anderson, SC",
  description: "Contact Mission Lawn Care for professional lawn services in Anderson, SC. Call (864) 940-6434 or email missionlawncare@yahoo.com for a free estimate.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
