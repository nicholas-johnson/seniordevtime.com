import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './Logo.stories';

const { LogoStory } = composeStories(stories);

test('reuses args from composed story', () => {
    render(<LogoStory />);
    
    // https://storybook.js.org/addons/@storybook/testing-react
});
