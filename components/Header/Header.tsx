import { FC } from "react";

import { StyledHeaderWrapper } from './Header.styles'

export interface IHeaderProps {}

export const Header: FC< IHeaderProps> = ({}: IHeaderProps) => {
    return (
        <StyledHeaderWrapper>
            Header
        </StyledHeaderWrapper>
    );
};
