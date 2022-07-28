import StoryWrapper from "components/StoryWrapper";

import { Exercise, IExerciseProps } from './Exercise';

const exerciseProps: IExerciseProps = {};

export const ExerciseStory = (args: IExerciseProps) => {
    return (
        <StoryWrapper>
            <Exercise {...args} />
        </StoryWrapper>
    );
};

ExerciseStory.args = exerciseProps;

export default {
    title: 'Components/Exercise',
    component: Exercise,
};