import { motion } from 'framer-motion'

export const AnimatedDiv = ({ children }: { children: React.ReactNode }) => {
  const fadeInProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  }

  return <motion.div {...fadeInProps}>{children}</motion.div>
}
