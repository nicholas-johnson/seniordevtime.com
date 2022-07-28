import StoryWrapper from '../StoryWrapper'

import { Header, IHeaderProps } from './Header'

const headerProps: IHeaderProps = {}

export const HeaderStory = (args: IHeaderProps) => {
  return (
    <StoryWrapper>
      <Header {...args} />
    </StoryWrapper>
  )
}

HeaderStory.args = headerProps

export default {
  title: 'Components/Header',
  component: Header,
}
