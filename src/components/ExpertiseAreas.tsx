import {
  FaStoreAlt,
  FaHouseUser,
  FaRulerCombined,
  FaSuitcase,
} from 'react-icons/fa'

export default function ExpertiseAreas() {
  return (
    <div className="flex h-auto flex-col items-center gap-10 bg-zinc-100 px-[13%] py-28 text-black">
      <h1 className="font-alt text-5xl font-bold">
        Conheça algumas de nossas áreas de atuação
      </h1>
      <div className="flex flex-col gap-20 pt-36 md:gap-52 lg:flex-row">
        <section className="flex gap-14 md:gap-52">
          <div className="flex flex-col items-center gap-3">
            <div className="h-[100px] w-7 rounded-md bg-primary"></div>
            <h3 className="pl-1 text-xl">30%</h3>
            <FaStoreAlt className="mb-4 text-3xl text-primary" />
            <h3 className="text-xl">Comércio</h3>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-[100px] w-7 rounded-md bg-primary"></div>
            <h3 className="pl-1 text-xl">30%</h3>
            <FaRulerCombined className="mb-4 text-3xl text-primary" />
            <h3 className="text-xl">Construtoras</h3>
          </div>
        </section>
        <section className="flex items-end gap-14 md:gap-52">
          <div className="flex flex-col items-center gap-3">
            <div className="h-[60px] w-7 rounded-md bg-primary"></div>
            <h3 className="pl-1 text-xl">20%</h3>
            <FaHouseUser className="mb-4 text-3xl text-primary" />
            <h3 className="text-xl">Imobiliárias</h3>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-[60px] w-7 rounded-md bg-primary"></div>
            <h3 className="pl-1 text-xl">20%</h3>
            <FaSuitcase className="mb-4 text-3xl text-primary" />
            <h3 className="text-xl">Serviços</h3>
          </div>
        </section>
      </div>
    </div>
  )
}
