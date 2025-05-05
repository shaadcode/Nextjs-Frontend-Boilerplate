# 🚀 Next.js Frontend Boilerplate

> A modern, batteries-included Next.js 15 frontend boilerplate designed for rapid development and scalable applications.

---

## 🎯 Features

- ⚡ **Next.js 15** with **Turbopack** support
- 🎨 UI powered by **Mantine v7**
- 🌍 Built-in **Internationalization (i18n)** with `next-intl`
- 🧪 **Vitest** for unit testing + `vitest-setup.ts`
- 🧭 **Playwright** for E2E testing
- 🧼 Strict linting via **ESLint** and **lint-staged**
- 🎨 **TailwindCSS v4** ready
- 📦 **Storybook 8** with onboarding & styling addons
- 📖 **Commitlint**, **Husky**, and **Conventional Commits** setup
- 📐 **TypeScript** + aliases + strong types
- ✨ Pre-configured `postcss`, `cz-git`, and custom `scripts`
- 🗂️ Clean folder structure and scalable architecture

---

## 🛠️ Getting Started

### 📦 Requirements

- **Node.js** ≥ 20
- **pnpm** = 10.10.0

### 🔧 Installation

```bash
pnpm install
```

### 🏁 Run the app (with Turbopack)

```bash
pnpm dev
```

This opens `http://localhost:3000` automatically.

## 🧪 Scripts

| Command                | Description                   |
| ---------------------- | ----------------------------- |
| `pnpm dev`             | Start dev server (Turbopack)  |
| `pnpm build`           | Build for production          |
| `pnpm lint`            | Run ESLint                    |
| `pnpm test`            | Run unit tests via Vitest     |
| `pnpm test:e2e`        | Run E2E tests with Playwright |
| `pnpm storybook`       | Launch Storybook locally      |
| `pnpm build-storybook` | Export static Storybook       |

---

## 🧩 Technologies Used

- **Next.js** 15

- **React** 19

- **TypeScript** 5

- **Mantine UI** 7

- **TailwindCSS** 4

- **Vitest** + `@vitest/browser`

- **Playwright**

- **Storybook** 8

- **ESLint** (Airbnb-style + accessibility + Playwright)

- **PostCSS**

- **Commitlint** + **cz-git**

- **Husky**



---



## 🌍 Localization (i18n)

Powered by `next-intl`. All messages are managed inside:

```bash
src/config/i18n/messages/{locale}.json
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
