// src/app/layout.tsx

"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApolloWrapper } from "@/lib/client"; //Importing the ApolloWrapper Provider
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header";
import styled from "styled-components";

const ContentWrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding: 32px 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ApolloWrapper>
          <ContentWrapper>
            <Header />
            {children}
          </ContentWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
