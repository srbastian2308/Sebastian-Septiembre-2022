# Test Talana Front-end
- To make it works add this variable in .env at src level
`VITE_BREAKING_BAD_URL='https://www.breakingbadapi.com/api/'`
- Some screnshots of the project

|   |  |    |
| :---:   | :---: | :---: |
| ![Screen Shot 2022-09-08 at 05 24 41](https://user-images.githubusercontent.com/113084597/189100078-30425e8e-bf1f-477c-b4ac-73d239395db7.png) | ![Screen Shot 2022-09-08 at 05 25 00](https://user-images.githubusercontent.com/113084597/189100103-5844e696-ef14-4922-ab78-c2b6bba75558.png) | ![Screen Shot 2022-09-08 at 05 25 07](https://user-images.githubusercontent.com/113084597/189100108-a886b751-da3d-441a-b054-9349a10f7e40.png) |
| ![Screen Shot 2022-09-08 at 05 24 48](https://user-images.githubusercontent.com/113084597/189100095-cc9182e4-a922-483e-b137-e7cd0feb2ba9.png) | ![Screen Shot 2022-09-08 at 05 25 16](https://user-images.githubusercontent.com/113084597/189100115-852138ae-7541-48d1-be4f-6d304c19eca2.png) | ![Screen Shot 2022-09-08 at 05 25 25](https://user-images.githubusercontent.com/113084597/189100116-02dd6214-0d20-4d7b-829b-f9726d206f4e.png)   |


This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://Github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
