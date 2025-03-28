import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import theme from "@chat/theme";
import queryClient from "@chat/queryClient";
import { ChatContextProvider } from "@chat/contexts/ChatContext";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chat",
  description: "Chat para recrutadores e aplicantes de vagas da Recruit.AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <ChatContextProvider>{children}</ChatContextProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
