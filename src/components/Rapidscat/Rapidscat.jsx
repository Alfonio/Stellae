import img2 from "../../assets/img2.png"

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div>
              <img src={img2} alt="sateliteImg" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl"/>
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              <p className="text-sky-800 uppercase"> our mission </p>
              <h1 className="uppercase text-5xl"> Vanguardia </h1>
              <p>
              En STELLAE-ST, nos dedicamos a potenciar el rendimiento de los streamers para que alcancen todo su potencial. Con soluciones innovadoras y un enfoque centrado en el crecimiento, acompañamos a cada streamer en su viaje hacia el éxito.
              </p>
              <button className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200">
                Ver Mas
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
