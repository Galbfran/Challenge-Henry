import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'
import NavBar from '@/Componentes/NavBar/NavBar';
import Footer from '@/Componentes/Footer/Footer';
import Providers from './Provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
