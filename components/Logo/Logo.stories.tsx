import StoryWrapper from '../StoryWrapper'

import { Logo, ILogoProps } from './Logo'

const logoProps: ILogoProps = {}

export const LogoStory = (args: ILogoProps) => {
  return (
    <StoryWrapper>
      <Logo {...args} />
    </StoryWrapper>
  )
}

LogoStory.args = logoProps

export default {
  title: 'Components/Logo',
  component: Logo,
}
