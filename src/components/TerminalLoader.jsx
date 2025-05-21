"use client"

import { useState, useEffect } from "react"
import "./TerminalLoader.css"

export default function TerminalLoader({ onLoadComplete }) {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const fullText = "npm run dev"

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      let currentIndex = 0

      // type each character with a delay
      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          //npm run dev line 
          setText(fullText.substring(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typingInterval)

          // delay before showing the complete text
          setTimeout(() => {
            setIsComplete(true)

            // fade out terminal
            setTimeout(() => {
              setIsVisible(false)

              // final timer before website loads
              setTimeout(() => {
                onLoadComplete()
              }, 1050) 
            }, 200)
          }, 1000)
        }
      }, 230) // typing speeed 
    }, 3000)

    return () => clearTimeout(initialDelay)
  }, [onLoadComplete])

  // blinking cursor effect
  useEffect(() => {
    if (isComplete) return

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [isComplete])

  if (!isVisible) return null

  return (
    <div className="terminal-loader">
      <div className="terminal-content">
        <span className="terminal-prompt">indra@Sattyajs-MacBook-Air Welcome % </span>
        <span className="terminal-text">{text}</span>
        {showCursor && <span className="terminal-cursor"></span>}
      </div>
    </div>
  )
}
