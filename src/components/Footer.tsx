import React from 'react'

export default function Footer() {
  return (
    <footer
      className="bg-black text-center font-sora font-extralight py-4"
    >
      <p className="text-white text-xs">
        <a
          href="https://innovaihub.com.br"
          className=" hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          innovai-hub
        </a>{' '}
        © 2025
      </p>
    </footer>
  )
}