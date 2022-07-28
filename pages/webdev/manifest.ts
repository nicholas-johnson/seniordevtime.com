const manifest = {
  title: 'CSS and HTML',
  slug: 'webdev',
  img: '/images/sections/html5.svg',
  courses: {
    htmlCss: {
      title: 'The HTML/CSS Course',
      slug: 'course',
      img: '/images/sections/node.svg',
      exercises: [
        {
          slug: 'tags',
          title: 'Welcome to HTML',
          description: 'We use tags to cut up our HTML',
        },
        {
          slug: 'more-tags',
          title: 'More Tags',
          description: 'Here are some more tags you can use',
        },
        {
          slug: 'attributes',
          title: 'Attributes',
          description: 'Extend the behaviour of your tags with attributes',
        },
        {
          slug: 'images',
          title: 'Images',
          description: 'Add images to your page.',
        },
        {
          slug: 'lists',
          title: 'Lists',
          description: 'Lists are used everywhere in HTML',
        },
        {
          slug: 'style-attributes',
          title: 'Style',
          description: 'We can add style to our page using simple attributes',
        },
        {
          slug: 'divs-and-spans',
          title: 'Divs and Spans',
          description: 'For selecting arbitrary bits of the page',
        },
        {
          slug: 'hex',
          title: 'Hexadecimal Colours',
          description: 'Make your page look nice',
        },
        {
          slug: 'entity-references',
          title: 'Entity references',
          description: 'Special Characters look nice when splashed around',
        },
        {
          slug: 'selectors',
          title: 'Selectors',
          description: 'Put common styles in a style tag',
        },
        {
          slug: 'stylesheets',
          title: 'Extracting a stylesheet',
          description: 'Our styles can live in a separate sheet',
        },
        {
          slug: 'css-classes',
          title: 'Classes',
          description: 'Selecting elements by class',
        },
        {
          slug: 'nested-selectors',
          title: 'Nested Selectors',
          description:
            'We can chain multiple selectors together to get better control',
        },
        {
          slug: 'full-width',
          title: 'Full Width Layouts',
          description: 'Default and useful',
        },
        {
          slug: 'abs-layout',
          title: 'Absolutely positioned layouts',
          description: 'Place items where you want them',
        },
        {
          slug: 'float-layout',
          title: 'Float layouts',
          description: 'A useful layout which respects height',
        },
        {
          slug: 'positioning-with-margins',
          title: 'Positioning with Margins',
          description: 'Handy simple layouts',
        },
      ],
    },
    responsiveDesign: {
      title: 'Responsive Design Course',
      slug: 'responsive-design',
      img: '/images/sections/node.svg',

      exercises: [
        {
          slug: 'media-queries',
          title: 'Media Queries',
          description:
            'The magic sauce that makes it all work. Media queries let us serve different CSS depending on the width or height of the browser.',
        },
        {
          slug: 'responsive-menu',
          title: 'Responsive Menu',
          description: 'Buttons must be made larger.',
        },
        {
          slug: 'responsive-images',
          title: 'Responsive Images',
          description: 'Images fill the available space.',
        },
        {
          slug: 'vectors',
          title: 'Vectors',
          description: 'Vector graphics provide infinite zoomability.',
        },
      ],
    },
    css3: {
      title: 'The CSS3 Course',
      slug: 'css3',
      img: '/images/sections/node.svg',
      exercises: [
        { slug: 'opacity', title: 'Opacity', description: 'Like Glass.' },
        {
          slug: 'border-radius',
          title: 'Border Radius',
          description: 'Dangerous Curves.',
        },
        {
          slug: 'box-shadow',
          title: 'Box Shadow',
          description: 'Not just for drop shadow',
        },
        {
          slug: 'multiple-backgrounds',
          title: 'Multiple Backgrounds',
          description: 'All lying on top of one another.',
        },
        {
          slug: 'transformations',
          title: 'Transformations',
          description: 'Bend it like Beckham.',
        },
        {
          slug: 'transitions',
          title: 'Transitions',
          description: 'Move smoothly from state to state.',
        },
        {
          slug: 'pseudoelements',
          title: 'Pseudoelements',
          description: 'Add elements right there in your CSS.',
        },
        {
          slug: 'animation',
          title: 'Animation',
          description: 'Make it wiggle.',
        },
      ],
    },
  },
}

export default manifest
