import CardTimer from './CardTimer'

export default function StatsSection() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(/office3.jpg)`,
        }}
        className="flex h-auto flex-col items-center justify-around gap-10 bg-cover bg-fixed bg-top bg-no-repeat px-[13%] py-28 md:px-44 min-[1445px]:flex-row"
      >
        <section className="flex flex-col justify-center">
          <h1 className="font-alt text-5xl drop-shadow-xl">
            Obtenha uma solução para seus negócios
          </h1>
          <h3 className="pt-3 text-3xl italic drop-shadow-xl">
            MJB Contabilidade, 22 anos no mercado trazendo as melhores soluções.
          </h3>
        </section>
        <section className="flex flex-row gap-6 max-md:flex-col">
          <div className="flex flex-col gap-6">
            <CardTimer num={1000} text="Clientes Satisfeitos" plus />
            <CardTimer num={30} text="Colaboradores" plus />
          </div>
          <div className="flex flex-col gap-6">
            <CardTimer num={20} text="Municípios Atendidos" plus />
            <CardTimer num={22} text="Anos" />
          </div>
        </section>
      </div>
    </div>
  )
}
