module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Adjust this to match your project paths
  theme: {
    extend: {
      // animation: {
      //   'fade-in': 'fadeIn 1s ease-in-out',
      //   'fade-out': 'fadeOut 1s ease-in-out',
      // },
      // keyframes: {
      //   fadeIn: {
      //     '0%': { opacity: '0' },
      //     '100%': { opacity: '1' },
      //   },
      //   fadeOut: {
      //     '0%': { opacity: '1' },
      //     '100%': { opacity: '0' },
      //   },
      // },
      colors: {
        darkYellow: '#bda300', // Custom dark yellow color
      },
      keyframes: {
        blink: {
          "0%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
          "100%": { borderColor: "transparent" },
        },
      },
      animation: {
        blink: "blink 0.8s step-end infinite", // Typing cursor effect
      },
    },
  },
};



