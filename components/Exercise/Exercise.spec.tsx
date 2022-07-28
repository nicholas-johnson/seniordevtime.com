import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './Exercise.stories';

const { ExerciseStory } = composeStories(stories);

test('reuses args from composed story', () => {
    render(<ExerciseStory />);
    
    // https://storybook.js.org/addons/@storybook/testing-react
});
