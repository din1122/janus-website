/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/theme';
export default {
  content: [
    '*',
    './node_modules/@nextui-org/theme/dist/components/dropdown.js'
  ],
  theme: {
    extend: {}
  },
  plugins: [nextui()]
};
