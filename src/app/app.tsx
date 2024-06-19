import { useEffect } from "react";
import { ThemeProvider } from 'next-themes';
import { createRoot } from 'react-dom/client';
import RootLayout from './layout';

import PushNotification from "@/components/PushNotification/PushNotification";

interface Props {
    Component: React.ElementType;
    pageProps?: any;
}

function MyApp({ Component, pageProps }: Props) {


  return (
    <>
      <PushNotification />
      <Component {...pageProps} />
    </>
  );
}

// Render the application using createRoot
const container:any = document.getElementById('root');
const root = createRoot(container);
root.render(<MyApp Component={RootLayout} />)
