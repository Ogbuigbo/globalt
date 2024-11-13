import type { Metadata } from "next";
import { Inter, STIX_Two_Text } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import Header from "./_components/Header";
import Footer from "./_components/Footer";


const inter = STIX_Two_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "gloriousstandtagency",
  description: "Your One Shop for Travel, Real Estate and Foriegn Language Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="">
					<Header />
				</div>
        <ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar
						newestOnTop
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="dark"
					/>
        {children}
        <Footer />
        </body>

    </html>
  );
}
