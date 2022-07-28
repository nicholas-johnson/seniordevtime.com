import StoryWrapper from '../StoryWrapper'

import { Menu, IMenuProps } from './Menu'

const menuProps: IMenuProps = {}

export const MenuStory = (args: IMenuProps) => {
  return (
    <StoryWrapper>
      <Menu {...args} />
    </StoryWrapper>
  )
}

MenuStory.args = menuProps

export default {
  title: 'Components/Menu',
  component: Menu,
}
