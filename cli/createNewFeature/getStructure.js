import capitalized from './../utils/capitalized.js';

export const getStructure = (featureName) => {
  const capitalizedName = capitalized(featureName);
  const baseName = featureName;
  // component
  const componentName = capitalizedName;
  const componentFileName = capitalizedName;
  const componentFolderName = capitalizedName;

  //  action
  const actionName = baseName;
  const actionFileName = baseName;

  // api
  const apiFileName = baseName;

  // hook
  const hookFileName = capitalizedName;
  const hookVarName = capitalizedName;

  // mock
  const mockFileName = capitalizedName;
  const mockVarName = capitalizedName;

  // storybook
  const storyFileName = baseName;

  // store
  const storeFileName = capitalizedName;
  const storeVarName = capitalizedName;

  // style
  const styleFileName = baseName;

  // test
  const testFileName = baseName;

  const structure = {
    types: {
      name: 'types.ts',
      type: 'file',
    },
    exampleStory: {
      name: `${featureName}.stories.tsx`,
      type: 'file',
    },
    index: {
      name: 'index.ts',
      type: 'file',
      content: `import { ${actionName}Action } from './actions/${actionName}.action';\nimport ${componentName} from './components/${componentName}/${componentName}';\n\nexport {\n  ${componentName},\n  ${actionName}Action,\n};\n`,
    },
    actions: {
      name: 'actions',
      type: 'folder',
      files: [{ name: `${actionFileName}.action.ts`, content: `'use server';\ntype ${capitalizedName}ActionParams = {\n  any: unknown;\n};\n\nexport const ${actionName}Action = async (params: ${capitalizedName}ActionParams) => {\n\n};\n` }],

    },
    api: {
      name: 'api',
      type: 'folder',
      files: [{ name: `${apiFileName}.api.ts`, content: `import { apiClient } from '@/config/api/axios';\n\nexport const get${capitalizedName}Data = async () => {\n  const response = await apiClient.get('/api/example');\n  return response.data;\n};\n` }],

    },
    components: {
      name: 'components',
      type: 'folder',
      files: [],
      subfolder: {
        folderName: componentFolderName,
        files: [{
          name: `${componentFileName}.tsx`,
          content: `import { Box } from '@mantine/core';\n\ntype Props = {\n  prop: any;\n};\n\nconst ${componentName} = ({ prop }: Props) => {\n  return (\n    <Box>{'${componentName}'}</Box>\n  );\n};\n\nexport default ${componentName};\n`,
        }, {
          name: `${componentFileName}.stories.tsx`,
          content: `import type { Meta, StoryObj } from '@storybook/react';\n\nimport ${componentName} from './${componentFileName}';\n\nconst meta: Meta<typeof ${componentName}> = {\n  component: ${componentName},\n  title: 'Example/${componentName}',\n};\nexport default meta;\n\ntype Story = StoryObj<typeof ${componentName}>;\n\nexport const Default: Story = {};\n`,
        }],
      },
    },
    constant: {
      name: 'constant',
      type: 'folder',
      files: [{ name: `index.ts`, content: `` }],
    },
    helper: {
      name: 'helper',
      type: 'folder',
      files: [{ name: `index.ts`, content: `` }],
    },
    hooks: {
      name: 'hooks',
      type: 'folder',
      files: [{ name: `use${hookFileName}`, content: `import { useState } from 'react';\n\nexport const use${hookVarName} = () => {\n  const [state, setState] = useState(null);\n  return { state, setState };\n};\n` }],

    },
    lib: {
      name: 'lib',
      type: 'folder',
      files: [{ name: `example.ts`, content: `` }],
    },
    mock: {
      name: 'mock',
      type: 'folder',
      files: [{ name: `${mockFileName}.mock.ts`, content: `import { faker } from '@faker-js/faker';\n\nexport const ${mockVarName}Mock = {\n  name: faker.person.fullName(),\n  email: faker.internet.email(),\n};\n` }],

    },
    store: {
      name: 'store',
      type: 'folder',
      files: [{ name: `${storeFileName}.store.ts`, content: `import { create } from 'zustand';\n\ntype ${capitalizedName}Store = {\n  count: number;\n  increment: () => void;\n};\n\nexport const use${storeVarName}Store = create<${storeVarName}Store>(set => ({\n  count: 0,\n  increment: () => set(state => ({ count: state.count + 1 })),\n}));\n` }],

    },
    storybook: {
      name: 'storybook',
      type: 'folder',
      files: [{ name: `${storyFileName}.stories.ts`, content: `` }], // TODO : example.stories.ts content

    },
    styles: {
      name: 'styles',
      type: 'folder',
      files: [{
        name: `${styleFileName}.module.css`,
        content: ``,
      }],
    },
    tests: {
      name: 'tests',
      type: 'folder',
      files: [{ name: `${testFileName}.test.ts`, content: `import { describe, expect, it } from 'vitest';\n\ndescribe('${baseName} test', () => {\n  it('should work', () => {\n    expect(true).toBe(true);\n  });\n});\n` }],
      subfolder: {
        folderName: 'e2e',
        files: [{
          name: `${testFileName}.e2e.ts`,
          content: `import { expect, test } from \'@playwright/test\';\n\ntest(\'${baseName} e2e test\', async ({ page }) => {\n  await page.goto(\'/\');\n\n  expect(await page.title()).toBeDefined();\n});\n`,
        }],
      },
    },
    validations: {
      name: 'validations',
      type: 'folder',
      files: [{ name: `${baseName}.validation.ts`, content: `import * as z from 'zod';\n\nexport const ${baseName}Schema = z.object({\n\n});\n\nexport type ${capitalizedName}Input = z.infer<typeof ${baseName}Schema>;\n` }],

    },
    schema: {
      name: 'schema',
      type: 'folder',
      files: [{
        name: `${baseName}.schema.ts`,
        content: ``,
      }],
    },
  };

  return structure;
};
