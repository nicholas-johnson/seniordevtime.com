import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './Menu.stories';

const { MenuStory } = composeStories(stories);

test('reuses args from composed story', () => {
    render(<MenuStory />);
    
    // https://storybook.js.org/addons/@storybook/testing-react
});
