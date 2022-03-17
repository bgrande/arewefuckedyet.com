module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './index.html',
    ],
    options: {
      safelist: [
        /data-theme$/,
      ]
    },
  },
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        lightest: {
          "primary": "#43c3fa",
          "secondary": "#8c97fc",
          "accent": "#f67dbc",
          "neutral": "#d2d2d2",
          "base-100": "#2e2e3f",
          "info": "#20a8e3",
          "success": "#35d2bc",
          "warning": "#f5c55d",
          "error": "#fc778b",
        },
        lighter: {
          "primary": "#43c3fa",
          "secondary": "#8c97fc",
          "accent": "#f67dbc",
          "neutral": "#a1a2a4",
          "base-100": "#22252d",
          "info": "#20a8e3",
          "success": "#35d2bc",
          "warning": "#f5c55d",
          "error": "#fc778b",
        },
        light: {
          "primary": "#43c3fa",
          "secondary": "#8c97fc",
          "accent": "#f67dbc",
          "neutral": "#737783",
          "base-100": "#252c3d",
          "info": "#20a8e3",
          "success": "#35d2bc",
          "warning": "#f5c55d",
          "error": "#fc778b",
        },

        medium: {
          "primary": "#43c3fa",
          "secondary": "#8c97fc",
          "accent": "#f67dbc",
          "neutral": "#364052",
          "base-100": "#202b42",
          "info": "#20a8e3",
          "success": "#35d2bc",
          "warning": "#f5c55d",
          "error": "#fc778b",
        },
        dark: {
          "primary": "#ffc3fa",
          "secondary": "#aa97fc",
          "accent": "#f67dbc",
          "neutral": "#2f3c50",
          "base-100": "#1c0e0e",
          "info": "#aaa8e3",
          "success": "#aad2bc",
          "warning": "#aac55d",
          "error": "#fc778b",
        },
        darker: {
          "primary": "#fc778b",
          "secondary": "#ff8ff8",
          "accent": "#f677b9",
          "neutral": "#222f42",
          "base-100": "#180404",
          "info": "#ffa8e5",
          "success": "#ffd2bc",
          "warning": "#f5c457",
          "error": "#fc7287",
        },
        darkest: {
          "primary": "#c9001d",
          "secondary": "#c9001d",
          "accent": "#c9001d",
          "neutral": "#c9001d",
          "base-100": "#000000",
          "info": "#c9001d",
          "success": "#c9001d",
          "warning": "#c9001d",
          "error": "#c9001d",
        },
      },
    ]
  }
}
