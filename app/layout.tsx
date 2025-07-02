import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Detecta',
  description: 'Documentação do projeto Detecta',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Logo-detecta.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/Logo-detecta.svg" type="image/svg+xml" />
        {/* Outras tags */}
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
