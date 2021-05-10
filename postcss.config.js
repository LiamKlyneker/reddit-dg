module.exports = {
  plugins: [
    ['tailwindcss', {}],
    'autoprefixer',
    'postcss-nested',
    [
      'postcss-preset-env',
      {
        stage: 3,
        features: {
          'nesting-rules': true,
        },
      },
    ],
  ],
};
