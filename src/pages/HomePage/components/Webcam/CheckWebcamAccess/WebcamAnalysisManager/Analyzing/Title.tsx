import React from 'react'
import { TitleWithIcon } from './styles'
import MagnifyingGlass from '../../../../../../../assets/svgs/MagnifyingGlass'

type TitleProps = {
  detectedShape: string | null
}

const Title: React.FC<TitleProps> = ({ detectedShape }) => {
  return (
    <>
      {!detectedShape && (
        <TitleWithIcon>
          <div>
            <MagnifyingGlass />
          </div>
          <div>
            <h2>searching for shapes...!</h2>
          </div>
        </TitleWithIcon>
      )}
    </>
  )
}
export default Title
