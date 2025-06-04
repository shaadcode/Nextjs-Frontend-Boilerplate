import fs from 'node:fs';
import path from 'node:path';
import { getStructure } from './getStructure.js';

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

export async function generateFeatureStructure(
  featureName,
  baseDir = path.join(process.cwd(), 'src', 'features', featureName),
  selectedFolder,
) {
  const structure = getStructure(featureName);
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
