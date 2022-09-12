import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Meta from '../components/meta'
import '../styles/index.css'
import styles from '../components/styles.module.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The Inter Net</title>
      </Head>
      <Meta />
      <div className={styles["bgWrap"]}>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
    </>
  )
}
