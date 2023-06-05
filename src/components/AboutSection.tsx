import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

import team from '../assets/equipe.png'
import Button from './Button'

export default function AboutSection() {
  const texts = [
    'Fornecer aos nossos clientes soluções completas em Contabilidade, Gestão tributária, fiscal e financeira das Empresa com ética profissional e pessoal, com contínuo aperfeiçoamento.',
    'Atender nossos clientes e parceiros nos prazos estabelecidos com comprometimento e dedicação.',
    'Valorizar os recursos humanos como um dos fatores chave para o nosso sucesso.',
    'Promover ações contínuas visando a sustentabilidade e continuidade nos nossos negócios e de nossos clientes com responsabilidade segurança e transparencia.',
  ]

  return (
    <div className="flex h-auto flex-col items-center justify-around gap-10 bg-zinc-50 px-[13%] py-28 text-black lg:flex-row">
      <section className="flex flex-col gap-3">
        <h5 className="font-alt text-xl text-primary">Quem somos</h5>
        <h1 className="font-alt text-5xl font-bold">MJB Contabilidade</h1>
        <p className="text-lg text-gray-600">
          A Empresa MJB Contabilidade iniciou suas atividades no mês de Julho de
          2000, o nosso objetivo sempre foi executar um trabalho sério, ágil,
          buscando aperfeiçoamento e soluções práticas para nossos clientes,
          está sendo uma jornada de aprendizado desde o início, pois para
          conseguirmos entregar um trabalho a altura de nossos clientes
          precisamos estar em constante processo de atualização para assim
          mantermos um serviço de qualidade, contamos com uma equipe de
          colaboradores capacitados que oferecem aos nossos clientes um
          atendimento personalizado de acordo com as necessidades de cada um.
        </p>
        <div className="pt-7">
          <h5 className="font-alt text-xl text-primary">Temos por Missão</h5>
          <ul className="py-3 text-lg text-gray-600">
            {texts.map((text, i) => (
              <li key={i} className="flex items-center gap-3 py-1">
                <div>
                  <FaCheck size={18} className="text-lg text-primary" />
                </div>
                {text}
              </li>
            ))}
          </ul>
          <div className="flex max-lg:justify-center">
            <Button content="Saiba mais" href="/about" />
          </div>
        </div>
      </section>
      <section>
        <Image
          src={team}
          alt="equipe"
          width={3000}
          height={3000}
          className="rounded-3xl"
        />
      </section>
    </div>
  )
}
