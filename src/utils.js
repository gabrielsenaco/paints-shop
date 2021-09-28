import { useEffect } from 'react'

export function getRandomArray (array) {
  return array.sort(() => 0.5 - Math.random())
}

export const useScrollTop = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
}
