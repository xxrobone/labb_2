import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Btn from './components/buttons/Btn'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
     <Btn>My Button</Btn>
    </main>
  )
}
