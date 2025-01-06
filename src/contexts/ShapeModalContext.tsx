import React, { createContext, useContext, useState, ReactNode } from 'react'

type ShapeModalContextType = {
  getShapeContent: (shape: keyof AllShapesType) => ShapeInfo
}

type ShapeInfo = {
  title: string
  description: string
  facts: string[]
}

type AllShapesType = {
  Heart: ShapeInfo
  Triangle: ShapeInfo
  Circle: ShapeInfo
  Star: ShapeInfo
}

const allShapes: AllShapesType = {
  Heart: {
    title: 'Love at first sight... or first shape?',
    description:
      'Looks like someone has their heart in their hands... or on the screen! Are you a digital Cupid?',
    facts: [
      'In 2022, scientists created an artificial heart using a 3D printer that beats just like a real one.',
      'The heart symbol we use today doesn’t look like an actual heart. It originated in the Middle Ages as a stylized representation.',
      'In 2019, a couple in the U.S. got married inside a heart-shaped room at an amusement park.',
    ],
  },
  Triangle: {
    title: 'Three sides, infinite possibilities!',
    description:
      'Careful! This triangle might be the tip of an iceberg... or just another shape on your screen.',
    facts: [
      'The Bermuda Triangle isn’t officially recognized as more dangerous than other ocean regions, but it remains a popular mystery.',
      'The Egyptian pyramids are basically 3D triangles. The Great Pyramid of Giza was the tallest structure in the world for 3,800 years.',
      'In 2021, a mathematician solved a triangle problem that had been open for over 50 years.',
    ],
  },
  Circle: {
    title: 'Round like the world, but without borders!',
    description:
      'A perfect circle? Almost impossible to draw, but you nailed it... or almost!',
    facts: [
      'The wheel, one of humanity’s most important inventions, is essentially a circle in motion.',
      'In 2020, astronomers discovered a black hole that is the roundest object ever observed in the universe.',
      'The Yin-Yang symbol, representing balance, is a circle divided into two parts.',
    ],
  },
  Star: {
    title: 'Shine bright! It’s a star... or just a drawing?',
    description:
      'Looks like we’ve got a celebrity among geometric shapes here! Want an autograph?',
    facts: [
      'The closest star to Earth, besides the Sun, is Proxima Centauri, located 4.24 light-years away.',
      'In 2021, NASA discovered a star that "blinks" every 70 seconds, leaving scientists puzzled.',
      'The five-pointed star is an ancient symbol, used in flags, religions, and even fast-food logos.',
    ],
  },
}

const ShapeModalContext = createContext<ShapeModalContextType | undefined>(
  undefined
)

export const ShapeModalProvider: React.FC<{
  children: ReactNode
}> = ({ children }) => {
  const getShapeContent = (shape: keyof AllShapesType): ShapeInfo =>
    allShapes[shape]

  return (
    <ShapeModalContext.Provider value={{ getShapeContent }}>
      {children}
    </ShapeModalContext.Provider>
  )
}

export const useShapeModalContext = () => {
  const context = useContext(ShapeModalContext)
  if (!context) {
    throw new Error(
      'useShapeModalContext must be used within a ShapeModalProvider'
    )
  }
  return context
}
