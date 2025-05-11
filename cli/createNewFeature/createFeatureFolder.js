import fs from 'node:fs';
import path from 'node:path';

/**
 * Function to create a feature folder at the path `src/features/{featureName}`
 * If the folder already exists, it uses the existing one.
 * @param featureName The name of the feature to create the folder for
 */
export const createFeatureFolder = async (featureName) => {
  const featureDir = path.join(process.cwd(), 'src', 'features', featureName);

  try {
    if (fs.existsSync(featureDir)) {
      console.log();
      console.log(`❌ 📁 Folder "${featureDir}" already exists.`);
      process.exit(0);
    }

    fs.mkdirSync(featureDir, { recursive: true });
    console.log(`✅ Created feature directory: ${featureDir}`);
    return featureDir;
  } catch (err) {
    console.error(`❌ Error creating folder "${featureDir}":`, err);
    process.exit(1);
  }
};
