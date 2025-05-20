<p align="center">
  <img src="./assets/Nextjs-Front-End-Boilerplate.png" alt="Project Cover" />
</p>

# # 🚀 Next.js Frontend Boilerplate

> A modern, batteries-included Next.js 15 frontend boilerplate designed for rapid development and scalable applications.

---

## 🎯 Features

- ⚡ **Next.js 15** with **Turbopack** support and using **App Router**

- 🎨 UI powered by **Mantine v8**

- 🌍 Built-in Internationalization (i18n) with **Next-Intl**

- 🧪 **Vitest** for unit testing

- 🧭 **Playwright** for E2E testing

- 🧼 Strict linting via **ESLint** and **lint-staged**

- 🎨 **TailwindCSS v4** ready

- 📦 **Storybook 8** with onboarding & styling addons

- 📖 **Commitlint**, **CZ-git**, **Husky**, and **Conventional Commits** setup

- 📐 **TypeScript** + aliases + strong types

- 🗂️ Clean folder structure and **scalable architecture**

- 🧠 **Zustand** for global state management

- 🎲 **Faker.js** for mock data generation

- 🔁 **TanStack Query** for server-state caching and fetching

- 🔐 **T3 Env** for type-safe environment variables

- 🧾 **Zod** for schema validation and parsing

- ♻️ **ts-reset** to enhance the TypeScript standard library

- 🧩 **nextjs-third-parties** for simplified third-party integrations

- 🌐 **Axios** for powerful and flexible HTTP requests

- 📁 **Automatic generation of folders and files** when creating a new feature with the cli

---

## 🛠️ Getting Started

### 📦 Requirements

First, check the following prerequisites. To check the node version, use the `node -v` command in your CMD, and to check the pnpm version, use the `pnpm -v` command.

- **Node.js** ≥ 20

- **pnpm** = 10.10.0

📍 tip: **My personal recommendation is to use fnm as node manager**

1. **Cloning a project**

```bash
git clone https://github.com/your-repo/your-project.git

cd your-project
```

2. **🤖 Setting up GitHub actions**

To be able to use GitHub actions for CI workflow, you need to create an environment in your GitHub repository. You can use the following path:

```bash
your repo > Settings > Secrets and variables > Actions > Variables(tab) > Manage environment variables > New environment
```

In CI workflow, the name assigned to the environment is `production` by default. If you want to change the name of the environment to your liking, use the name you specified when creating the environment in GitHub. To change the name of the environment locally, go to `.github\workflows\CI.yml` and change the name of the environment.

Also, check that your variable names match in the `.github\workflows\CI.yml` file:

```yaml
  env:

    NEXT_PUBLIC_BASE_API_URL: ${{ vars.NEXT_PUBLIC_BASE_API_URL }}

    NEXT_PUBLIC_APP_URL: ${{ vars.NEXT_PUBLIC_APP_URL }}
```

3. **Setting environment variables**

Make a copy of the .env.example file and set the required variables.

4. 🔧 Installation

```bash
pnpm install
```

### 🏁 Run the app (with Turbopack)

```bash
pnpm dev
```

---

## 🛠️ Using capabilities in the project

My boilerplate has built-in capabilities that are either completely independent or are a combination of existing libraries. These capabilities can be very useful and speed up development several times.

### Creating a new feature for the website

Instead of manually creating the files and folders needed for a new feature, you can use our CLI tool. Just specify the name of the feature, then select the files and folders you need. Everything will be generated automatically.

```bash
pnpm new-feature
```

By running this command, first enter the name of the feature. Then select the files and folders you want to create. To select or deselect, use the `Space` key in the browser.

Each folder may contain a required file, and each file (in the root of the feature folder or in any subfolder) may contain the code required for minimal development.

### Manage all site paths

Inside the `src/config/routes.ts` file you can manage all your routes. This includes site pages and api routes.

### 🧪 Scripts

Below are some useful scripts that can help with project development:

| Command                | Description                                                                                                                  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `pnpm dev`             | Runs the development server on port 3000                                                                                     |
| `pnpm build:safe`      | Checks for typos before building                                                                                             |
| `pnpm build`           | Build for production                                                                                                         |
| `pnpm lint`            | Checks code against eslint rules                                                                                             |
| `pnpm lint:fix`        | Fixes problems on the fly in addition to what `lint` does                                                                    |
| `pnpm check-types`     | Checks for typescript errors                                                                                                 |
| `pnpm test`            | Running vitest tests                                                                                                         |
| `pnpm test:watch`      | Real-time execution and review of vitest tests                                                                               |
| `pnpm test:e2e`        | Run E2E tests with Playwright                                                                                                |
| `pnpm deploy:simple`   | Builds once before pushing the project to your GitHub repository                                                             |
| `pnpm deploy:strict`   | Checks types, eslint rules, and test results before pushing the code to the GitHub repository, and then builds (recommended) |
| `pnpm build-storybook` | Export static Storybook                                                                                                      |

---

## 📚 Things you need to know about libraries

I have created configurations for each library that can improve the quality of the output, provide a better development experience, and be suitable for most projects.

> Please note that these configs are personal. If you have any problems with the configuration, you will need to apply the changes manually

### 🎨 Mantine UI

- Integrating Link Next.js and Next-Intl components with Mantine components

- Integrating Image Next.js component with Mantine Image component

### 🌍 Next-Intl

- typescript augmentation: Accurate typing for default language keys

- vscode integration: Using the i18n Ally plugin (if you install this plugin)

- storybook: Internationalization test within Storybook

### 🌐 Axios

- Built-in retry without a library

---

## 🌍 Localization (i18n)

Powered by `next-intl`. All messages are managed inside:

```bash
src/config/i18n/messages/{locale}.json
```

### Add translation (i18n)

1. Create a new translation file in the path `src/config/i18n/messages/{langKey}.json`. Note that you must replace `langKey` with your desired language key.

2. Add new text keys:
   
   ```json
   {
     "key": "text"
   }
   ```

3. Use in component:
   
   ```jsx
   const t = useTranslations();
   return <Text>{t('key')}</Text>;
   ```

---

## 🚀 Deployment

You can deploy to any Vercel-compatible platform. Just make sure to set environment variables correctly via `.env`.

---

## 🧑‍💻 Author

Made with ❤️ by [Seyed Mojtaba Shadab](https://www.shaadcode.ir)

📧 shaadcode@gmail.com

🔗 [GitHub](https://github.com/shaadcode)

---

## 📄 License

[MIT](./LICENSE)
