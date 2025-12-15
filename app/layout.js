import './globals.css';

export const metadata = {
  title: 'Quiz App',
  description: 'Next.js + Tailwind + NeonDB w/ PG',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
