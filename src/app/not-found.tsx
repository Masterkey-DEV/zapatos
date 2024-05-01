import { titleFont } from "@/configs/fonts"
import Link from "next/link"


function notFound() {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center mx-5 px-4">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
        <p className="font-semibold text-xl">woops no tenemos cosas a esa direccion</p>
        <span>Puedes regresar al <Link href={'/'} className="font-normal hover:underline transition-all text-blue-600">Inicio</Link></span>
      </div>
    </div>
  )
}

export default notFound