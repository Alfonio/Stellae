import img1 from "../../assets/img1.png";
import { motion } from "framer-motion";

function Rapidscat  () {
  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
              <motion.p
              initial={{opacity: 0, x:20}}
              whileInView={{opacity:1, x:0}}
              transition={{duration: 1}}
              className="text-sky-800 uppercase"> Be Yourself </motion.p>
              <motion.h1
              initial={{opacity: 0}}
              whileInView={{opacity:1}}
              transition={{duration: 1, delay:0.8}}
              className="uppercase text-5xl"> Be a Streamer </motion.h1>
              <motion.p
              initial={{opacity: 0, x:20}}
              whileInView={{opacity:1, x:0}}
              transition={{duration: 1, delay:1.3}}
              >
                Descubre tu voz única, transmite tu pasión y comparte tu creatividad con el mundo. ¡Únete a la comunidad de streamers y haz realidad tus sueños mientras creas contenido diverso y emocionante a tu manera!
              </motion.p>
              <motion.button
               initial={{opacity: 0}}
               whileInView={{opacity: 1}}
               transition={{duration: 1, delay:1.8}}
              className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200">
                Ver Mas
              </motion.button>
            </div>
            <div>
              <motion.img
               initial={{opacity: 0, x:-100}}
               whileInView={{opacity:1, x:0}}
               transition={{duration: 2, delay:0.5}}
              src={img1} alt="satelitImg" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Rapidscat;
