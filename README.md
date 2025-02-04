<a href="https://github.com/whosramoss/nextjs-remote-jobs">
  <img alt="nextjs-remote-jobs" src="./public/thumbnail.png" />
  <h1 align="center">Nextjs Remote Jobs</h1>
</a>

<p align="center">
  Remote Jobs Dashboard
</p>

<div align="center">
  <img src="https://img.shields.io/badge/next.js-242424?style=for-the-badge&logo=nextdotjs" alt="Website">
  <img src="https://img.shields.io/badge/React-563D7C?style=for-the-badge&logo=React&logoColor=fff" alt="React">
  <img src="https://img.shields.io/badge/Tailwind-FEFEFE?style=for-the-badge&logo=tailwindcss" alt="Tailwind">
  <img src="https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&logo=typescript&logoColor=fff" alt="TypeScript">
  <br/>
  <img src="https://img.shields.io/badge/Prettier-242424?style=for-the-badge&logo=prettier" alt="Prettier">
  <img src="https://img.shields.io/badge/eslint-0170FE?style=for-the-badge&logo=eslint" alt="eslint">
  <img src="https://img.shields.io/badge/zod-242424?style=for-the-badge&logo=zod" alt="zod">
</div>
<br/>

<br/>



## How to install 

```bash
  # Clone the project
  git clone https://github.com/whosramoss/nextjs-remote-jobs/

  # Go to the project directory
  cd nextjs-remote-jobs

  # Install dependencies
  npm install

  # Start the server 
  npm run dev
```

## How to build 
- Before generating the build, don't forget to update the [layout](./src/app/layout.tsx) file and set ```isLocalMetadata = false```.
- To generate a static compilation, the [next.config.mjs](./next.config.mjs) file must have the object below :
```bash
const staticbuild = {
  distDir: 'build',
  output: 'export',
  trailingSlash: true,
}
```
- Run the command:
```bash
  npm run build
```


## Contributing 
If you want to contribute to `nextjs-remote-jobs`, please make sure to review the [contribution guidelines](https://github.com/whosramoss/nextjs-remote-jobs/blob/master/CONTRIBUTING.md). This project makes use of [GitHub issues](https://github.com/whosramoss/nextjs-remote-jobs/issues) for
tracking requests and bugs.

## License 

MIT License. [LICENSE](./LICENSE)

## Author 

Gabriel Ramos ([@whosramoss](https://github.com/whosramoss))

