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
        Get ready for a fun experience! Simply draw one of four shapes{' '}
        <strong> —heart, triangle, circle, or star— </strong> and show it to
        your <strong>webcam</strong>. Our AI will recognize your creation and
        surprise you with an unexpected reaction!
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
