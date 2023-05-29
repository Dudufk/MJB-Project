'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import Image from 'next/image'

import office1 from '../assets/office1.jpg'
import office2 from '../assets/office2.jpg'
import Button from './Button'

const HeroBanner = () => {
  return (
    <Carousel
      infiniteLoop
      nautoPlay
      showThumbs
      interval={7000}
      showStatus={false}
      className="relative h-[80vh]"
      emulateTouch
    >
      <div className="">
        <Image
          src={office1}
          alt="imageCarousel1"
          className="h-[80vh] object-cover object-top blur-sm brightness-50 "
        />
        <div className="absolute bottom-[35%] flex flex-col items-center gap-6 md:px-[25%]">
          <p className="font-alt text-[5vh] font-extrabold text-zinc-100 md:text-7xl">
            Quero abrir minha empresa
          </p>
          <p>Inicie o seu sonho agora, nós iremos te ajudar a Começar.</p>
          <Button href="aberturaMJB.pdf" />
        </div>
      </div>
      <div>
        <Image
          src={office2}
          alt="imageCarousel2"
          className="h-[80vh] object-cover blur-sm brightness-50"
        />
        <div className="absolute bottom-[35%] flex flex-col items-center gap-6 md:px-[30%]">
          <p className="font-alt text-[5vh] font-extrabold text-zinc-100 md:text-7xl">
            Já Tenho Minha Empresa
          </p>
          <p>Migre sua empresa, iremos te ajudar com todo o processo.</p>
          <Button href="existenteMJB.pdf" />
        </div>
      </div>
    </Carousel>
  )
}

export default HeroBanner
