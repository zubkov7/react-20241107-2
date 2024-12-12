export const metadata = {
  title: "Vite + React",
  description: "Vite + React",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/svg+xml' href='/vite.svg' />
      </head>
      <body>
        <div id='root'>{children}</div>
      </body>
    </html>
  );
}
