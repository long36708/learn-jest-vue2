# jest-vue

- 使用pnpm 安装依赖，运行测试用例报错 `SyntaxError: Cannot use import statement outside a module`

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Vue2项目 配置jest

### 安装依赖

```shell
npm install --save-dev jest @vue/test-utils@^1.1.0 vue-jest babel-jest jest-environment-jsdom babel-core@^7.0.0-bridge.0 @babel/core
```

### 配置 jest.config.js

```js
// jest.config.js
module.exports = {
    // 指定测试文件的匹配模式
    testMatch: [
        '**/__tests__/**/*.spec.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    // 在 jsdom 环境中运行测试，是一个在 Node.js 中模拟浏览器环境的工具
    testEnvironment: 'jsdom',
};

```
