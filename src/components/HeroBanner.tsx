'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import Image from 'next/image'

import office1 from '../assets/office1.jpg'
import office2 from '../assets/office2.jpg'
import ButtonBanner from './ButtonBanner'

const HeroBanner = () => {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      interval={7000}
      showThumbs={false}
      showStatus={false}
      className="relative h-[50vh] md:h-[80vh]"
      emulateTouch
    >
      <div className="">
        <Image
          src={office1}
          priority
          alt="imageCarousel1"
          className="h-[50vh] object-cover object-top blur-sm brightness-50 md:h-[80vh]"
        />
        <div className="absolute bottom-[25%] flex flex-col items-center gap-6 md:bottom-[35%] md:px-[25%]">
          <p className="font-alt text-[5vh] font-extrabold text-zinc-100 md:text-7xl">
            Quero abrir minha empresa
          </p>
          <p>Inicie o seu sonho agora, nós iremos te ajudar a Começar.</p>
          <ButtonBanner href="aberturaMJB.pdf" content="Clique Aqui" />
        </div>
      </div>
      <div>
        <Image
          src={office2}
          alt="imageCarousel2"
          className="h-[50vh] object-cover blur-sm brightness-50 md:h-[80vh]"
        />
        <div className="absolute bottom-[25%] flex flex-col items-center gap-6 md:bottom-[35%] md:px-[30%]">
          <p className="font-alt text-[5vh] font-extrabold text-zinc-100 md:text-7xl">
            Já tenho minha empresa
          </p>
          <p>Migre sua empresa, iremos te ajudar com todo o processo.</p>
          <ButtonBanner href="existenteMJB.pdf" content="Clique Aqui" />
        </div>
      </div>
    </Carousel>
  )
}

export default HeroBanner
