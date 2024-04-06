import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './provider';
import SimpleFooter from './components/SimpleFooter';
import HeaderTest from './components/test-components/HeaderTest';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ajay Verma',
  description: 'Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {/* <HeaderTest /> */}
          {children}
          <SimpleFooter />
        </Providers>
      </body>
    </html>
  );
}
