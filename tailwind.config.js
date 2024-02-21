module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        84: "84px",
        "footer-mob-h": "721px",
        "hero-mob": "1600px",
      },
      width: {
        "title-mob": "220px",
        "footer-about-lap": "220px",
      },
      margin: {
        40: "40px",
      },
      colors: {
        black: "#1a1a1a",
      },
      fontSize: {
        sm: ["14px", "18px"],
        base: ["16px", "24px"],
        lg: ["18px", "24px"],
        xl: ["20px", "26px"],
        xxl: ["24px", "28px"],
      },
    },
    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1280px",
      desktop: "1600px",
    },
  },
  plugins: [],
};
