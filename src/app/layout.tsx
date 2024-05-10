import Header from "@/Components/GlobalComponents/Header";
import dynamic from "next/dynamic";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import 'swiper/css';
import Script from "next/script";
import LayOutProvider from "@/Components/GlobalComponents/LayOutProvider";
const Footer = dynamic(() => import("@/Components/GlobalComponents/Footer"));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer ></Script >
      <body className={`overflow-x-hidden `}>
        <LayOutProvider>
          <ToastContainer />
          <div className="">
            <Header />
          </div>
          <div className="">{children}</div>
          <Footer />
        </LayOutProvider>
      </body>
    </html>
  );
}
