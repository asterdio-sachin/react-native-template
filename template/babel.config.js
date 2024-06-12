module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@root': '../',
          '@src': './src',
          '@apptypes': './src/types',
          '@assets': './src/assets',
          '@components': './src/views/components',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screens': './src/views/screens',
          '@ui': './src/views/ui',
          '@helpers': './src/helpers',
          '@wrappers': './src/views/wrappers',
        },
      },
    ],
  ],
};
