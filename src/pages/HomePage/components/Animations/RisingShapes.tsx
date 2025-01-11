import { motion } from 'framer-motion'
import { getShapeEmoji } from '../../../../utils/shapesEmojis'

type RisingShapesProps = {
  shapeElement: string
}

const RisingShapes: React.FC<RisingShapesProps> = ({ shapeElement }) => {
  const shapesCount = Array.from({ length: 20 })
  const currentShapeEmoji = getShapeEmoji(shapeElement)

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1000,
      }}
    >
      {shapesCount.map((_, index) => (
        <motion.div
          key={`falling-${index}`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 300, opacity: 1 }}
          transition={{
            duration: 2,
            delay: index * 0.3,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
          }}
        >
          {currentShapeEmoji && currentShapeEmoji.emoji}
        </motion.div>
      ))}
    </div>
  )
}

export default RisingShapes
