import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Inter } from "next/font/google";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { BackgroundColor } from "@/components/Theme/bgColor";
import ToastProvider from "@/components/ToastContainer/ToastContainer";
import { SubscriptionContextProvider } from "@/context/SubscriptionContext";
import "react-quill/dist/quill.snow.css";
import "prismjs/themes/prism.css";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import { Toaster } from "react-hot-toast";
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
            <SubscriptionContextProvider>
              <Toaster />
              <BackgroundColor />
              <div className="container relative">
                <Header />
                {children}
                <Footer />
              </div>
            </SubscriptionContextProvider>
          </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
