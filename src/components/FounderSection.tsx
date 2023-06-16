import Image from 'next/image'
import {
  FaCalculator,
  FaChartBar,
  FaArchive,
  FaRegComments,
  FaUserTie,
} from 'react-icons/fa'

import founder from '../assets/founder.jpeg'

export default function AboutSection() {
  return (
    <div className="flex h-auto flex-col items-center justify-around gap-10 bg-zinc-100 px-[13%] py-14 text-black md:gap-32 lg:flex-row">
      <section className="flex flex-col gap-3">
        <h5 className="font-alt text-xl text-primary">Fundador</h5>
        <h1 className="font-alt text-5xl font-bold">Marcio José Bertoldo</h1>
        <p className="text-lg text-gray-600">
          O Contador responsável Marcio José Bertoldo é Bacharel em Ciências
          Contábeis pela FACEPAL do Estado do Paraná e Pós Graduado pelo IPOG,
          possui vasta experiência na área de contabilidade e está em constante
          busca por conhecimento para atender aos clientes com o máximo de
          qualidade e segurança.
        </p>
        <div className="pt-3">
          <ul className="py-3 text-lg text-gray-600">
            <li className="flex items-center gap-3 py-1">
              <div>
                <FaCalculator size={18} className="text-lg text-primary" />
              </div>
              <p>Habilidade com números</p>
            </li>
            <li className="flex items-center gap-3 py-1">
              <div>
                <FaArchive size={18} className="text-lg text-primary" />
              </div>
              <p>Organização</p>
            </li>
            <li className="flex items-center gap-3 py-1">
              <div>
                <FaUserTie size={18} className="text-lg text-primary" />
              </div>
              <p>Responsabilidade</p>
            </li>
            <li className="flex items-center gap-3 py-1">
              <div>
                <FaChartBar size={18} className="text-lg text-primary" />
              </div>
              <p>Perfil Analítico</p>
            </li>
            <li className="flex items-center gap-3 py-1">
              <div>
                <FaRegComments size={18} className="text-lg text-primary" />
              </div>
              <p>Boa comunicação</p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <Image
          src={founder}
          alt="equipe"
          width={1000}
          height={1000}
          className={`rounded-3xl`}
        />
      </section>
    </div>
  )
}
