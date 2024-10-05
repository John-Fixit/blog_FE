import { useEffect } from "react";
import { ThemeProvider } from "next-themes"; // Make sure you're using ThemeProvider if needed
import RootLayout from "./layout"; // Adjust the import path based on your structure

import PushNotification from "@/components/PushNotification/PushNotification";

interface Props {
  Component: React.ElementType;
  pageProps?: any;
}



function MyApp({ Component, pageProps }: Props) {
  return (
    <>
      <PushNotification />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

// Export MyApp as default for Next.js
export default MyApp;
