// src/app/layout.tsx

import Header from './components/Header';
import '../../public/css/main.css'; // Or wherever your main CSS is

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>ModaUz</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}