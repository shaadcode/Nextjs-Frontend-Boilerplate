## [1.9.1](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/compare/v1.9.0...v1.9.1) (2025-05-31)


### Bug Fixes

* **config:** fix the problem of environment variable not working in the root of the project ([0e29193](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/0e291938a34c57075a57617beb75134bb364858a))
* **config:** fixed the issue of browsers not being installed during playwright tests ([8fd02d3](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/8fd02d3118837758403fa9e1ad4fba844e6809c1))

# [1.9.0](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/compare/v1.8.0...v1.9.0) (2025-05-28)


### Bug Fixes

* **config:** fix eslint error for style/jsx-curly-brace-presence rule in CLI ([f047f3b](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/f047f3b86430693b71bfd05c9a6987c61f2742a0))
* **testing:** fixed the issue of github action failing due to tests ([2b6186b](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/2b6186b4950532205ea4ed9ab2b628fb7a469713))


### Features

* **config:** add the ability to test components in storybook ([c6a98dc](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/c6a98dc9d7eb35d3974bb8243ee08eed125d47d7))
* **config:** added the ability to create queries in axios ([db020c9](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/db020c94362a91f9539972e90c281e0c810bc257))
* **config:** adding transparent value to colors in mantine ui ([1d3fcb8](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/1d3fcb885d78c41e3141e17b66f0efd64dc54e8a))
* **config:** adding WCAG testing with storybook ([20fba0f](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/20fba0fb1c8a54c9078c93f803d05f4ef70378d3))
* **config:** enable Tailwind CSS IntelliSense for `classNames` prop ([7728add](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/7728addfaf3e70f7d43e0003730a8954db51936a))
* **config:** expanding the size prop in the Container component ([ad87242](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/ad87242cd2bf128f84751c979099c9c67ce3a646))
* **config:** expansion and standardization of sizes in mantine ([6250255](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/6250255dd1fb7539def442204516c85a18143f9f))
* **config:** mantine UI integration with tailwindcss ([19c4343](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/19c4343268acb4a4d7881cf085f1bdb00464f8f8))
* **config:** remove test-results from git tracking ([f92cecc](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/f92cecc4cd10cdb7aa865afb559360557d85d14d))
* **deps:** add the mantine notifications library ([44be89f](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/44be89fa64e73ee5d95f0caa55371aca9a93daf8))
* **deps:** adding react-scan library for performance checking ([3a124d2](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/3a124d2fce479a6bc70c6cd4a6815091171ef386))


### Performance Improvements

* **config:** add validation that the use of - (hyphen) in names is prohibited ([991359c](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/991359c666f22182a0a3c97a12c9196526cffa8c))
* **config:** creating a modular structure to manage site page paths ([58b8841](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/58b8841438d891cb3109a9d7ce6e304b33d3a220))
* **config:** transferring Mantine styles to server providers ([4bc8fe7](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/4bc8fe7e502759e7f3a421adeb8445574aec6d26))

# [1.8.0](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/compare/v1.7.0...v1.8.0) (2025-05-24)


### Features

* **config:** add restriction on not using regular strings in jsx ([7e5f0f8](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/7e5f0f8ca3cfae76cfd55184320d060002d6dee0))
* **config:** added debug mode for vscode ([576ad79](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/576ad79c73e823ce76a60c3417f753cfe9af078e))
* **config:** adding liniting to the build:safe script ([85e7c7a](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/85e7c7a358f76805880364b1fe4b3c5ba737e781))
* **config:** integrate common configurations between tanstack query and axios ([4abc406](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/4abc4067f367dabd5275361b645681ff9aad6ea3))
* **config:** integrating eslint with tanstack query ([3592c69](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/3592c69cec4ae8c75e50cb37d25689f470d1ff62))


### Performance Improvements

* **config:** improved vscode configuration ([d0b79a2](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/d0b79a2118d3fcefe2ba86192241bee12f15d612))
* **config:** remove vscode-typescript-next plugin from recommended plugins section ([f39048e](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/f39048e28f0bef37a62001907a3f2d8ec61083c3))

# [1.7.0](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/compare/v1.6.0...v1.7.0) (2025-05-20)


### Features

* **config:** adding autoRem functionality to postCSS ([292eab0](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/292eab0d2b99d0d1744ea7d5d99b8545b7c019a5))
* **config:** excluding files that do not play a direct role in the development process ([3d7f69a](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/3d7f69a136643f789da8b78fa398ba866b9c4af0))
* **config:** integrating Image Next.js component with Mantine Image component ([461dd2a](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/461dd2ad9d42709e96054aed40c9b295b113c8b1))
* **config:** integrating Link Next.js and Link Next-Intl components with Mantine's Anchor component ([6ee332b](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/6ee332b51bccf7ffd49fdfc3c04c3e52347cbccd))
* **config:** mantine integration with vscode ([4d56f2a](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/4d56f2a76d1876bbd8902f7cbce5acdeb3406871))


### Performance Improvements

* **config:** adding retry customization in axios ([a5d5a51](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/a5d5a51dffe760377d706fb1f8a305887d5cae88))

# [1.6.0](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/compare/v1.5.0...v1.6.0) (2025-05-16)


### Bug Fixes

* **deps:** fix the problem of Eslint not running ([fa49b9d](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/fa49b9dea323bb7b7779f68296b5a472a1ab80fe))


### Features

* **config:** add routes.ts file to manage site routes ([e5fa70d](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/e5fa70d15108bc9cf3e5f1e042755821105aef71))
* **config:** adding eslint rules for storybook ([6ba7e7c](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/6ba7e7c56a7f57107bae23895e0de60272907adc))
* **config:** enable TypeScript augmentation for Next-Intl ([a320051](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/a320051a8ebd9b98441f1bea901757141caffac5))
* **config:** internationalization within Storybook ([1767b44](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/1767b446137996d188b32fccb171f84bd1884442))
* **config:** next -Intl integration with vscode ([e490f6d](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/e490f6d5d0a1d27a2024f465398a22721097edf7))

# [1.5.0](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/compare/v1.4.2...v1.5.0) (2025-05-11)


### Features

* **config:** increasing output security in CI workflow ([3fb32db](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/3fb32db6b84fa348b6b9f6ba5a64ebfda6c37a6f))

## [1.4.2](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/compare/v1.4.1...v1.4.2) (2025-05-11)


### Bug Fixes

* **config:** fixed a bug where build next.js failed in CI workflow ([ded2dc4](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/ded2dc4377a91ea62827d4c4fce1dc3910db362b))

## [1.4.1](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/compare/v1.4.0...v1.4.1) (2025-05-11)


### Bug Fixes

* **config:** fix CI workflow not running error in production environment ([7c8db93](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/7c8db937945ed843d76887710ec03c81faaa5935))

# [1.4.0](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/compare/v1.3.0...v1.4.0) (2025-05-11)


### Bug Fixes

* **config:** remove deprecated npm configurations ([a940d57](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/a940d578a8b4519150afb199b401fef82a5350b5))


### Features

* automatically generate files when creating a new feature with the CLI ([1ea84fd](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/1ea84fd3361aee63ea5da433b5eaebc987bb8de5))
* **config:** added `eslint-plugin-format` plugin for eslint ([c244063](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/c244063d0cc1a2cba6c65f32dc2e01126adc59d2))
* **config:** added recommended vscode plugins ([ed5bdb9](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/ed5bdb966be8d23f5aa50d10a084f5bef9869ee5))
* **config:** adding scripts for project deployment ([ff5cfd5](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/ff5cfd5ca491db8ca6c156808fc0e2477b44a895))

# [1.3.0](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/compare/v1.2.0...v1.3.0) (2025-05-10)


### Features

* **config:** add a robots.ts file to manage robots.txt files ([2f69a0c](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/2f69a0c73dc4a9571f9751c7c7b0657474689148))
* **config:** add global-error file to the root of the application ([ce6d4d7](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/ce6d4d725c8f696e510325ed245b51b190a78aa8))
* **config:** adding a sitemap.ts file to manage sitemap.xml ([35659aa](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/35659aae95e1801fc977cd682ae36a370a77a36d))

# [1.2.0](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/compare/v1.1.0...v1.2.0) (2025-05-08)


### Bug Fixes

* **config:** configuring storybook for next.js ([2ca52b1](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/2ca52b186a2e1c9b15fc85752b825d394ba73a08))
* **config:** fix the problem of not finding the Next-Intl configuration ([4a0ad32](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/4a0ad32b9c7b9b01eab7191cc25817be6179ed2a))
* **config:** fix the problem of vitest not running ([86af2df](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/86af2df870d1618007944837c41b56547451d97a))
* **config:** redirect root path to default locale using middleware ([9c04d34](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/9c04d34dafe2b996ecf6ac7c9cffa21632d3ff60))
* **config:** resolve incorrect Mantine theme that caused white UI ([9c0d240](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/9c0d240c1dc529ff229f1926b3fde164a1390ff8))


### Features

* **config:** basic T3 env config ([d5cc809](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/d5cc8099f56f5ef2c05e763679a759f65e30d81a))
* **config:** using the Link Next-Intl component in Mantine ([7d2487f](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/7d2487f949cf2ec6318a8d24b92e7e5ea3d34b80))
* **deps:** add devtools for tanstack query ([ad67cad](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/ad67cad4dbf8fd3038229077766b8b6705b29e0f))
* **deps:** installing new dependencies ([b78fd0a](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/b78fd0ac7d4ee0fd3b5a79b83d0f02d2801dfda5))

# [1.1.0](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/compare/v1.0.0...v1.1.0) (2025-05-05)


### Features

* **config:** adding the .env.example file ([56aa297](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/56aa2978c3bdd778ecc5692ef4b71ceb0c90ed7c))
* **config:** basic axios configuration ([ba453f4](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/ba453f4ed652fcf06af0b959fa8ea9d4cede361d))
* **deps:** managing requests with Axios ([940547f](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/940547f5beb2b78f8015f8e6d033b89a3b43f4db))

# 1.0.0 (2025-05-05)


### Bug Fixes

* **config:** add required scopes for commitlint ([724ffd6](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/724ffd61b91ae10aff6230a2d80e4bc575960de1))
* **config:** changing the repository address in semantic-release ([3228033](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/32280331a10e438f5716836e11519235fe1a7331))
* **config:** difference between pnpm version in github actions and package.json ([77c4c3a](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/77c4c3a37a274379ea71f0efcc75ec38d3694a9f))
* **config:** no semantic-release dependency ([0111395](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/0111395122f75722d4a1bcd0cacc83db4649f8ec))


### Features

* **config:** not creating a commit when there are no files in the stage ([1d75fa2](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/1d75fa2e9bff555bb0a40e424d2708f3aa831ed5))
* setup project ([8709d85](https://github.com/shaadcode/Nextjs-Frontend-Boilerplate/commit/8709d853707a8e7f48579900cc060bb849adb908))
