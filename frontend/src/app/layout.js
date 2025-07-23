import "./globals.css";
import ReactQueryProvider from "./components/ReactQueryProvider.jsx";
import Layout from "./components/Layout";

export const metadata = {
  title: "Micro-Chirp",
  description: "Micro-blogging app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <Layout>{children}</Layout>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
