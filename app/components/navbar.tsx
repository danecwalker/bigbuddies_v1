import { Link } from "@remix-run/react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Navbar = () => {

  // get screen width
  // if screen width is less than 768px
  //   display hamburger menu
  // else
  //   display full navbar

  const [screenWidth, setScreenWidth] = useState(0)
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth)
    })
  }, [])

  if (screenWidth < 768) {
    return <Mobile />
  } else {
    return <Desktop />
  }
}

const aVariants = {
  open: { translateY: -1, rotate: 45 },
  closed: { translateY: -5 },
}

const bVariants = {
  open: { translateY: -1, rotate: -45 },
  closed: { translateY: 4 },
}

const Mobile = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed bg-white w-full z-50 p-8">
      <button onClick={() => setOpen(p => !p)} className="relative block z-50 w-6 h-[10px] ml-auto">
        <motion.div 
          initial={{ translateY: -1 }}
          animate={open ? "open" : "closed"}
          variants={aVariants}
          className="absolute top-1/2 block w-full h-[2px] bg-black"></motion.div>
        <motion.div
          initial={{ translateY: -1 }}
          animate={open ? "open" : "closed"}
          variants={bVariants}
          className="absolute top-1/2 block w-full h-[2px] bg-black"></motion.div>
      </button>
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: open ? 1 : 0, height: open ? "100vh" : 0, transition: { duration: 0.2 } }}
        className="absolute top-0 left-0 w-full bg-white">
        <div className="flex flex-col items-center justify-center w-full h-full gap-8 text-2xl text-violet-400">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: open ? 1 : 0, x: open ? 0 : -10, transition: { delay: 0.2 } }}>
            <Link to="#about-us" onClick={() => setOpen(false)}>About Us</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: open ? 1 : 0, x: open ? 0 : -10, transition: { delay: 0.3 } }}>
            <Link to="#" onClick={() => setOpen(false)}>Pricing</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: open ? 1 : 0, x: open ? 0 : -10, transition: { delay: 0.4 } }}>
            <Link to="#" onClick={() => setOpen(false)}>Join the Team</Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

const Desktop = () => {
  return (
    <div>Navbar</div>
  )
}


export default Navbar