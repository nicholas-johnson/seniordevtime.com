import { FC } from "react";

import { StyledMenuWrapper } from './Menu.styles'

export interface IMenuProps {}

export const Menu: FC< IMenuProps> = ({}: IMenuProps) => {
    return (
        <StyledMenuWrapper>
            Menu
        </StyledMenuWrapper>
    );
};
