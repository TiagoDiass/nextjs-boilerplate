import { GlobalStyles } from '../src/styles';
export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
