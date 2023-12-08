## vite-mui-ts boilerplate

TypeScript + React + MUI + RRD + ESLint + Prettier

![vite-mui-ts](https://i.ibb.co/j8JSrhV/Screenshot-2023-07-06-121352.png)

### Getting Started

#### Clone the repo

```
npx degit emre-cil/vite-mui-ts my-app
```

```
cd my-app
```

#### Install Dependencies

```
pnpm install
```

#### Run

```
pnpm dev
```

#### Paths

Application using absolute paths
Example: '@/components/Counter/Counter';

if you don't want to use you can remove these lines from

> vite.config.ts

```
 resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
```

> tsconfig.json

```
"paths": {
      "@/*": ["./*"]
    }
```


### Scripts

| Script        | Description                        |
| ------------- | ---------------------------------- |
| npm dev      | Runs the application.              |
| npm build    | Create builds for the application. |
| npm preview  | Runs the Vite preview              |
| npm lint     | Display eslint errors              |
| npm lint:fix | Fix the eslint errors              |
| npm format   | Runs prettier for all files        |
| npm test     | Run tests                          |

### Check List
````
