module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      width: {
        '76': '19rem',
        '128': '32rem'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#367708",
        
"secondary": "#B7228A",
        
"accent": "#FC4700",
        
"neutral": "#23282F",
        
"base-100": "#D6D4DF",
        
"info": "#0092D6",
        
"success": "#6CB288",
        
"warning": "#DAAD58",
        
"error": "#AB3D30",
        },
      },
    ],
  },
}
