import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
}

export default function PageWrapper({ title, description, children }) {
  return (
    <>
      <Helmet>
        <title>{title ? `${title} — DreamRoots Kenya` : 'DreamRoots Kenya | Rooted in Empowerment'}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  )
}

