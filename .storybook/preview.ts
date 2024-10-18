import type { Preview } from "@storybook/react";
// import 'devextreme/dist/css/dx.light.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
