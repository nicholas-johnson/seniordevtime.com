import StoryWrapper from '../StoryWrapper'

import { Sidebar, ISidebarProps } from './Sidebar'

const sidebarProps: ISidebarProps = {
  items: [
    {
      title: 'Templates',
      description: 'In which we get some Angular running in a browser.',
      url: 'templates',
    },
    {
      title: 'Binding',
      description:
        "Where we discover the spooky magic that is Angular data binding (of course it's not magic really, as we shall very soon see).",
      url: 'binding',
    },
    {
      title: 'More on Binding',
      description:
        'In which we bind expressions to classes and attributes and add conditional logic to our templates.',
      url: 'more-binding',
      code: 'https://www.dropbox.com/sh/1g6dh1duu3y1sz7/AAD9SokCbCVNOu-iiem8aTRpa?dl=0',
    },
    {
      title: 'Controllers',
      description: 'Controllers glue the scope to the template.',
      url: 'controllers',
    },
    {
      title: 'Scope and Scope Inheritance (View Model)',
      description: '$scope is an object in which you can store your models',
      url: 'scope',
    },
    {
      title: 'Watch and the digest cycle',
      description:
        'Here we delve into the workings of the digest cycle and discover the logic behind Angular data binding.',
      url: 'watch',
    },
    {
      title: 'Dependency Injection (DI)',
      description:
        'Dependency Injection allows us to require components simply be referring to them. Learn about DI and also split your code into sensible modules.',
      url: 'di',
    },
  ],
}

export const SidebarStory = (args: ISidebarProps) => {
  return (
    <StoryWrapper width={200}>
      <Sidebar {...args} />
    </StoryWrapper>
  )
}

SidebarStory.args = sidebarProps

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
}
