import { FC } from "react";

import { StyledExerciseWrapper } from './Exercise.styles'

export interface IExerciseProps {}

export const Exercise: FC< IExerciseProps> = ({}: IExerciseProps) => {
    return (
        <StyledExerciseWrapper>
            Exercise
        </StyledExerciseWrapper>
    );
};
