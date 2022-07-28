import Link from 'next/link'
import { FC } from 'react'

import {
  StyledLink,
  StyledList,
  StyledListItem,
  StyledSidebarWrapper,
} from './Sidebar.styles'

interface ISidebarItem {
  url: string
  title: string
  description?: string
}

export interface ISidebarProps {
  items: ISidebarItem[]
}

export const Sidebar: FC<ISidebarProps> = ({ items }: ISidebarProps) => {
  return (
    <StyledSidebarWrapper>
      <StyledList>
        {items.map(({ url, title, description }) => (
          <StyledListItem key={url}>
            <Link href={url} passHref>
              <StyledLink>{title}</StyledLink>
            </Link>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledSidebarWrapper>
  )
}
