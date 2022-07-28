module.exports = function Plopfile(plop) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/Component.styles.ts.hbs',
      },
      {
        type: 'add',
        path: 'components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/Component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'templates/Component.spec.tsx.hbs',
      },
    ],
  })
}
