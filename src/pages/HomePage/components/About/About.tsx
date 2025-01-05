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
        Draw simple geometric shapes
        <strong> directly in your webcam</strong> and watch the magic happen!
        Experience background changes, sounds, and more as you explore{' '}
        <strong>real-time AI</strong>.
      </span>
      <List>
        <li>
          <Check /> No data is stored or shared.
        </li>
        <li>
          <Check /> All processing happens locally in your browser.
        </li>
        <li>
          <Check /> 100% safe and private.
        </li>
      </List>
    </SectionIntro>
  )
}

export default About
