import { motion } from 'framer-motion'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const variants = {
  hidden: { opacity: 0, x: 0, y: -50 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}


const Layout = ({ children }: Props) => {
  return (
    <motion.main
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ type: 'tween', duration:0.4 }}
    >
        {children}
    </motion.main>
  )
}

export default Layout
