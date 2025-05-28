import {
  cancel,
  intro,
  isCancel,
  multiselect,
  outro,
  text,
} from '@clack/prompts';
import color from 'picocolors';
import { createFeatureFolder } from './createFeatureFolder.js';
import { generateFeatureStructure } from './generateFeatureStructure.js';

async function main() {
  intro(color.inverse(' ✨ create-new-feature '));

  const featureName = await text({
    message: 'What is the name of the feature?',
    placeholder: 'example: auth, dashboard, product',
    validate: (value) => {
      if (!value) {
        return '❌ Please enter a name.';
      }
      if (value.includes('-')) {
        return '❌ Hyphens (-) are not allowed in the name.';
      }
      if (!/^[a-z][\w-]{1,29}$/i.test(value)) {
        return '❌ Only letters, numbers, hyphens (-) and underscores (_) are allowed. Must start with a letter.';
      }
      return undefined;
    },
  });

  if (isCancel(featureName)) {
    cancel('Operation cancelled');
    return process.exit(0);
  }

  const folders = await multiselect({
    message: 'What folders do you need for this feature?',
    options: [
      { value: 'types.ts', label: '📑 types.ts' },
      { value: 'index.ts', label: '📁 index.ts' },
      { value: 'exampleStory', label: `📖 ${featureName}.stories.tsx` },
      { value: 'styles', label: '🎨 styles' },
      { value: 'tests', label: '🧪 tests' },
      { value: 'components', label: '🧩 components' },
      { value: 'actions', label: '🎬 actions' },
      { value: 'api', label: '📡 api' },
      { value: 'constant', label: '📌 constant' },
      { value: 'helper', label: '🛠️ helper' },
      { value: 'hooks', label: '⚓ hooks' },
      { value: 'lib', label: '📚 lib' },
      { value: 'mock', label: '🧸 mock' },
      { value: 'store', label: '📦 store' },
      { value: 'storybook', label: '📘 storybook' },
      { value: 'schema', label: '📐 schema' },
      { value: 'validations', label: '🔐 validations' },
    ],
    initialValues: ['components', 'tests', 'index.ts', 'styles', 'types.ts', 'actions'],
    required: true,
  });

  if (isCancel(folders)) {
    cancel('Operation cancelled');
    return process.exit(0);
  }
  const baseDir = await createFeatureFolder(featureName);

  await generateFeatureStructure(featureName, baseDir, folders);

  outro(`✅ Feature '${featureName}' structure generated successfully.`);
}

main().catch(console.error);
