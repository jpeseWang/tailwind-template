import Navbar from "@/components/navbar/Navbar";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { BackgroundColor } from "@/components/Theme/bgColor";
import ToastProvider from "@/components/ToastContainer/ToastContainer";
import "react-quill/dist/quill.snow.css";
import "prismjs/themes/prism.css";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import "react-toastify/dist/ReactToastify.css";
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
