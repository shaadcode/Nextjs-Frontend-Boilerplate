import fs from 'node:fs';
import path from 'node:path';

// type File = {
//   name: string;
//   content: string;
// };

// type Structure = {
//   subfolder?: {
//     folderName: string;
//     files: File [];
//   };
//   type: 'folder' | 'file';
//   name: string;
//   content?: string;
//   files?: File[];
// };

// type DocumentStructureMap = Record<Label, Structure>;
// type Label = 'index' | 'types' | 'components' | 'validations' | 'schema' | 'actions' | 'api' | 'constant' | 'helper' | 'hooks' | 'lib' | 'mock' | 'store' | 'storybook' | 'styles' | 'tests' | 'validations';
export const capitalized = word => word.charAt(0).toUpperCase()
  + word.slice(1);

export async function generateFeatureStructure(
  featureName,
  baseDir = path.join(process.cwd(), 'src', 'features', featureName),
  selectedFolder,
) {
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
      content: `import { ${featureName}Action } from './actions/${featureName}.action';\nimport ${capitalized(featureName)} from './components/${capitalized(featureName)}/${capitalized(featureName)}';\n\nexport {\n  ${capitalized(featureName)},\n  ${featureName}Action,\n};\n`,
    },
    actions: {
      name: 'actions',
      type: 'folder',
      files: [{ name: `${featureName}.action.ts`, content: `'use server';\ntype ${capitalized(featureName)}ActionParams = {\n  any: unknown;\n};\n\nexport const ${featureName}Action = async (params: ${capitalized(featureName)}ActionParams) => {\n\n};\n` }],

    },
    api: {
      name: 'api',
      type: 'folder',
      files: [{ name: `${featureName}.api.ts`, content: `import { apiClient } from '@/config/api/axios';\n\nexport const get${capitalized(featureName)}Data = async () => {\n  const response = await apiClient.get('/api/example');\n  return response.data;\n};\n` }],

    },
    components: {
      name: 'components',
      type: 'folder',
      files: [],
      subfolder: {
        folderName: capitalized(featureName),
        files: [{
          name: `${capitalized(featureName)}.tsx`,
          content: `import { Box } from '@mantine/core';\n\ntype Props = {\n  prop: any;\n};\n\nconst ${capitalized(featureName)} = ({ prop }: Props) => {\n  return (\n    <Box>{'${capitalized(featureName)}'}</Box>\n  );\n};\n\nexport default ${capitalized(featureName)};\n`,
        }, {
          name: `${capitalized(featureName)}.stories.tsx`,
          content: `import type { Meta, StoryObj } from '@storybook/react';\n\nimport ${capitalized(featureName)} from './${capitalized(featureName)}';\n\nconst meta: Meta<typeof ${capitalized(featureName)}> = {\n  component: ${capitalized(featureName)},\n  title: 'Example/${capitalized(featureName)}',\n};\nexport default meta;\n\ntype Story = StoryObj<typeof ${capitalized(featureName)}>;\n\nexport const Default: Story = {};\n`,
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
      files: [{ name: `use${capitalized(featureName)}`, content: `import { useState } from 'react';\n\nexport const use${capitalized(featureName)} = () => {\n  const [state, setState] = useState(null);\n  return { state, setState };\n};\n` }],

    },
    lib: {
      name: 'lib',
      type: 'folder',
      files: [{ name: `example.ts`, content: `` }],
    },
    mock: {
      name: 'mock',
      type: 'folder',
      files: [{ name: `${capitalized(featureName)}.mock.ts`, content: `import { faker } from '@faker-js/faker';\n\nexport const ${featureName}Mock = {\n  name: faker.person.fullName(),\n  email: faker.internet.email(),\n};\n` }],

    },
    store: {
      name: 'store',
      type: 'folder',
      files: [{ name: `${featureName}.store.ts`, content: `import { create } from 'zustand';\n\ntype ${capitalized(featureName)}Store = {\n  count: number;\n  increment: () => void;\n};\n\nexport const use${capitalized(featureName)}Store = create<${capitalized(featureName)}Store>(set => ({\n  count: 0,\n  increment: () => set(state => ({ count: state.count + 1 })),\n}));\n` }],

    },
    storybook: {
      name: 'storybook',
      type: 'folder',
      files: [{ name: `${featureName}.stories.ts`, content: `` }], // TODO : example.stories.ts content

    },
    styles: {
      name: 'styles',
      type: 'folder',
      files: [{
        name: `${featureName}.module.css`,
        content: ``,
      }],
    },
    tests: {
      name: 'tests',
      type: 'folder',
      files: [{ name: `${featureName}.test.ts`, content: `import { describe, expect, it } from 'vitest';\n\ndescribe('${featureName} test', () => {\n  it('should work', () => {\n    expect(true).toBe(true);\n  });\n});\n` }],
      subfolder: {
        folderName: 'e2e',
        files: [{
          name: `${featureName}.e2e.ts`,
          content: `import { expect, test } from \'@playwright/test\';\n\ntest(\'${featureName} e2e test\', async ({ page }) => {\n  await page.goto(\'/\');\n\n  expect(await page.title()).toBeDefined();\n});\n`,
        }],
      },
    },
    validations: {
      name: 'validations',
      type: 'folder',
      files: [{ name: `${featureName}.validation.ts`, content: `import * as z from 'zod';\n\nexport const ${featureName}Schema = z.object({\n\n});\n\nexport type ${capitalized(featureName)}Input = z.infer<typeof ${featureName}Schema>;\n` }],

    },
    schema: {
      name: 'schema',
      type: 'folder',
      files: [{
        name: `${featureName}.schema.ts`,
        content: ``,
      }],
    },
  };
  // Ensure base feature directory exists
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
    console.log(`Created feature directory: ${baseDir}`);
  }

  for (const [, { files, subfolder, name, type, content }] of Object.entries(structure)) {
    if (!selectedFolder.includes(name)) {
      continue;
    }
    if (type === 'folder') {
      const folderPath = path.join(baseDir, name);
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        // console.log(`Created folder: ${folderPath}`);
      }
      // Write files in the main folder
      for (const file of files) {
        const filePath = path.join(folderPath, file.name.endsWith('.ts') || file.name.includes('.') ? file.name : `${file.name}.ts`);
        fs.writeFileSync(filePath, file.content.replace(/\\n/g, '\n'), { flag: 'wx' });
        // console.log(`Created file: ${filePath}`);
      }
    } else if (type === 'file') {
      const filePath = path.join(baseDir, name.endsWith('.ts') || name.includes('.') ? name : `${name}.ts`);
      fs.writeFileSync(filePath, (content || '').replace(/\\n/g, '\n'), { flag: 'wx' });
      // console.log(`Created file: ${filePath}`);
    }

    // Handle subfolder if exists
    if (subfolder) {
      const supFolderPath = path.join(baseDir, name);
      const subfolderPath = path.join(supFolderPath, subfolder.folderName);
      if (!fs.existsSync(subfolderPath)) {
        fs.mkdirSync(subfolderPath, { recursive: true });
        // console.log(`Created subfolder: ${subfolderPath}`);
      }

      for (const subFile of subfolder.files) {
        const subFilePath = path.join(subfolderPath, subFile.name);
        fs.writeFileSync(subFilePath, subFile.content.replace(/\\n/g, '\n'), { flag: 'wx' });
        // console.log(`Created file in subfolder: ${subFilePath}`);
      }
    }
  }
}
