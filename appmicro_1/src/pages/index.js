import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

const ExternalComponent = dynamic(() => import('appmicro_2/Button'), {
  ssr: false,
  suspense: true
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>holaaa </h1>
        <ExternalComponent />
      </main>
    </>
  )
}
