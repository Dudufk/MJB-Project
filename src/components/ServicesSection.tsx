import Button from './Button'
import FlipCard from './FlipCard'

export default function ServicesSection() {
  return (
    <div className="flex h-auto flex-row items-center justify-around gap-10 bg-zinc-50 px-[13%] py-28 max-lg:flex-col-reverse md:px-44">
      <section className="flex flex-row gap-6 max-md:flex-col">
        <div className="flex flex-col gap-6">
          <FlipCard
            icon="FaCalculator"
            text="Contabilidade"
            subText="Assessoria Contábil"
            verseText="A nossa equipe educa o seu negócio para a prosperidade, gerando
          evolução contínua através de serviços que amparam os setores
          financeiro, trabalhista e jurídico."
          />
          <FlipCard
            icon="FaChartBar"
            text="Fiscal"
            subText="Tributação Fiscal"
            verseText="Efetuar cálculos relacionados ao patrimônio da empresa, PIS e COFINS, lucro apurado e registro de tributos compensáveis. Taxas que incidem sobre a empresa."
          />
        </div>
        <div className="flex flex-col gap-6">
          <FlipCard
            icon="FaUsers"
            text="Recursos Humanos"
            subText="Assessoria Trabalhista"
            verseText="Amenize os riscos e conte com uma parceria especializada em gerar evolução para as rotinas do negócio."
          />
          <FlipCard
            icon="GiLion"
            text="IRPF"
            subText="Imposto de Renda"
            verseText="Conte conosco para te auxiliar quanto à declaração do IRPF. Evite transtornos na hora de realizar a entrega."
          />
        </div>
        <div className="flex justify-center pt-16 sm:hidden">
          <Button href="/services" content="Mais Serviços" />
        </div>
      </section>
      <section>
        <p className="pb-10 font-alt text-5xl text-black">Serviços Para Você</p>
        <div className="max-sm:hidden">
          <Button href="/services" content="Mais Serviços" />
        </div>
      </section>
    </div>
  )
}
