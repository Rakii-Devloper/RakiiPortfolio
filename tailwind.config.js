module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Adjust this to match your project paths
  theme: {

    screens: {
      xs: '320px',       // Extra small
      sm: '640px',       // Small
      md: '768px',       // Medium
      lg: '1024px',      // Large
      xl: '1280px',      // Extra Large
      xxl: '1536px',     // Double Extra Large (instead of '2xl')
      xxxl: '1920px',    // Triple Extra Large
    },

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



