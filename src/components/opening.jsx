import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

function Opening() {
  return (
    <motion.div initial={{height:0}} animate={{height:"100vh"}} exit={{height:0}} transition={{delay:0.3, duration:0.5}} className='opening'>
      <h1>Welcome</h1>
    </motion.div>
  )
}

export default Opening
