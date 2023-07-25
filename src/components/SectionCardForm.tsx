'use client'

export default function SectionCardForm() {
  return (
    <div className="flex h-auto flex-col items-center justify-around gap-10 bg-zinc-100 px-[13%] py-14 text-black">
      <h1 className="font-alt text-5xl font-bold">
        Obtenha uma solução para seus negócios
      </h1>
      <div className="relative flex h-full w-auto gap-16 rounded-xl bg-white p-10 text-black shadow-xl max-lg:flex-col md:gap-5">
        <section>
          <form className="flex w-[35vh] flex-col gap-2 text-gray-600 md:w-[50vh]">
            <label htmlFor="">Seu nome</label>
            <input type="name" name="name" className="border-b-[1px]" />

            <label htmlFor="">Seu e-mail</label>
            <input type="email" name="email" className="border-b-[1px]" />

            <label htmlFor="">Assunto</label>
            <input type="text" className="border-b-[1px]" />

            <label htmlFor="">Sua mensagem (opcional)</label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={5}
              className="border-b-[1px]"
            ></textarea>

            <button
              type="submit"
              className="h-10 bg-primary text-white hover:bg-red-600"
            >
              Enviar
            </button>
          </form>
        </section>
        <section>
          <div className="max-md:hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.8798124459104!2d-48.607878141260095!3d-27.128595288557268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8ae284d252c89%3A0xf28c7a469512ea6f!2sMJB%20Contabilidade!5e0!3m2!1spt-BR!2sbr!4v1689188932486!5m2!1spt-BR!2sbr"
              width="500"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="md:hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.8798124459104!2d-48.607878141260095!3d-27.128595288557268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8ae284d252c89%3A0xf28c7a469512ea6f!2sMJB%20Contabilidade!5e0!3m2!1spt-BR!2sbr!4v1689188932486!5m2!1spt-BR!2sbr"
              width="280"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  )
}
