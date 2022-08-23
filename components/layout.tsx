import Alert from './alert'
import Meta from './meta'
import Image from 'next/image'
import styles from './styles.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <div>
      <div className={styles["bgWrap"]}>
        <Image
          src="/assets/blog/authors/jj.jpeg"
          layout="fill"
          objectFit="cover"
          
        />
      </div>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
