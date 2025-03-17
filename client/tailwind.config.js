// /** @type {import('tailwindcss').Config} */
// import daisyui from 'daisyui';

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: ["light", "dark", "cupcake"], // ✅ Ensures dark mode is included
//   },
// };

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // ✅ This is correct
  daisyui: {
    themes: ["light", "dark", "cupcake"], // ✅ Ensure themes are loaded
  },
};
