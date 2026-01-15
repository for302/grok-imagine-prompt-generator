import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const siteUrl = "https://grok-imagine-prompt-generator.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GROK Prompt Generator - AI 이미지/영상 프롬프트 생성기",
    template: "%s | GROK Prompt Generator",
  },
  description: "Grok Imagine AI를 위한 이미지/영상 프롬프트 생성 도구. 500개 이상의 프롬프트 요소를 조합하여 한국어/영어 프롬프트를 실시간으로 생성합니다. 무료로 사용 가능한 AI 프롬프트 빌더.",
  keywords: [
    "Grok",
    "Grok Imagine",
    "프롬프트 생성기",
    "AI 이미지 생성",
    "AI 영상 생성",
    "prompt generator",
    "AI art",
    "text to image",
    "text to video",
    "이미지 프롬프트",
    "영상 프롬프트",
    "무료 AI 도구",
  ],
  authors: [{ name: "GROK Prompt Generator" }],
  creator: "GROK Prompt Generator",
  publisher: "GROK Prompt Generator",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "GROK Prompt Generator",
    title: "GROK Prompt Generator - AI 이미지/영상 프롬프트 생성기",
    description: "Grok Imagine AI를 위한 무료 프롬프트 생성 도구. 500개 이상의 요소를 조합하여 한국어/영어 프롬프트를 실시간 생성.",
    images: [
      {
        url: "/images/kakao_thumb.jpg",
        width: 1200,
        height: 630,
        alt: "GROK Prompt Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GROK Prompt Generator - AI 이미지/영상 프롬프트 생성기",
    description: "Grok Imagine AI를 위한 무료 프롬프트 생성 도구",
    images: ["/images/kakao_thumb.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

// JSON-LD 구조화된 데이터 (AI & 검색엔진 이해용)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "GROK Prompt Generator",
  alternateName: "Grok Imagine 프롬프트 생성기",
  description: "Grok Imagine AI를 위한 이미지/영상 프롬프트 생성 도구. 500개 이상의 프롬프트 요소를 조합하여 한국어/영어 프롬프트를 실시간으로 생성합니다.",
  url: siteUrl,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "KRW",
  },
  featureList: [
    "이미지 프롬프트 생성",
    "영상 프롬프트 생성",
    "한국어/영어 이중 언어 지원",
    "500개 이상의 프롬프트 요소",
    "프리셋 템플릿 제공",
    "실시간 프롬프트 미리보기",
    "원클릭 복사 기능",
  ],
  inLanguage: ["ko", "en"],
  creator: {
    "@type": "Organization",
    name: "GROK Prompt Generator",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NW5HBTV6');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Analytics 4 (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X6YFE1L8D9" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-X6YFE1L8D9');`,
          }}
        />
        {/* End Google Analytics 4 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NW5HBTV6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
