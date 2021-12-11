module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267Df",
        "bookmark-grey": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-white": "#F7F7F7",
      },
    },
    fontFamily: {
      Poppins: ["Poppins,sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1224px",
        xl: "1224px",
        "2xl": "1224px",
      }    
    }
  },
  plugins: [],
}
