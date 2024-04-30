import img2 from "../../assets/img2.png";
import { motion } from "framer-motion";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div>
              <motion.img
              initial={{opacity: 0, x:100}}
              whileInView={{opacity:1, x:0}}
              transition={{duration: 2, delay:0.5}}
              src={img2} alt="sateliteImg" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl"/>
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              <motion.p
                 initial={{opacity: 0, y:50}}
                 whileInView={{opacity:1, y:0}}
                 transition={{duration: 1}}
              className="text-sky-800 uppercase"> our mission </motion.p>
              <motion.h1 
               initial={{opacity: 0, y:50}}
               whileInView={{opacity:1, y:0}}
               transition={{duration: 1, delay:0.5}}
              className="uppercase text-5xl"> Vanguardia </motion.h1>
              <motion.p
               initial={{opacity: 0, y:-20}}
               whileInView={{opacity:1, y:0}}
               transition={{duration: 1, delay:1.5}}
              >
                En STELLAE-ST, nos dedicamos a potenciar el rendimiento de los streamers para que alcancen todo su potencial. Con soluciones innovadoras y un enfoque centrado en el crecimiento, acompañamos a cada streamer en su viaje hacia el éxito.
              </motion.p>
              <motion.button
              initial={{opacity: 0}}
              whileInView={{opacity:1}}
              transition={{duration: 1, delay:1.8}}
              className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200">
                Ver Mas
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
