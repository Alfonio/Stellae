import MountainPng from "../../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 ">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 className="text-5xl font-bold">Share Your Story</h1>
            <p className="text-lg">
            Despierta la grandeza de tu historia. Que cada momento cobre vida con nuestro streaming, convirtiendo cada emisión en una experiencia cautivadora. Haz que el mundo se rinda ante tu narrativa, y deja que tu pasión encienda corazones en cada rincón del planeta. Tu historia merece ser vista: ¡haz que brille con nuestro streaming!
            </p>
            <button className="btn bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-600 hover:to-blue-400 px-3 py-2  rounded-md duration-200">
             Ver Más
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <img src={MountainPng} alt="" className="absolute right-0 bottom-0 w-full brightness-50 z-10 mt-10"/>
      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
