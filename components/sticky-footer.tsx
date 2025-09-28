"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"

export function StickyFooter() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const isNearBottom = scrollTop + windowHeight >= documentHeight - 100

          setIsAtBottom(isNearBottom)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isAtBottom && (
        <motion.div
          className="fixed z-50 bottom-0 left-0 w-full h-80 flex justify-center items-center"
          style={{ backgroundColor: "#4F46E5" }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div
            className="relative overflow-hidden w-full h-full flex flex-col md:flex-row justify-between px-8 md:px-12 items-center py-12"
            style={{ color: "#FFFFFF" }}
          >
            <motion.div
              className="mb-8 md:mb-0 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2">Buddhi Voice</h3>
              <p className="text-lg opacity-90">Transform your call operations with AI</p>
            </motion.div>
            
            <motion.div
              className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12 text-sm sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ul className="space-y-2">
                <li className="hover:underline cursor-pointer transition-colors">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:underline cursor-pointer transition-colors">
                  <Link href="/features">Features</Link>
                </li>
                <li className="hover:underline cursor-pointer transition-colors">
                  <Link href="/workflows">Use Cases</Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="hover:underline cursor-pointer transition-colors">
                  <Link href="/templates">Templates</Link>
                </li>
                <li className="hover:underline cursor-pointer transition-colors">
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li className="hover:underline cursor-pointer transition-colors">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </motion.div>
            
            <motion.h2
              className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[80px] font-bold select-none opacity-10"
              style={{ color: "#FFFFFF" }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 0.1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              BUDDHI VOICE 
            </motion.h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}