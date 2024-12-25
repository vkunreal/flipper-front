import { useEffect, useState } from 'react'

export enum SCREEN_BREAKPOINTS {
  MOBILE = 560,
  TABLET = 768,
  LAPTOP = 1024,
  DESKTOP = 1200,
  DESKTOP_XL = 1440,
}

export const useResize = () => {
  const [sizes, setSizes] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const onResize = (e: UIEvent) => {
    setSizes({
      width: (e.target as Window).innerWidth,
      height: (e.target as Window).innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return sizes
}
