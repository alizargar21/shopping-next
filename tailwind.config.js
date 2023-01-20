/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors : {
      'primary' : "#2563eb",
      
      'primaryTxt': {
        light: '#323232',
        DEFAULT: '#424750',
        dark: '#f3f4f5',
      },
      'secondaryTxt': {
        light: '#67e8f9',
        DEFAULT: '#06b6d4',
        dark: '#0e7490',
      },
      'layoutBgc': {
        light: '#f3f4f5',
        
        dark: '#0f172a',
      },
      'divBgc': {
        light: '#fcfdff',
        
        dark: '#1e293b',
      },

     }
      
    },
   
    fontFamily: {
      farsi: "'iranyekan', 'IRANSans', 'Tahoma'",
      english: "'Poppins', 'Roboto', 'sans-serif'",
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
