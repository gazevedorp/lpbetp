import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Disclosure, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

// Array de links para facilitar manutenção e escalabilidade
const navLinks = [
  { name: 'Início', href: '#hero' },
  { name: 'Planos', href: '#plans' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Acompanhamento', href: '#steps' },
  { name: 'Sobre', href: '#about' },
]

export default function Header() {
  return (
    <Disclosure as="header" className="fixed top-0 left-0 w-full z-50 bg-accent">
      {({ open }) => (
        <>
          <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
            {/* Logo - usando Next/Image para otimizar */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center" aria-label="Ir para Home">
                {/* Ajuste o width e height de acordo com sua logo */}
                <Image
                  src="/logo.svg"
                  alt="Logo da Personal Trainer"
                  width={60}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* Botão do menu mobile */}
            <div className="flex sm:hidden">
              <Disclosure.Button
                className="text-white hover:text-gray-200 focus:outline-none"
                aria-label="Abrir menu de navegação"
              >
                {open ? (
                  <AiOutlineClose className="h-6 w-6" />
                ) : (
                  <AiOutlineMenu className="h-6 w-6" />
                )}
              </Disclosure.Button>
            </div>

            {/* Navegação em telas maiores */}
            <nav className="hidden sm:flex sm:space-x-8 text-white font-sora">
              {navLinks.map((item) => (
                <Link key={item.name} href={item.href} className="hover:text-gray-200 transition-colors duration-300">
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Navegação em telas menores (mobile) */}
          <Transition
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-150 ease-in"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden bg-accent">
              {/* Use motion.div para animação do Framer Motion */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="px-4 pt-4 pb-2 space-y-3 text-white font-sora"
              >
                {navLinks.map((item) => (
                  <Link key={item.name} href={item.href} className="block hover:text-gray-200 transition-colors duration-200"
                    onClick={() => { /* você pode fechar o menu ao clicar, se quiser */ }}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}