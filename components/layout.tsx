import Meta from './meta'
import styles from './styles.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles["bgWrap"]}>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
