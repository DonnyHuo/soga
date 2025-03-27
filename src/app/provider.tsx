"use client";

import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { bsc, base } from "wagmi/chains";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [bsc, base],
  ssr: true
});

const queryClient = new QueryClient();

const customTheme = darkTheme({
  accentColor: "#191D26",
  accentColorForeground: "white",
  borderRadius: "medium",
  fontStack: "system",
  overlayBlur: "small"
});
customTheme.colors.accentColor = "#E5E7EB";
customTheme.colors.connectButtonBackground = "#000";
customTheme.colors.connectButtonText = "#fff";

const Providers = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          modalSize="compact"
          theme={customTheme}
          locale={"en"}
        >
          <Header />
          {children}
          <Footer />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;
