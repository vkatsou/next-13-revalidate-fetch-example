import { ReactNode } from 'react';
import '@/styles/globals.css';

function RootLayout({
                      children,
                    }: {
  children: ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
    <head>
    </head>
    <body>
            {children}
    </body>
    </html>
  );
}

export default RootLayout;