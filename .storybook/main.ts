import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    if (!config || !config.resolve || !config.module?.rules) {
      return;
    }

    // Добавляем алиасы
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
      "@shared": path.resolve(__dirname, "../src/shared"),
    };

    // Находим правило обработки CSS
    const cssRule = config.module.rules.find(
      (rule) => rule!.test && rule!.test.test(".css")
    );

    // Удаляем правило обработки CSS
    config.module.rules.splice(config.module.rules.indexOf(cssRule), 1);

    // Добавляем правило для обработки Sass
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    return config;
  },
};
export default config;
