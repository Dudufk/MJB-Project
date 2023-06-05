'use client'

import { useEffect } from 'react'

import { useInView } from 'react-intersection-observer'
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useAnimation,
} from 'framer-motion'

interface CardProps {
  num: number
  text: string
  plus?: boolean
}

export default function CardTimer(props: CardProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      const animation = animate(count, props.num, { duration: 2 })
      return animation.stop
    }
  }, [controls, count, inView, props.num])

  return (
    <div className="flex h-44 w-72 flex-col items-center justify-center gap-7 rounded-xl border-b-4 border-b-primary bg-white shadow-xl">
      <div className="flex text-6xl text-primary">
        <motion.h1 ref={ref}>{rounded}</motion.h1>
        {props.plus ? '+' : ''}
      </div>
      <p className="text-xl text-gray-600">{props.text}</p>
    </div>
  )
}
