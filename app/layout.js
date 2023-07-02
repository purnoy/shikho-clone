import './globals.css'
import { Noto_Sans_Bengali } from 'next/font/google';
import Header from './../components/Header';
import Footer from './../components/Footer';
import NavitemProvider from '@/context/NavigationContext';
import MobileNavigation from '@/components/MobileNavigation';


const noto = Noto_Sans_Bengali(
  {  
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  }
)

export const metadata = {
  
  title: "ঘরে বসে SSC/HSC'র A+ প্রস্তুতির বিশ্বস্ত প্রতিষ্ঠান । Shikho",
  description: 'দেশসেরা মেন্টরদের সাথে স্বল্প খরচে নবম থেকে দ্বাদশ শ্রেণি পর্যন্ত ছাত্র-ছাত্রীদের সারাবছর পড়ালেখা এবং SSC/HSC পরীক্ষার A+ প্রস্তুতির নির্ভরযোগ্য প্রতিষ্ঠান',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${noto.className} relative h-[2000px]`}>
        <NavitemProvider>
          <MobileNavigation/>
          <Header/>
            {children}
          <Footer/>          
        </NavitemProvider>
       
      </body>
    </html>
  )
}
