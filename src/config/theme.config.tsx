import { MantineThemeOverride, Global } from "@mantine/core";
import bold from "assets/fonts/Helvetica/Helvetica-Bold.ttf";
import black from "assets/fonts/Helvetica/Helvetica-BoldOblique.ttf";
import medium from "assets/fonts/Helvetica/Helvetica-Oblique.ttf";
import regular from "assets/fonts/Helvetica/Helvetica.ttf";
import light from "assets/fonts/Helvetica/Helvetica-light.ttf";

export const globalTheme: MantineThemeOverride = {
  defaultRadius: 10,
  primaryShade: 6,
  fontFamily: "Helvetica, sans-serif",
  primaryColor: "indigo",
  shadows: {
    md: "0px 0px 5px rgba(0, 0, 0, 0.1)",
  },
  cursorType: "pointer",
  radius: {
    lg: 18,
    xl: 24,
    md: 16,
    sm: 12,
    xs: 8,
  },
  spacing: {
    lg: 20,
    xl: 24,
    md: 16,
    sm: 12,
    xs: 8,
  },
  headings: {
    sizes: {
      h1: {
        fontSize: 64,
        fontWeight: 700,
        lineHeight: "64px",
      },
      h2: {
        fontSize: 48,
        fontWeight: 700,
        lineHeight: "32px",
      },
      h3: {
        fontSize: 36,
        fontWeight: 500,
      },
      h4: {
        fontSize: 30,
        fontWeight: 500,
      },
      h5: {
        fontSize: 26,
        fontWeight: 400,
      },
      h6: {
        fontSize: 20,
        fontWeight: 400,
      },
    },
  },
  fontSizes: {
    xl: 32,
    lg: 24,
    md: 18,
    sm: 14,
    xs: 10,
  },
  breakpoints: {
    lg: 1200,
    xl: 1440,
    md: 960,
    sm: 600,
    xs: 380,
  },

  colors: {
    indigo: [
      "#4E4464",
      "#463A60",
      "#3E315C",
      "#372859",
      "#311F58",
      "#2A1657",
      "#240D57",
      "#231348",
      "#22163D",
      "#201734",
    ],
    violet: [
      "#B7AFC9",
      "#A599C0",
      "#9381BB",
      "#8168BA",
      "#6F4DBE",
      "#5E33C1",
      "#501FC1",
      "#4F2BA1",
      "#4C3288",
      "#483574",
    ],
    grape: [
      "#fff",
      "#F7F6FA",
      "#E0DAEC",
      "#C9BEE3",
      "#B39FE0",
      "#9C7DE2",
      "#8456EC",
      "#784DD8",
      "#6D47C3",
      "#6648AB",
    ],
    pink: [
      "#F6F2FF",
      "#E8D9EA",
      "#EDE5FF",
      "#E1BBE6",
      "#CCB6FF",
      "#E294EE",
      "#E87BF8",
      "#DB7BE9",
      "#CF7BDB",
      "#C37ACE",
    ],
    gray: ["#BDBDBD", "#F2F2F2", "#E0E0E0", "#BDBDBD", "#828282", "#4F4F4F"],
  },
};

export const CustomFonts = () => (
  <Global
    styles={[
      {
        "@font-face": {
          fontFamily: "Helvetica",
          src: `url('${bold}') format("ttf")`,
          fontWeight: 700,
        },
      },
      {
        "@font-face": {
          fontFamily: "Helvetica",
          src: `url('${black}') format("ttf")`,
          fontWeight: 900,
        },
      },
      {
        "@font-face": {
          fontFamily: "Helvetica",
          src: `url('${medium}') format("ttf")`,
          fontWeight: 500,
        },
      },
      {
        "@font-face": {
          fontFamily: "Helvetica",
          src: `url('${regular}') format("ttf")`,
          fontWeight: 400,
        },
      },
      {
        "@font-face": {
          fontFamily: "Helvetica",
          src: `url('${light}') format("ttf")`,
          fontWeight: 200,
        },
      },
    ]}
  />
);

export const GlobalStyles = () => (
  <Global
    styles={(theme) => ({
      body: {
        background: "linear-gradient(0deg, #F6F2FF, #F6F2FF), #FBFAFF"
      },
    })}
  />
);
