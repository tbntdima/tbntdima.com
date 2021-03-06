export default {
  breakpoints: ["40em", "56em", "64em"], // 640, 896, 976
  sizes: {
    container: 996,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
    heading:
      'Poppins, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 18, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 900,
  },
  lineHeights: {
    body: "26px",
    heading: 1.2,
  },
  initialColorModeName: "light",
  colors: {
    text: "#151515",
    textReverse: "#FFFFFF",
    background: "#f9fafb",
    primary: "#0057FF",
    // secondary: "#30c",
    muted: "#30353E",
    white: "#fff",
    black: "#000",
    cardBackground: "#fff",
    codeBackground: "rgba(255, 229, 100, 0.2)",
    modes: {
      dark: {
        text: "rgba(255, 255, 255, 0.88)",
        textReverse: "#151515",
        background: "#20232A",
        primary: "#F8DF00",
        // secondary: "#30c",
        muted: "#30353E",
        white: "#fff",
        black: "#000",
        cardBackground: "#30353E",
        codeBackground: "rgba(115, 124, 153, .2)",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: 2,
      h1: {
        mt: 0,
        mb: 3,
        color: "text",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 5,
      },
      h2: {
        mt: 5,
        mb: 3,
        color: "primary",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 4,
        textTransform: "uppercase",
      },
      h3: {
        mt: 0,
        mb: 3,
        color: "primary",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 3,
      },
      h4: {
        mt: 0,
        mb: 3,
        color: "primary",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 2,
      },
      h5: {
        mt: 0,
        mb: 3,
        color: "primary",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 1,
      },
      h6: {
        mt: 0,
        mb: 3,
        color: "primary",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 0,
      },
      p: {
        mt: 0,
        mb: 3,
        fontFamily: "body",
        fontWeight: "body",
        lineHeight: "body",
      },
      a: {
        color: "primary",
      },
      blockquote: {
        m: 0,
        pl: 3,
        borderLeft: "2px solid",
        borderColor: "primary",
        fontSize: 1,
      },
      ul: {
        mt: 0,
        mb: 4,
      },
      li: {
        mb: 2,
      },
      pre: {
        fontFamily: "monospace",
        overflowX: "auto",
        code: {
          color: "inherit",
        },
      },
      code: {
        fontFamily: "monospace",
        fontSize: "inherit",
      },
      table: {
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: 0,
      },
      th: {
        textAlign: "left",
        borderBottomStyle: "solid",
      },
      td: {
        textAlign: "left",
        borderBottomStyle: "solid",
      },
      img: {
        maxWidth: "100%",
      },
      'code[class*="language-"]': {
        color: "text",
        backgroundColor: "codeBackground",
      },
      'pre[class*="language-"]': {
        "& code": {
          color: "inherit",
          backgroundColor: "inherit",
        },
      },
    },
  },
  links: {
    secondary: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      p: "8px 16px",
      backgroundColor: "cardBackground",
      boxShadow: "0px 2px 4px rgba(92, 99, 105, 0.15)",
      borderRadius: "100px",
      color: "primary",
      textDecoration: "none",
    },
  },
}
