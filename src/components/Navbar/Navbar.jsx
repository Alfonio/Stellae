import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <motion.img
              whileInView={{opacity: 1}}
              initial={{opacity: 0}}
              transition={{duration: 2}}
              src={Logo} alt="" className="w-10" />
              <motion.span
               whileInView={{opacity: 1}}
               initial={{opacity: 0}}
               transition={{duration: 1.5, delay: 0.3}}
              >STELLAE-ST</motion.span>
            </div>
            <div className="text-white hidden sm:block">
              <motion.ul 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -10}}
                transition={{duration: 0.5}}
              className="flex items-center gap-6 text-xl py-4 ">
                <motion.li
                  whileTap={{ scale: 1 }} 
                  whileHover={{ scale: 1.2 }}
                  className="text-white hover:text-blue-400"><a href="#">About</a></motion.li>
                <motion.li
                  whileTap={{ scale: 1 }} 
                  whileHover={{ scale: 1.2 }}
                  className="text-white hover:text-blue-400"><a href="#">Servicios</a></motion.li>
                <motion.li
                  whileTap={{ scale: 1 }} 
                  whileHover={{ scale: 1.2 }} 
                  className="text-white hover:text-blue-400"><a href="#">Coaching</a></motion.li>
                <motion.li
                  whileTap={{ scale: 1 }} 
                  whileHover={{ scale: 1.2 }} 
                  className="text-white hover:text-blue-400"><a href="#">Market</a></motion.li>
              </motion.ul>
            </div>
            <div>
            <motion.button
            initial={{ opacity: 0, scale: 0}} 
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.8 }} 
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.12}}
            className="group relative inline-flex items-center justify-start overflow-hidden rounded bg-transparent px-3 py-1  font-medium transition-all border-2 border-white hover:bg-transparent hover:border-transparent hover:text-white">
            <span className="absolute bottom-0 left-0 mb-9 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-[-40deg] rounded bg-gradient-to-br from-[#67d4b7] via-[#51c3cb] to-[#ffffff] transition-all duration-500 ease-out group-hover:mb-32 group-hover:ml-0 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Login</span>
          </motion.button>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
