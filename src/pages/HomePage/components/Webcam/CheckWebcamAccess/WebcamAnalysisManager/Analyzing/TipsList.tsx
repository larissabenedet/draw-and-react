import React from 'react'
import { List, ListContainer } from './styles'

const TipsList: React.FC = () => {
  return (
    <ListContainer>
      <h3>Tips</h3>
      <List>
        <li>
          Shapes you <strong>can</strong> draw: 💛 Heart, ▲ Triangle, 🟡 Circle
          and ⭐️ Star.
        </li>
        <li>
          <strong>Hold your drawing steady in front of the camera</strong> for a
          few seconds to ensure it's detected.
        </li>
        <li>
          Make sure your shape is clear and your face is out of the frame to
          avoid distractions.
        </li>
      </List>
    </ListContainer>
  )
}
export default TipsList
