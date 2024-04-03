import "./globals.css";

export const metadata = {
  title: "Yogesh Karki",
  description: "Front End Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
