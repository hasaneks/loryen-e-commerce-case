module.exports = {
  plugins: {
    'postcss-nested': {},
    autoprefixer: {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: { '--p': '(max-width: 980px)' }
        },
        {
          customMedia: { '--d': '(max-width: 1440px)' }
        }
      ]
    }
  }
}
