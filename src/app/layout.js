import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Inter } from "next/font/google";

import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { BackgroundColor } from "@/components/Theme/bgColor";
import ToastProvider from "@/components/ToastContainer/ToastContainer";
import "react-quill/dist/quill.snow.css";
import "prismjs/themes/prism.css";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Tailwind Template",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <AuthProvider>
            <BackgroundColor />
            <div className="container relative">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
