module.exports = {
  mode: 'jit',
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#51B1A6',
        'secondary': '#5E5BD9',
        'dark': '#24243F',
        't-primary': '#5A5A75',
        't-secondary': '#8C8CA1',
        'accent': '#F5F7FA',
        'light': '#FAFCFE',
        'light2' : '#c3d0dc',
        'warning' :'#FFB802'
      }
    }
  }
}
