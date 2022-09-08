import Head from 'next/head'
import Meta from './meta'
import styles from './styles.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>The Inter Net</title>
      </Head>
      <div className={styles["bgWrap"]}>
        
        <Meta />
        
          <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
