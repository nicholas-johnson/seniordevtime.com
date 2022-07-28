import { FC } from "react";

import { StyledLogoWrapper } from './Logo.styles'

export interface ILogoProps {}

export const Logo: FC< ILogoProps> = ({}: ILogoProps) => {
    return (
        <StyledLogoWrapper>
            Logo
        </StyledLogoWrapper>
    );
};
