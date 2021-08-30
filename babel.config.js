module.exports = api => {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.js', '.json'],
          alias: {
            store: './src/store',
            helpers: './src/helpers',
          },
        },
      ],
    ],
  };
};
