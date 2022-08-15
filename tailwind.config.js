/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, ts, js}", "./index.html"],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        fontAcme: ['Acme', 'monospace'],
      }
    },
  },
  plugins: [],
}
