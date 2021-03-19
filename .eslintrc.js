module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: ["plugin:vue/vue3-recommended", "prettier"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "no-process-env": "off",
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "always",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/require-default-prop": "off",
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": true,
      }
    }]

    // "prettier/prettier": [
    //   "error",
    //   // 针对会被 ESLint 格式化的文件类型，Prettier 会作为 ESLint 的一个规则运行并格式化文件，因此需要添加如下配置
    //   {
    //     tabWidth: 2,
    //     trailingComma: "es5",
    //   },
    // ],
  },
};
