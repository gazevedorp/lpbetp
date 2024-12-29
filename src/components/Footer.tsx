import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-r from-secondary to-accent text-center py-8"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <p className="text-white text-sm">
        Powered by{' '}
        <a
          href="https://innovaihub.com.br"
          className="text-primary underline hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Innovai Hub
        </a>{' '}
        © 2024
      </p>
    </motion.footer>
  )
}