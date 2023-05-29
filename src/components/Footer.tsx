import React from 'react'
import {
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import Wrapper from './Wrapper'
import Link from 'next/link'
import logo from '../assets/logo-white.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#aa1a21] pb-3 pt-14 text-white">
      <Wrapper className="flex flex-col justify-between gap-[50px] md:flex-row md:gap-0">
        {/* LEFT START */}
        <div className="flex flex-col gap-[50px] md:flex-row md:gap-[75px] lg:gap-[300px]">
          {/* MENU START */}
          <div className="flex shrink-0 flex-col gap-3">
            <Image src={logo} alt="logo" width={70} />
            <div className="font-oswald cursor-default font-medium uppercase italic">
              MJB Contabilidade
            </div>
          </div>
          {/* MENU END */}

          {/* NORMAL MENU START */}
          <div className="flex shrink-0 gap-[50px] md:gap-[75px] lg:gap-[100px]">
            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald text-xl font-medium">
                Entre em Contato
              </div>
              <div className="flex items-center gap-2 text-white/[0.7]">
                <FaEnvelope /> <p>contato@mjbcont.com.br</p>
              </div>
              <div className="flex items-center gap-3 text-white/[0.7]">
                <FaPhoneAlt /> (47) 3368-9784
              </div>
              <Link
                href="https://api.whatsapp.com/send?phone=5547997412345"
                className="flex items-center gap-2 text-white/[0.7]"
                target="_blank"
              >
                <FaWhatsapp size={20} />
                (47) 9 9741-2345
              </Link>
              <Link
                href="https://www.google.com/maps/place/MJB+Contabilidade/@-27.1286409,-48.6057599,20z/data=!4m6!3m5!1s0x94d8ae284d252c89:0xf28c7a469512ea6f!8m2!3d-27.1286432!4d-48.6058478!16s%2Fg%2F1ptyjdc6k?authuser=0&entry=ttu"
                target="_blank"
                className="flex items-center gap-2 text-white/[0.7]"
              >
                <FaMapMarkerAlt /> Rua 240, 345 - Meia Praia, Itapema - SC
              </Link>
            </div>
            {/* MENU END */}
          </div>
          {/* NORMAL MENU END */}
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex flex-col justify-center gap-4 md:items-center">
          <p className="text">Nos acompanhe pelo instagram</p>
          <Link
            href="https://www.instagram.com/contabilidademjb"
            target="_blank"
            className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white/[0.25] text-white hover:bg-white/[0.5]"
          >
            <FaInstagram size={30} />
          </Link>
        </div>
        {/* RIGHT END */}
      </Wrapper>
      <Wrapper className="mt-10 flex flex-col justify-between gap-[10px] md:flex-row md:gap-0">
        {/* LEFT START */}
        <div className="cursor-pointer text-center text-[12px] text-white/[0.5] hover:text-white md:text-left">
          {'© 2022 MJB Contabilidade – Todos Os Direitos Reservados'}
        </div>
        {/* LEFT END */}
      </Wrapper>
    </footer>
  )
}
