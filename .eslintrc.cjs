const jsxA11y = require("eslint-plugin-jsx-a11y");

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "jsx-a11y"], // 修正: 引用符の不一致を修正
  rules: {
    "jsx-a11y/alt-text": "error", // 修正: 有効なルール名に変更
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  settings: {
    "jsx-a11y": {
      polymorphicPropName: "as",
      components: {
        CityInput: "input",
        CustomButton: "button",
        MyButton: "button",
        RoundButton: "button",
      },
      attributes: {
        for: ["htmlFor", "for"],
      },
    },
  },
};
