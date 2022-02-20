module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/preset-scss",
    "@whitespace/storybook-addon-html"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}