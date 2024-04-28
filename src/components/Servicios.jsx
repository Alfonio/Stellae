
// npm install react-icons 
import { FaReact } from "react-icons/fa";

const ServiceData = [
  {
    title: "HST",
    content: "300-1500km",
    description: "Un oasis en el desierto, donde las palmeras bailan con la brisa y el sol acaricia la arena dorada.",
    icon: <FaReact className= "text-7xl"/>,
    aosDelay: "300"
  },
  {
    title: "ISS",
    content: "300-1500km",
    description: "Un oasis en el desierto, donde las palmeras bailan con la brisa y el sol acaricia la arena dorada.",
    icon: <FaReact className= "text-7xl"/>,
    aosDelay: "500"
  },
  {
    title: "GPS",
    content: "300-1500km",
    description: "Un oasis en el desierto, donde las palmeras bailan con la brisa y el sol acaricia la arena dorada.",
    icon: <FaReact className= "text-7xl"/>,
    aosDelay: "700"
  }
]

function Servicios() {
  return (
    <div className="bg-black text-white">
        <div className="container">
            <div className="min-h-[400px]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                {
                 ServiceData.map((data, index) => (
                   <div key={index} className="min-h-[180px] flex flex-col justify-center gap-2 items-center rounded-xl bg-sky-900 backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto">
                    {data.icon}
                    <h1>{data.title}</h1>
                    <p>{data.content}</p>
                    <p className="text-sm">{data.description}</p>
                  </div>
                 ))
                }
                </div>
                <div>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Servicios