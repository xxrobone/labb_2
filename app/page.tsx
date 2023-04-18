import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Btn from './components/buttons/Btn'
import Heading from './components/heading/Heading'
import List from './components/list/List'
import Destroy from './components/destroy/Destroy'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Destroy />
    <main className={styles.main}>
      <Heading title="A new Cool Heading" />
      <List items={["javascript", "typescript", "react", "nextjs", "git", "emotions"]} render={(item: string) => <div>{item.toLowerCase()}</div>}/>
     <Btn>My Button</Btn>
    </main>
    </>
  )
}
