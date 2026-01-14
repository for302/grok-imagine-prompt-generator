import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grok 영상 제작용 프롬프트 생성기",
  description: "Grok Imagine AI를 위한 이미지/영상 프롬프트 생성 도구",
  openGraph: {
    title: "Grok Imagine Prompt Generator",
    description: "Generate bilingual prompts for Grok Imagine AI",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
