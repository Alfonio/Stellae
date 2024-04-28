import img1 from "../../assets/img1.png";

function Rapidscat  () {
  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
              <p className="text-sky-800 uppercase"> Be Yourself </p>
              <h1 className="uppercase text-5xl"> Be a Streamer </h1>
              <p>
              Descubre tu voz única, transmite tu pasión y comparte tu creatividad con el mundo. ¡Únete a la comunidad de streamers y haz realidad tus sueños mientras creas contenido diverso y emocionante a tu manera!
              </p>
              <button className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200">
                Ver Mas
              </button>
            </div>
            <div>
              <img src={img1} alt="satelitImg" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Rapidscat;
