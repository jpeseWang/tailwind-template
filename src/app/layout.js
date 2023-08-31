import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { BackgroundColor } from "@/components/Theme/bgColor";
import "prismjs/themes/prism.css"; // Import the Prism.js stylesheet
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tailwind Template",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <BackgroundColor />

          <div className="container relative">
            <Navbar />

            {children}
            <ToastContainer />
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
