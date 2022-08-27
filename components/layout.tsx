import Meta from './meta'
import Image from 'next/image'
import styles from './styles.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <div className={styles["bgWrap"]}>
        <Image
          src="/assets/bg.png"
          layout="fixed"
          width="3840"
          height="2160"          
        />
      </div>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
