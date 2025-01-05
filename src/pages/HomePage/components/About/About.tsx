import Check from '../../../../assets/svgs/Check'
import Painting from '../../../../assets/svgs/Painting'
import { List, SectionIntro, TitleWithIcon } from './styles'

const About = () => {
  return (
    <SectionIntro>
      <TitleWithIcon>
        <div>
          <Painting />
        </div>
        <div>
          <h1>draw shapes, see reactions</h1>
        </div>
      </TitleWithIcon>

      <span>
        <strong>Activate your webcam and let the fun begin!</strong> Simply draw
        one of four shapes — <strong>heart, triangle, circle, or star</strong>—
        and hold it up to your camera. Our trained AI will recognize your
        drawing and react in exciting, unexpected ways.
      </span>
      <List>
        <li>
          <Check />
          <strong>No data stored or shared</strong>: Your privacy is guaranteed.
        </li>
        <li>
          <Check /> <strong>Fully local processing</strong>: Everything happens
          right in your browser.
        </li>
        <li>
          <Check /> <strong>100% safe and private</strong>: Secure, private, and
          effortless fun!
        </li>
      </List>
    </SectionIntro>
  )
}

export default About
