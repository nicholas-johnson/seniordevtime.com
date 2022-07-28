import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

import { StyledStoryWrapper } from './StoryWrapper.styles'

export interface IStoryWrapperProps {
  width?: number
  height?: number
  padding?: number
  background?: string
  children: React.ReactNode
}

export const StoryWrapper: FC<IStoryWrapperProps> = ({
  width,
  height,
  padding,
  background,
  children,
}: IStoryWrapperProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledStoryWrapper
        width={width}
        height={height}
        padding={padding}
        background={background}
      >
        {children}
      </StyledStoryWrapper>
    </ThemeProvider>
  )
}
