import React from 'react'

export default function Footer() {
  return (
    <footer
      className="bg-black text-center font-sora font-extralight py-4"
    >
      <p className="text-white text-xs">
        Powered by{' '}
        <a
          href="https://innovaihub.com.br"
          className=" hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Innovai Hub
        </a>{' '}
        © 2024
      </p>
    </footer>
  )
}