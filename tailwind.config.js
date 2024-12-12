module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Adjust this to match your project paths
  theme: {
    extend: {
    
      rotate: {
        '360': '360deg',
      },
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



