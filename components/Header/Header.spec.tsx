import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './Header.stories';

const { HeaderStory } = composeStories(stories);

test('reuses args from composed story', () => {
    render(<HeaderStory />);
    
    // https://storybook.js.org/addons/@storybook/testing-react
});
