import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mall Interactive Sales Deck',
  description:
    'Interactive browser-based sales deck showcasing mall scale, energy, and commercial value.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
