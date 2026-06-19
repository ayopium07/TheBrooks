import "./globals.css";
import { CMSProvider } from "@/context/CMSContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import ScrollRevealInit from "@/components/ScrollRevealInit";

export const metadata = {
  title: "The CONFLUENCE CAMP RETREAT 2026 | Behold the Glory of God",
  description: "Official website of The CONFLUENCE CAMP RETREAT 2026. Join us from 23rd – 25th July, 2026 at Redemption City of God, Ogun State, Nigeria for a spiritual encounter. Theme: Behold the Glory of God. Free registration, feeding, and accommodation provided.",
  keywords: "The CONFLUENCE CAMP RETREAT, Retreat 2026, The Brooks Ministry, Behold the Glory of God, Christian Youth Retreat, Nigeria Christian Event",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body>
        <CMSProvider>
          <SplashScreen />
          <ScrollRevealInit />
          <Header />
          <main id="main-content-panel">
            {children}
          </main>
          <Footer />
        </CMSProvider>
      </body>
    </html>
  );
}
