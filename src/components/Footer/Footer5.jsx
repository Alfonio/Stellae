import { FaFacebook, FaLinkedin, FaYoutube,FaTwitch, FaKickstarter  } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-indigo-950">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className=" grid md:grid-cols-3 py-5">
          {/* first column */}
          <div className=" py-8 px-4 ">
            <motion.h1
             initial={{opacity: 0, y:20}}
             whileInView={{opacity: 1, y:0}}
             transition={{duration: 0.5}}
             className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
              Be Ready To Grow
            </motion.h1>
            <motion.p
             initial={{opacity: 0, y:-20}}
             whileInView={{opacity: 1, y:0}}
             transition={{duration: 0.5, delay:0.5}}
             className="text-gray-400">¿Quieres ser parte de este proyecto?{" "}
              <span className=" text-white font-bold "> Ingresa tu correo electrónico aquí</span>{" "} y mantente atento a nuevos anuncios{" "}
            </motion.p>
            <br />
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.5, delay:0.8}}
            className="flex items-center h-10">
              <input
                type="text" placeholder="Email"
                className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-900 bg-gray-900 border-gray-400 border-2 "
              />
              <button className="bg-amber-700 hover:bg-amber-800 h-full inline-block py-2 px-6 text-white">
                Go
              </button>
            </motion.div>
          </div>
          {/* Second column */}

          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <motion.h1
                initial={{opacity: 0, y:-20}}
                whileInView={{opacity: 1, y:0}}
                transition={{duration: 0.1, delay:1.2}}
                className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                   Importante
                </motion.h1>
                <ul className={`flex flex-col gap-3 `}>
                  <motion.li 
                  initial={{opacity: 0, x:20}}
                  whileInView={{opacity: 1, x:0}}
                  transition={{duration: 0.5, delay:1.35}}
                  className="cursor-pointer">Analisis-Sec</motion.li>
                  <motion.li 
                   initial={{opacity: 0, x:20}}
                   whileInView={{opacity: 1, x:0}}
                   transition={{duration: 0.5, delay:1.55}}
                  className="cursor-pointer">Propu-Valor</motion.li>
                  <motion.li
                  initial={{opacity: 0, x:20}}
                  whileInView={{opacity: 1, x:0}}
                  transition={{duration: 0.5, delay:1.75}}
                  className="cursor-pointer">Taller 3</motion.li>
                  <motion.li
                  initial={{opacity: 0, x:20}}
                  whileInView={{opacity: 1, x:0}}
                  transition={{duration: 0.5, delay:1.95}}
                  className="cursor-pointer">Taller 4</motion.li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <motion.h1 
                 initial={{opacity: 0, y:-20}}
                 whileInView={{opacity: 1, y:0}}
                 transition={{duration: 0.1, delay:2.15}}
                className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Links</motion.h1>
                <ul className="flex flex-col gap-3 ">
                  <motion.li
                   initial={{opacity: 0, x:20}}
                   whileInView={{opacity: 1, x:0}}
                   transition={{duration: 0.5, delay:2.35}}
                   className="cursor-pointer">Home</motion.li>
                  <motion.li
                  initial={{opacity: 0, x:20}}
                  whileInView={{opacity: 1, x:0}}
                  transition={{duration: 0.5, delay:2.55}}
                  className="cursor-pointer">About</motion.li>
                  <motion.li
                  initial={{opacity: 0, x:20}}
                  whileInView={{opacity: 1, x:0}}
                  transition={{duration: 0.5, delay:2.75}}
                  className="cursor-pointer">Servicios</motion.li>
                  <motion.li
                  initial={{opacity: 0, x:20}}
                  whileInView={{opacity: 1, x:0}}
                  transition={{duration: 0.5, delay:2.95}}
                  className="cursor-pointer">Login</motion.li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <motion.h1
                 initial={{opacity: 0, y:-20}}
                 whileInView={{opacity: 1, y:0}}
                 transition={{duration: 0.1, delay:3.15}}
                className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Contact Us</motion.h1>
                <div className="flex flex-col gap-3">
                  <motion.div
                  initial={{opacity: 0, x:20}}
                  whileInView={{opacity: 1, x:0}}
                  transition={{duration: 0.5, delay:3.35}}
                  className="flex items-center gap-3">
                    <HiLocationMarker />
                    <p>Mar del Plata. Bs.As</p>
                  </motion.div>
                  <motion.div
                  initial={{opacity: 0, x:20}}
                  whileInView={{opacity: 1, x:0}}
                  transition={{duration: 0.5, delay:3.55}}
                  className="flex items-center gap-3 mt-3">
                    <MdMessage />
                    <p>Stellast@gmail.com</p>
                  </motion.div>
                  <motion.div
                  initial={{opacity: 0, x:20}}
                  whileInView={{opacity: 1, x:0}}
                  transition={{duration: 0.5, delay:3.75}}
                  className="flex items-center gap-3 mt-3">
                    <MdCall />
                    <p>+54 123456789</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex justify-between items-center text-center py-6 border-t-2 border-gray-300/40">
            <motion.span
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2}}
            className="text-sm text-gray-400">
            © copyright 2024 Stellae || ST
            </motion.span>
            <div className="flex items-center justify-center gap-4 mb-4">
             
              <motion.a 
               initial={{opacity: 0}}
               whileInView={{opacity: 1}}
               whileHover={{ scale: 1.2 }}
               transition={{ duration: 0.3, delay:0.2 }}
              href="https://www.facebook.com/"  rel="noopener noreferrer"><FaFacebook className="text-4xl text-blue-500" /></motion.a>              
              <motion.a 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, delay:0.3 }}
              href="https://www.linkedin.com/" target="_blank"  rel="noopener noreferrer"><FaLinkedin className="text-4xl text-sky-600" /></motion.a>
              <motion.a 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, delay:0.4 }}
              href="https://www.twitter.com/"  target="_blank"  rel="noopener noreferrer"><FaXTwitter className="text-4xl text-black" /></motion.a>
              <motion.a 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, delay:0.5 }}
              href="https://www.youtube.com/"  target="_blank"  rel="noopener noreferrer"><FaYoutube className="text-4xl text-red-600" /></motion.a>
              <motion.a 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, delay:0.6 }}
              href="https://www.twitch.tv/"    target="_blank"  rel="noopener noreferrer"><FaTwitch className="text-4xl text-violet-600" /></motion.a>
              <motion.a 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, delay:0.7 }}
              href="https://www.kick.com/"     target="_blank"  rel="noopener noreferrer"><FaKickstarter className="text-4xl text-green-600" /></motion.a>

              
            </div>

            <span className="text-sm text-gray-400 ">
              <ul className="flex gap-3">
                <motion.li
                 initial={{opacity: 0}}
                 whileInView={{opacity: 1}}
                 transition={{duration: 2.5, delay:0.5}}
                className="hover:text-white">Privacy Policy</motion.li>
                <motion.li
                 initial={{opacity: 0}}
                 whileInView={{opacity: 1}}
                 transition={{duration: 2.5, delay:1}}
                className="hover:text-white">Terms & Conditions</motion.li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
