import wave from "../../assets/wave Gif.gif";
import CountUp from 'react-countup';
import { motion } from "framer-motion";

const ServiceData = [
  {
    frase:  "goals",
    content: <div><CountUp start={0} end={1000} duration={8} /> </div>,
    description: <motion.div
                  initial={{opacity: 0, y:-10}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration: 0.5, delay:0.8}}
                  >Metas logradas</motion.div>,
    icon: <motion.h1 
            initial={{opacity: 0, y:10}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.8}}                  
            className="text-7xl "> 🚀 
          </motion.h1>
  },
  {
    frase: "stars",
    content: <div><CountUp start={0} end={10000} duration={8} /> </div>,
    description: <motion.div
                  initial={{opacity: 0, y:-10}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration: 0.5, delay:1.2}}
                  >Nuestros Streamers</motion.div>,
    icon: <motion.h1
            initial={{opacity: 0, y:10}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.5, delay:0.5}} 
            className="text-7xl"> 🌟 
            </motion.h1>
  },
  {
    frase: "projects",
    content: <div><CountUp start={0} end={100} duration={8} /> </div>,
    description: <motion.div
                  initial={{opacity: 0, y:-10}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration: 0.5, delay:1.6}}
                   >Ideas alcanzadas
                 </motion.div> ,
    icon: <motion.h1
           initial={{opacity: 0, y:10}}
           whileInView={{opacity:1, y:0}}
           transition={{duration: 0.5, delay:1}} 
           className="text-7xl " > 💡 
          </motion.h1>
  },
];
const HeroCard = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container pt-9">
          <div className="min-h-[400px]">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
                {ServiceData.map((data, index) => {
                  return (
                    <div key={index} 
                     className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto">
                      {data.icon} 
                      <motion.h1
                      initial={{opacity: 0}}
                      whileInView={{opacity:1}}
                      transition={{duration: 0.8, delay:0.5}}
                      className="pt-5 uppercase font-poppins-frases text-transparent bg-gradient-to-r from-blue-500 via-white to-pink-500 bg-clip-text">{data.frase}</motion.h1>
                      <h1 className="font-poppins-semibold text-4xl pt-1">{data.content}</h1>
                      <p className=" font-poppins-500  font-medium text-lg ">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              <motion.img
              initial={{opacity: 0, y:0}}
              whileInView={{opacity:1, y:-100}}
              transition={{duration: 2}}
              src={wave} alt="wave" className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
