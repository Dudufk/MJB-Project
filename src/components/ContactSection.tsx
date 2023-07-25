import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactTitle() {
  return (
    <div className="flex h-auto flex-col items-center justify-around gap-10 bg-zinc-100 px-[13%] py-14 text-black md:gap-32">
      <section className="flex flex-col gap-3">
        <h1 className="font-alt text-5xl font-bold">
          Entre em Contato Conosco!
        </h1>
        <p className="text-lg text-gray-600">
          Descubra como podemos ajudar sua empresa a prosperar! Nossa equipe
          especializada em contabilidade está pronta para oferecer soluções
          personalizadas. Contate-nos agora mesmo e agende uma consulta
          gratuita.
        </p>
      </section>
      <section className="flex flex-col gap-36 pt-24 md:flex-row md:pt-0">
        <div className="flex flex-col items-center gap-3">
          <FaPhoneAlt className="text-4xl text-primary" />
          <h3 className="font-alt text-xl">Telefones</h3>
          <p className="text-center">{'(47) 3368-9784'}</p>
          <p className="text-center">{'(47) 9 9741-2345'}</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <FaMapMarkerAlt className="text-4xl text-primary" />
          <h3 className="font-alt text-xl">Endereço</h3>
          <p className="text-center">{'Rua 240, Nº 345 Meia Praia.'}</p>
          <p className="text-center">{'Itapema, Santa Catarina, 88220-000'}</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <FaEnvelope className="text-4xl text-primary" />
          <h3 className="font-alt text-xl">E-mail</h3>
          <p>contato@mjbcont.com.br</p>
        </div>
      </section>
    </div>
  )
}
