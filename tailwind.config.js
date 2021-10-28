module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  // These paths are just examples, customize them to match your project structure
  purge: [
    // './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
}
