/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundBlue: "#0274BE", // lighter blue background color
        buttonBlue1: "#0267A9", // lighter blue button color
        buttonBlue2: "#003664", // darker blue button color
        topBarBlue: "#0274BE",
        card: "#FFFFFF", // card color
        textRegular: "#2B2B2B", // regular black text color
        inputField: "#EDEDED", // grey input field background
        landingPageBackground: "#E3EEFF", // landing page background
        iconHover: "#69c0ff", // icon color hover
        error: "#e63946", // error color
        success: "#007f5f", // success color

        // table subjects
        tableHeader: "#E8E9EF",
      },
      dropShadow: {
        centered1: "0 0px 10px rgba(0, 0, 0, 1)",
        centered2: "0 5px 5px #adb5bd",
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
