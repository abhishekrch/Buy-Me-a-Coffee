import { getServerSession } from "next-auth";
import "./globals.css";
import Header from "@/components/Header";
import { authOptions } from "@/lib/authOptions";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Buy Me a Coffee",
  description: "Fund your creative work",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <Toaster />
        <Header session={session} />
        {children}
      </body>
    </html>
  );
}
