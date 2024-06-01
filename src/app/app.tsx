import { useEffect } from "react";
import { ThemeProvider } from 'next-themes';
import { createRoot } from 'react-dom/client';
import RootLayout from './layout';

interface Props {
    Component: React.ElementType;
    pageProps?: any;
}

function MyApp({ Component, pageProps }: Props) {


  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// Render the application using createRoot
const container:any = document.getElementById('root');
const root = createRoot(container);
root.render(<MyApp Component={RootLayout} />)
