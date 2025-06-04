import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import {
  cancel,
  confirm,
  intro,
  isCancel,
  log,
  spinner,
  text,
} from '@clack/prompts';
import color from 'picocolors';
import handleEnvVars from './helper/handleEnvVars.js';

export const command = async () => {
  intro(color.inverse(' ✨ create-new-feature '));
  const appName = await text({
    message: 'What is the name of the program?',
    placeholder: 'my-app',
  });

  if (isCancel(appName)) {
    cancel('Operation cancelled');
    return process.exit(0);
  }

  const gitRemote = await text({
    message: 'New Gate URL:',
    placeholder: 'https://github.com/username/projectname.git',
  });

  const shouldInstall = await confirm({
    message: 'Install dependencies?',
    initialValue: true,
  });

  const shouldClearReadme = await confirm({
    message: 'Clear README.md content?',
    initialValue: true,
  });

  log.step('🔄 Resetting Git and cleaning CHANGELOG...');
  fs.rmSync('.git', { recursive: true, force: true });
  fs.writeFileSync('CHANGELOG.md', '');

  log.step('📦 Updating package.json...');
  const pkgPath = path.resolve('package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  pkg.name = appName;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

  log.step('⚙️ Setting up environment variables...');
  await handleEnvVars();

  log.step('🔗 Initializing new Git repository...');
  execSync(`git init`);
  execSync(`git remote add origin ${gitRemote}`);

  if (shouldClearReadme) {
    const readmePath = path.resolve('README.md');
    if (fs.existsSync(readmePath)) {
      fs.writeFileSync(readmePath, '');
      log.step('🧹 README.md cleared.');
    } else {
      log.step('ℹ️ README.md not found, skipping.');
    }
  }

  if (shouldInstall) {
    const s = spinner();
    s.start('📥 Installing dependencies...');
    execSync(`pnpm install`, { stdio: 'inherit' });
    s.stop('✅ Installation completed.');
  }
};
command().catch(console.error);
