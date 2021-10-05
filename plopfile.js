const path = require('path');
const inquirerDirectory = require('inquirer-directory');

module.exports = (plop) => {
  plop.addHelper('absPath', (p) => path.resolve(plop.getPlopfilePath(), 'src', p));
  plop.addPrompt('directory', inquirerDirectory);

  plop.setGenerator('component', {
    description: 'generate component',
    prompts: [
      {
        name: 'name',
        type: 'input',
        message: 'Enter component name:',
      },
      {
        type: 'list',
        name: 'type',
        message: 'choose component type please',
        choices: ['component', 'layout', 'template', 'page'],
      },
      {
        name: 'path',
        type: 'directory',
        basePath: './src',
        message: 'Where would you like to put this component?',
      },
    ],
    actions: [
      {
        verbose: true,
        type: 'addMany',
        stripExtensions: ['hbs'],
        base: 'plop-config/component',
        templateFiles: 'plop-config/component/*.hbs',
        destination: '{{absPath path}}/{{kebabCase name}}',
      },
    ],
  });

  plop.setGenerator('function', {
    description: 'generate a function',
    prompts: [
      {
        name: 'name',
        type: 'input',
        message: 'Enter function name:',
      },
      {
        name: 'path',
        type: 'directory',
        basePath: './src',
        message: 'Where would you like to put this function?',
      },
    ],
    actions: [
      {
        verbose: true,
        type: 'addMany',
        stripExtensions: ['hbs'],
        base: 'plop-config/function',
        templateFiles: 'plop-config/function/*.hbs',
        destination: '{{absPath path}}/{{kebabCase name}}',
      },
    ],
  });

  plop.setGenerator('hook', {
    description: 'generate a hook',
    prompts: [
      {
        name: 'name',
        type: 'input',
        message: 'Enter hook name:',
      },
      {
        type: 'list',
        name: 'extension',
        choices: ['ts', 'tsx'],
        message: 'choose hook extension please',
      },
      {
        name: 'path',
        type: 'directory',
        basePath: './src',
        message: 'Where would you like to put this hook?',
      },
    ],
    actions: [
      {
        verbose: true,
        type: 'addMany',
        stripExtensions: ['hbs'],
        base: 'plop-config/hook',
        templateFiles: 'plop-config/hook/*.hbs',
        destination: '{{absPath path}}/{{kebabCase name}}',
      },
    ],
  });
};
