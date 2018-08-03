module.exports = api => {
  api.cache.invalidate(() => process.env.NODE_ENV === 'production');
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-export-default-from',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-class-properties',
    ],
  };
};
