import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Darker_Grotesque } from 'next/font/google';

export const metadata = {
  title: "LinkBarge",
  description: "A link curation tool. Barge your links!",
};

const dG = Darker_Grotesque({
  weight: ["800"],
  subsets: ["latin"],

})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dG.className}>
      
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
