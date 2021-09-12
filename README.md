## 1. Project setup : 
### 1-1. yarn install *インストールしていない場合
    npm install --global yarn
    yarn --version
### 1-2.  create-react-app
    npx create-react-app . --template redux-typescript
### 1-3.  Tailwind CSS のインストール
    yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
    yarn add @craco/craco
###
https://tailwindcss.com/docs/guides/create-react-app
### 1-4.  package.json scriptの編集
~~~
  {
    // ...
    "scripts": {
     "start": "craco start",
     "build": "craco build",
     "test": "craco test",
    // ...
    },
  }
~~~
### 1-5.  craco.configの作成
    touch craco.config.js
~~~
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
~~~
### 1-6. tailwind.config.js, postcss.config.jsの生成
    npx tailwindcss init -p
### 1-7. tailwind.config.jsのpurge設定追加
~~~
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
~~~
### 1-8. ./src/index.cssの編集
~~~
@tailwind base;
@tailwind components;
@tailwind utilities;
~~~
### 1-9. react-query axios react-router-dom heroicons のインストール
    yarn add react-query react-query-devtools react-router-dom @types/react-router-dom axios @heroicons/react
### 1-10.  prettierの設定 : settingsでRequire Config + Format On Saveにチェック
    touch .prettierrc
~~~
  {
      "singleQuote": true,
      "semi": false
  }
~~~  