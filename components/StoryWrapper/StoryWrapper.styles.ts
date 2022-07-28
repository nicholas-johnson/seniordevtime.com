import styled from 'styled-components'

export const StyledStoryWrapper = styled.div<{
  width?: number
  height?: number
  padding?: number
  background?: string
}>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  padding: ${({ padding }) => (padding ? `${padding}px` : '0')};
  background-color: ${({ background, theme }) =>
    background ? background : 'transparent'};
`
