type Shape = {
  emoji: string
}

type ShapesEmojis = {
  [key: string]: Shape
}

const shapesEmojis: ShapesEmojis = {
  Heart: {
    emoji: '❤️',
  },
  Triangle: {
    emoji: '▲',
  },
  Circle: {
    emoji: '🟡',
  },
  Star: {
    emoji: '⭐️',
  },
}

export const getShapeEmoji = (shape: keyof ShapesEmojis): Shape =>
  shapesEmojis[shape]
