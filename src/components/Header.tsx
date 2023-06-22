'use client'

import { useState } from 'react'
import logo from '../assets/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Header() {
  const [navbar, setNavbar] = useState(false)

  return (
    <header className={`w-full bg-zinc-100 shadow`}>
      <div className="mx-auto px-4 lg:flex lg:max-w-7xl lg:items-center lg:gap-[32%] lg:px-8">
        <div>
          <div className="flex items-center justify-between py-3 lg:block lg:py-5">
            <Link href="/">
              <Image src={logo} alt="logo" className="w-[40px] lg:w-[60px]" />
            </Link>
            <div className="lg:hidden">
              <button
                className="rounded-lg p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 lg:mt-0 lg:block lg:pb-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 font-alt lg:flex lg:space-x-6 lg:space-y-0">
              <li
                className={`text-primary hover:underline hover:underline-offset-8`}
              >
                <Link href="/">Home</Link>
              </li>
              <li className="text-primary hover:underline hover:underline-offset-8">
                <Link href="/about">Sobre</Link>
              </li>
              <li className="text-primary hover:underline hover:underline-offset-8">
                <Link href="/services">Serviços</Link>
              </li>
              <li className="text-primary hover:underline hover:underline-offset-8">
                <Link href="/contact">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`mt-3 pb-3 text-3xl text-primary lg:mt-0 lg:block lg:pb-0 ${
            navbar ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex gap-6">
            <li>
              <Link
                href="https://www.instagram.com/contabilidademjb"
                target="_blank"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="https://api.whatsapp.com/send?phone=5547997412345"
                target="_blank"
              >
                <FaWhatsapp />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
