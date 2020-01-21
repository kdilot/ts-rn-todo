module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                alias: {
                    '@asset': './src/assets',
                    '@screen': './src/screens',
                    '@navigation': './src/navigations',
                    '@hook': './src/hooks',
                    '@reducers': './src/reducers',
                    '@reducer': './src/reducers',
                    '@store': './src/store',
                },
                extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
            },
        ],
    ],
};
