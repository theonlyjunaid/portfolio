"use client"

import { useTheme } from "next-themes"
import { useEffect, useRef } from "react"

export default function Chart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Chart data
    const data = [
      10, 41, 35, 51, 49, 62, 69, 91, 148, 120, 170, 160, 155, 172, 195, 210, 190, 205, 220, 235, 245, 230, 250, 260,
      270, 280, 290, 300, 310, 305, 290, 282, 265, 270, 290, 310, 330, 360, 380, 390, 410, 390, 370, 360, 380, 400, 410,
      430, 440, 450, 460, 470, 490, 500,
    ]

    // Chart dimensions
    const width = rect.width
    const height = rect.height
    const padding = 20
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Calculate min and max values
    const minValue = Math.min(...data) * 0.8
    const maxValue = Math.max(...data) * 1.2

    // Calculate x and y scales
    const xScale = chartWidth / (data.length - 1)
    const yScale = chartHeight / (maxValue - minValue)

    // Draw gradient
    const gradient = ctx.createLinearGradient(0, padding, 0, height - padding)
    gradient.addColorStop(0, theme === "dark" ? "rgba(124, 58, 237, 0.5)" : "rgba(124, 58, 237, 0.5)")
    gradient.addColorStop(1, theme === "dark" ? "rgba(124, 58, 237, 0)" : "rgba(124, 58, 237, 0)")

    // Draw line
    ctx.beginPath()
    ctx.moveTo(padding, height - padding - (data[0] - minValue) * yScale)

    for (let i = 1; i < data.length; i++) {
      const x = padding + i * xScale
      const y = height - padding - (data[i] - minValue) * yScale

      // Use bezier curves for smooth lines
      const prevX = padding + (i - 1) * xScale
      const prevY = height - padding - (data[i - 1] - minValue) * yScale

      const cpX1 = prevX + (x - prevX) / 2
      const cpX2 = prevX + (x - prevX) / 2

      ctx.bezierCurveTo(cpX1, prevY, cpX2, y, x, y)
    }

    // Complete the gradient area
    ctx.lineTo(padding + (data.length - 1) * xScale, height - padding)
    ctx.lineTo(padding, height - padding)
    ctx.closePath()

    // Fill with gradient
    ctx.fillStyle = gradient
    ctx.fill()

    // Draw the line again for the stroke
    ctx.beginPath()
    ctx.moveTo(padding, height - padding - (data[0] - minValue) * yScale)

    for (let i = 1; i < data.length; i++) {
      const x = padding + i * xScale
      const y = height - padding - (data[i] - minValue) * yScale

      const prevX = padding + (i - 1) * xScale
      const prevY = height - padding - (data[i - 1] - minValue) * yScale

      const cpX1 = prevX + (x - prevX) / 2
      const cpX2 = prevX + (x - prevX) / 2

      ctx.bezierCurveTo(cpX1, prevY, cpX2, y, x, y)
    }

    ctx.strokeStyle = theme === "dark" ? "rgba(124, 58, 237, 1)" : "rgba(124, 58, 237, 1)"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw dots at data points
    for (let i = 0; i < data.length; i += Math.floor(data.length / 6)) {
      const x = padding + i * xScale
      const y = height - padding - (data[i] - minValue) * yScale

      ctx.beginPath()
      ctx.arc(x, y, 3, 0, Math.PI * 2)
      ctx.fillStyle = theme === "dark" ? "rgba(124, 58, 237, 1)" : "rgba(124, 58, 237, 1)"
      ctx.fill()
      ctx.strokeStyle = theme === "dark" ? "#1e1e2e" : "#ffffff"
      ctx.lineWidth = 1
      ctx.stroke()
    }
  }, [theme])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
